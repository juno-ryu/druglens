import { RatingProps as MuiRatingProps } from '@mui/material';

export type RatingComponent = React.ComponentType<RatingProps>;

export type RatingProps = Omit<MuiRatingProps, 'component'> & {
  //
};
