import { FieldValues } from 'react-hook-form';
import { cloneDeep, get, set } from 'lodash';

type ResetValuesOptions = {
  initialValues: FieldValues;
  currentValues: FieldValues;
  keepValues: string[];
};

const resetWithValues = (options: ResetValuesOptions): FieldValues => {
  const { initialValues, currentValues, keepValues } = options;
  const updatedValues = cloneDeep(initialValues);

  keepValues.forEach((path) => {
    const currentVal = get(currentValues, path);
    set(updatedValues, path, currentVal);
  });

  return updatedValues;
};

export default resetWithValues;
