import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export default function useCountDownSimpleTimer(targetTime: string) {
  const [remainingTime, setRemaingTime] = useState('');

  useEffect(() => {
    const calculateRemainingTime = () => {
      const currentTime = dayjs(); //현재시간
      const targetDate = dayjs(targetTime); //전달받는 기한 날짜
      const duration = dayjs.duration(targetDate.diff(currentTime)); //diff:차이구하기/duration:차이구한것을 객체로 반환해줌

      const days = String(duration.days()).padStart(2, '0'); //padStart(목표문자열길이,모자라면채워지는값)
      const hours = String(duration.hours()).padStart(2, '0');
      const minutes = String(duration.minutes()).padStart(2, '0');
      const seconds = String(duration.seconds()).padStart(2, '0');

      setRemaingTime(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);
      // setRemaingTime(`${hours}: ${minutes}: ${seconds}`);
    };

    const intervalId = setInterval(calculateRemainingTime, 1000); //1초마다 불러오기
    return () => clearInterval(intervalId);
  }, [targetTime]);

  return {
    remainingTime,
  };
}
