import { FieldValues, SubmitHandler } from 'react-hook-form';
import { SxProps } from '@mui/material';
import { OverridableComponent } from '@/core/utils/types/overridable/component';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import { StackProps } from '@/core/design-systems/components/stack';

export type TypeLanguageForm = FieldValues & {
  languageCode: EnumLanguageCode;
};

export type LanguageProps<C extends React.ElementType, T extends FieldValues = TypeLanguageForm> = OverridableComponent<
  C,
  StackProps & {
    headlineStyle?: SxProps;
    submitStyle?: SxProps;
    onSubmit?: SubmitHandler<T>;
  }
>;
