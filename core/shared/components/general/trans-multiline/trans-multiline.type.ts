import { TransProps } from 'react-i18next';

export interface TransMultilineProps extends TransProps<'span'> {
  children: string;
}
