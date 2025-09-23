import React, { useEffect, useState } from "react";
import "./Time.scss";

const Time = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const targetDate = new Date("October 7 2025 16:00:00");
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = String(Math.floor(diff / 1000 / 60 / 60 / 24)).padStart(
        2,
        "0"
      );
      const hours = String(Math.floor((diff / 1000 / 60 / 60) % 24)).padStart(
        2,
        "0"
      );
      const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(
        2,
        "0"
      );
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".time--flex__count");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div id="time">
      <div className="container">
        <div className="time">
          <h1>Сүннөт тоюна чейин</h1>
          <div className="time--flex">
            <div className="time--flex__count">
              <h2>{timeLeft.days}</h2>
              <small>күн</small>
            </div>
            <div className="time--flex__count">
              <h2>{timeLeft.hours}</h2>
              <small>саат</small>
            </div>
            <div className="time--flex__count">
              <h2>{timeLeft.minutes}</h2>
              <small>мүнөт</small>
            </div>
            <div className="time--flex__count">
              <h2>{timeLeft.seconds}</h2>
              <small>секунд</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
