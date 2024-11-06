import React, { useEffect, useState } from "react";
import Stopwatch from "../Stopwatch/Stopwatch";

const Clock = () => {
  const [timerDay, setTimerDay] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  useEffect(() => {
    const setTimer = () => {
      const countDownDate = new Date("July 18, 2024").getTime();
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);

        if (distance < 0) {
          clearInterval(interval);
        } else {
          setTimerDay(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);

      return () => clearInterval(interval);
    };

    setTimer();
  }, []);

  return (
    <div>
      <Stopwatch
        timerDay={timerDay}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  );
};

export default Clock;
