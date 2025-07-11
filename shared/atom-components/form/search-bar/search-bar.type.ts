import { FieldValues, SubmitHandler } from 'react-hook-form';

export type TypeSearchBarForm = {
  keyword: string;
};

export interface SearchBarProps<T extends FieldValues = TypeSearchBarForm> extends Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit?: SubmitHandler<T>;
}
