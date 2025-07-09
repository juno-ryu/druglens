export type TypeStepperItem = {
  label: React.ReactNode;
  skip: boolean;
  completed: boolean;
  error: boolean;
};

export type TypeStepperOptions = {
  initialStep: number;
  initialRecord: Record<number, TypeStepperItem>;
};

export type TypeStepperStructure = {
  activeStep: number;
  operateStep: Map<string, TypeStepperItem>;
};
