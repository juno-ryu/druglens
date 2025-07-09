import { FieldPath, FieldValues, Path, PathValue } from 'react-hook-form';

export type TypeTriggerFieldsOptions<T extends FieldValues> = {
  type: 'trigger' | 'watch';
  fields: FieldPath<T>[];
  onChange?: () => void;
};

export type TypeTriggerFieldsStructure = {
  isValid: boolean;
};
