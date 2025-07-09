import { FieldValues } from 'react-hook-form';
import { get } from 'lodash';
import * as Yup from 'yup';

export type TypeRequiredFields<T extends FieldValues> = {
  [K in keyof T]: T[K] extends FieldValues ? TypeRequiredFields<T[K]> & Partial<Yup.ObjectSchema<T[K]>['spec']> : Partial<Yup.ObjectSchema<T[K]>['spec']>;
};

export const getSchemaSpec = <T extends FieldValues>(schema: Yup.ObjectSchema<T>) => {
  const describeSchema = (schema: Yup.ObjectSchema<T>, isRoot: boolean): TypeRequiredFields<T> => {
    try {
      const fields = isRoot ? (schema.describe().fields as Record<string, Yup.SchemaDescription>) : schema.fields;
      return Object.entries(fields).reduce((acc, [key, schemaSpec]) => {
        const typedKey = key as keyof T;
        if (schemaSpec.type === 'object' && schemaSpec.fields) {
          acc[typedKey] = describeSchema(schemaSpec, false) as TypeRequiredFields<T[keyof T]>;
          return acc;
        }
        acc[typedKey] = schemaSpec;
        return acc;
      }, {} as TypeRequiredFields<T>);
    } catch (error) {
      console.error('Error Describing Schema Fields', error);
      return {} as TypeRequiredFields<T>;
    }
  };
  return describeSchema(schema, true);
};

export const getSchemaMeta = <T extends FieldValues>(schema: Yup.ObjectSchema<T>, fieldName: string): Record<string, string> => {
  if (!(schema.fields[fieldName] instanceof Yup.ObjectSchema)) return {};
  return get(schema.fields[fieldName].spec, 'meta') ?? {};
};
