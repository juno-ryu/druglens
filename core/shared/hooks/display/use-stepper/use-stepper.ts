'use client';

import { useState } from 'react';
import { TypeStepperItem, TypeStepperOptions, TypeStepperStructure } from '@/core/shared/hooks/display/use-stepper/use-stepper.type';

const useStepper = (options: TypeStepperOptions) => {
  const { initialStep, initialRecord } = options;

  const [structure, setStructure] = useState<TypeStepperStructure>({
    operateStep: new Map(Object.entries(initialRecord)),
    activeStep: initialStep,
  });

  const onFlow = (change: (index: number) => number) => {
    setStructure((prev) => ({
      ...prev,
      activeStep: Math.min(Math.max(change(prev.activeStep), 0), structure.operateStep.size - 1),
    }));
  };

  const onUpdate = (key: keyof TypeStepperItem, value?: boolean) => {
    setStructure((prev) => {
      const newMap = new Map(prev.operateStep);
      const currentStep = newMap.get(`${prev.activeStep}`);
      if (currentStep) newMap.set(`${prev.activeStep}`, { ...currentStep, [key]: value ?? !currentStep[key] });
      return { ...prev, operateStep: newMap };
    });
  };

  const onToggle = (key: keyof TypeStepperItem) => {
    setStructure((prev) => {
      const newMap = new Map(prev.operateStep);
      const currentStep = newMap.get(`${prev.activeStep}`);
      if (currentStep) newMap.set(`${prev.activeStep}`, { ...currentStep, [key]: !currentStep[key] });
      return { ...prev, operateStep: newMap };
    });
  };

  const onClear = () => {
    setStructure((prev) => {
      const newMap = new Map(Object.entries(initialRecord));
      return { ...prev, activeStep: 0, operateStep: newMap };
    });
  };

  return {
    ...structure,
    onFlow,
    onUpdate,
    onToggle,
    onClear,
  };
};

export default useStepper;
