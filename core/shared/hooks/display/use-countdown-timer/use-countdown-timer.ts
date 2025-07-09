import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import useMounted from '@/core/shared/hooks/effect/use-mounted/use-mounted';
import { TypeCountdownTimerOptions, TypeCountdownTimerStructure } from './use-countdown-timer.type'; // 경로 수정

dayjs.extend(duration);

const useCountdownTimer = (options: TypeCountdownTimerOptions) => {
  const { targetTime, format = 'YYYY-MM-DD hh:mm:ss', onStart, onComplete } = options;

  const { isMounted } = useMounted();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [structure, setStructure] = useState<TypeCountdownTimerStructure>(() => ({
    remainingTime: 0,
  }));

  useEffect(() => {
    if (!isMounted) return;
    if (!targetTime) return;

    onStart?.();

    const updateTime = () => {
      const diff = Math.max(targetTime.diff(dayjs()), 0);
      setStructure((prev) => ({
        ...prev,
        remainingTime: diff,
      }));
      if (diff <= 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        onComplete?.();
      }
    };

    updateTime();
    intervalRef.current = setInterval(updateTime, 1000);

    return () => {
      if (!intervalRef.current) return;
      clearInterval(intervalRef.current);
    };
  }, [isMounted, targetTime?.valueOf()]);

  const formatRemainingTime = (time: number) => {
    if (time <= 0)
      return {
        totalTime: 0,
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        formattedTime: '남은시간 00일 00시간 00분 00초',
      };

    const durationObj = dayjs.duration(time);
    const years = durationObj.years();
    const months = durationObj.months();
    const days = durationObj.days();
    const hours = durationObj.hours();
    const minutes = durationObj.minutes();
    const seconds = durationObj.seconds();
    const totalTime = durationObj.asMilliseconds();

    let formattedTime = format;
    formattedTime = formattedTime.replace('YYYY', String(years).padStart(4, '0'));
    formattedTime = formattedTime.replace('MM', String(months).padStart(2, '0'));
    formattedTime = formattedTime.replace('DD', String(days).padStart(2, '0'));
    formattedTime = formattedTime.replace('hh', String(hours).padStart(2, '0'));
    formattedTime = formattedTime.replace('mm', String(minutes).padStart(2, '0'));
    formattedTime = formattedTime.replace('ss', String(seconds).padStart(2, '0'));

    return { totalTime, years, months, days, hours, minutes, seconds, formattedTime };
  };

  return formatRemainingTime(structure.remainingTime);
};

export default useCountdownTimer;
