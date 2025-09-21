import React, { useEffect } from "react";
import "./Yrmat.scss";

const Yrmat = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll("#yrmat h1, #yrmat h2");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div id="yrmat">
      <div className="container">
        <div className="yrmat">
          <h1>Урматтоо менен</h1>
          <h2>Бегали & Миргуль</h2>
        </div>
      </div>
    </div>
  );
};

export default Yrmat;
