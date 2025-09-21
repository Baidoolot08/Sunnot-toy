import React, { useState, useEffect } from "react";
import bag from "../../../../src/assets/image/first-bag.jpeg";
import "./Name.scss";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Name = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="first" className="first-section">
      <img src={bag} alt="bag" className="bag-image" />

      {/* Полупрозрачный слой для текста */}
      <div className={`overlay ${visible ? "fadeInUp delay-1" : ""}`}>
        <div className="first-text">
          <h1 className={`initials ${visible ? "fadeInUp delay-2" : ""}`}>
            Е & Б
          </h1>
          <p className={`names ${visible ? "fadeInUp delay-4" : ""}`}>
            Ербол & Бегайым
          </p>
        </div>
      </div>
      <div className="icons">
        <MdKeyboardDoubleArrowDown />
      </div>
    </section>
  );
};
export default Name;
