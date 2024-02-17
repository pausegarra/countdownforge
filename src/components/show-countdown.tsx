'use client';

import React, { useEffect, useState } from 'react';
import { Countdown } from '@/types';

interface Props {
  countdown: Countdown;
}

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    timeLeft.years = Math.floor(totalDays / 365);
    timeLeft.months = Math.floor((totalDays % 365) / 30); // Aproximación simple, puede ajustarse para mayor precisión
    timeLeft.days = Math.floor(totalDays % 365 % 30);
    timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
    timeLeft.seconds = Math.floor((difference / 1000) % 60);
  }

  return timeLeft;
};

export function ShowCountdown({ countdown }: Props) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(new Date(countdown.target)));

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeftCalc = calculateTimeLeft(new Date(countdown.target));
      setTimeLeft(timeLeftCalc);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown.target]);

  return (
    <div className="flex flex-wrap justify-center gap-4 text-center">
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl flex justify-center">
          <span style={{ "--value": timeLeft.years } as any} className='text-center'>{timeLeft.years}</span>
        </span>
        years
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl flex justify-center">
          <span style={{ "--value": timeLeft.months } as any}>{timeLeft.months}</span>
        </span>
        months
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl flex justify-center">
          <span style={{ "--value": timeLeft.days } as any}>{timeLeft.days}</span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl flex justify-center">
          <span style={{ "--value": timeLeft.hours } as any}>{timeLeft.hours}</span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl flex justify-center">
          <span style={{ "--value": timeLeft.minutes } as any}>{timeLeft.minutes}</span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl flex justify-center">
          <span style={{ "--value": timeLeft.seconds } as any}>{timeLeft.seconds}</span>
        </span>
        sec
      </div>
    </div>
  );
}
