import { DistributiveOmit } from '@emotion/react';

export type OverridableComponent<T extends React.ElementType, P = {}> = { as?: T } & P & DistributiveOmit<React.ComponentProps<T>, keyof P | 'as'>;
