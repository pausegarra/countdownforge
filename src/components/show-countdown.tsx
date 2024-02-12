'use client';

import React, { useEffect, useState } from 'react';
import { Countdown } from '@/types';

interface Props {
  countdown: Countdown;
}

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
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
    <div className="grid grid-flow-col gap-5 justify-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.days }}>{timeLeft.days}</span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.hours }}>{timeLeft.hours}</span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.minutes }}>{timeLeft.minutes}</span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.seconds }}>{timeLeft.seconds}</span>
        </span>
        sec
      </div>
    </div>
  );
}
