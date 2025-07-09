'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, Stack, Typography } from '@/core/design-systems';

import SectionTitleClient from '@/shared/business-components/examples/layout/section-title.client';

import AlertsAndIconsExample from './alerts-and-icons-example.client';
import SelectExample from './select-example.client';
import SwitchesAndCheckboxesExample from './switches-and-checkboxes-example.client';
import TextInputsExample from './text-inputs-example.client';

interface ExampleFormValues {
  textField1: string;
  textField2?: string;
  enableFeature: boolean;
  agreeTerms: boolean;
  subscribeNewsletter: boolean;
  selectOption: string;
}

const FormClient = () => {
  const methods = useForm<ExampleFormValues>({
    defaultValues: {
      textField1: '',
      textField2: '',
      enableFeature: false,
      agreeTerms: false,
      subscribeNewsletter: false,
      selectOption: '',
    },
  });

  const onSubmit = (data: ExampleFormValues) => {
    console.log('Form Data:', data);
    alert('Form submitted! Check console for data.');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack direction="column" gap="40px" p="20px">
          <SectionTitleClient
            title="Example Form Page"
            description="Demonstrates various form components sharing a single FormContext."
          />
          <TextInputsExample />
          <SwitchesAndCheckboxesExample />
          <SelectExample />
          <AlertsAndIconsExample />
          <Button
            type="submit"
            variant="contained"
            color="augment/purple/600"
            size="large"
          >
            <Typography variant="body/body3" fontWeight={700}>
              Submit Form
            </Typography>
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default FormClient;
