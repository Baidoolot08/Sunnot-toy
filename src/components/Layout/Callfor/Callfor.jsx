import React, { useEffect } from "react";
import "./Callfor.scss";
import may from "../../../assets/image/may-2026.webp";
import { FaRegCircle } from "react-icons/fa";

const Callfor = () => {
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

    const elements = document.querySelectorAll(
      "#callfor p, #callfor h1, #callfor img"
    );
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div id="callfor">
      <div className="container">
        <div className="callfor">
          <div className="callfor--box">
            <div className="callfor--box__text">
              <p>
                Сүннөт тоюна арналган, <br /> салтанаттуу кечебизге келип,{" "}
                <br />
                ак батаныздарды берип, кадырлуу <br /> коногубуз болуп кетүүгө
                чакырабыз.
              </p>
              <h1>Биз сиздерди күтөбүз!</h1>

              <div className="callfor--box__text--imganima">
                <h2>2025</h2>
                <i>
                  <FaRegCircle className="icon" />
                </i>
                <img src={may} alt="Май айы" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callfor;
