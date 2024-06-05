'use client';

import React, { useEffect, useState } from 'react';
import { Countdown } from '@/types';

interface Props {
  countdown: Countdown;
}

const calculateTimeLeft = (targetDate: Date) => {
  const now = new Date();
  const difference = +targetDate - +now;
  let timeLeft = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    // Calcula años
    timeLeft.years = targetDate.getFullYear() - now.getFullYear();
    // Ajusta meses
    let monthsDifference = targetDate.getMonth() - now.getMonth();
    if (monthsDifference < 0) {
      monthsDifference += 12;
      timeLeft.years--;
    }
    timeLeft.months = monthsDifference;

    // Ajusta días
    let daysDifference = targetDate.getDate() - now.getDate();
    if (daysDifference < 0) {
      // Encuentra el último día del mes anterior
      const lastDayOfPreviousMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0).getDate();
      daysDifference += lastDayOfPreviousMonth;
      if (timeLeft.months === 0) {
        timeLeft.years--;
        timeLeft.months = 11;
      } else {
        timeLeft.months--;
      }
    }
    timeLeft.days = daysDifference;

    // Calcula horas, minutos y segundos
    timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    timeLeft.minutes = Math.floor((difference / (1000 * 60)) % 60);
    timeLeft.seconds = Math.floor((difference / 1000) % 60);
  }

  return timeLeft;
};


export function ShowCountdown({ countdown }: Props) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(countdown.target));

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeftCalc = calculateTimeLeft(countdown.target);
      setTimeLeft(timeLeftCalc);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown.target]);

  return (
    <div className="flex flex-wrap justify-center gap-4 text-center">
      {timeLeft.years ? (
        <div className="flex flex-col">
          <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl lg:text-7xl flex justify-center">
            <span style={{ "--value": timeLeft.years } as any} className='text-center'>{timeLeft.years}</span>
          </span>
          years
        </div>
      ) : null}
      {timeLeft.months ? (
        <div className="flex flex-col">
          <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl lg:text-7xl flex justify-center">
            <span style={{ "--value": timeLeft.months } as any}>{timeLeft.months}</span>
          </span>
          months
        </div>
      ) : null}
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl lg:text-7xl flex justify-center">
          <span style={{ "--value": timeLeft.days } as any}>{timeLeft.days}</span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl lg:text-7xl flex justify-center">
          <span style={{ "--value": timeLeft.hours } as any}>{timeLeft.hours}</span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl lg:text-7xl flex justify-center">
          <span style={{ "--value": timeLeft.minutes } as any}>{timeLeft.minutes}</span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl sm:text-2xl md:text-3xl lg:text-7xl flex justify-center">
          <span style={{ "--value": timeLeft.seconds } as any}>{timeLeft.seconds}</span>
        </span>
        sec
      </div>
    </div>
  );
}
