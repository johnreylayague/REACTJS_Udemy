import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
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

  useEffect(() => {
    console.log("setTimeout");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log("setTimeout cleaning up the timer");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar />
    </div>
  );
}
