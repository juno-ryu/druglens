import { Dayjs } from 'dayjs';

export interface TypeCountdownTimerOptions {
  format?: string;
  targetTime: Dayjs | null;
  onStart?: () => void;
  onComplete?: () => void;
}

export type TypeCountdownTimerStructure = {
  remainingTime: number;
};
