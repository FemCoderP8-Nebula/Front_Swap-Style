import { useState, useEffect } from "react";

const useCountdown = (expiryDate) => {
  const calculateTimeLeft = () => {
    const diff = new Date(expiryDate) - new Date();
    if (diff <= 0) return null;
    return {
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    if (!expiryDate) return;
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [expiryDate]);

  return timeLeft;
};

export default useCountdown;