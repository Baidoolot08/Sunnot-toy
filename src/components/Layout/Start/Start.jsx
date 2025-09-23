import React, { useEffect, useRef, useState } from "react";
import "./Start.scss";
import { PiMapPinArea } from "react-icons/pi";
import { BiDish } from "react-icons/bi";

const Start = () => {
  const startRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (startRef.current) {
      observer.observe(startRef.current);
    }

    return () => {
      if (startRef.current) observer.unobserve(startRef.current);
    };
  }, []);

  return (
    <div id="start" ref={startRef} className={visible ? "fadeInUp" : ""}>
      <div className="container">
        <div className="start">
          <h1>Күндүн планы</h1>
          <div className="start--width">
            <div className="start--width__flex">
              <a href="">
                <PiMapPinArea />
              </a>
              <div className="start--width__flex--text">
                <h1>16:00</h1>
                <h2>Конокторду чакыруу</h2>
                <p>
                  Той салтанатка жагымдуу жылмаюуңузду <br /> жана жакшы
                  маанайыңызды ала келиңиз.
                </p>
              </div>
            </div>
            <div className="start--width__flex">
              <a href="">
                <BiDish />
              </a>
              <div className="start--width__flex--text">
                <h1>17:30</h1>
                <p>
                  Даамдуу тамак-аш, бий <br /> жана кызыктуу убакыт.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
