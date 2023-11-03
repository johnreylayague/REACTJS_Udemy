import { useState, useEffect } from "react";

const TIMER = 3000;

export default function ProgressBar() {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setInterval");
      setRemainingTime((prevTime) => {
        const newTime = prevTime - 15;
        return newTime;
      });
    }, 10);

    return () => {
      console.log("Interval cleaning up the timer");
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={TIMER} />;
}
