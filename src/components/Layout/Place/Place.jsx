import React, { useEffect, useRef, useState } from "react";
import "./Place.scss";

const Place = () => {
  const placeRef = useRef(null);
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

    if (placeRef.current) {
      observer.observe(placeRef.current);
    }

    return () => {
      if (placeRef.current) observer.unobserve(placeRef.current);
    };
  }, []);

  return (
    <div id="place" ref={placeRef} className={visible ? "fadeInUp" : ""}>
      <div className="container">
        <div className="place">
          <h1>Өтүүчү жер</h1>
          <div className="place--text">
            <h2>Ресторан "Rim Grand Hall"</h2>
            <h2>дареги</h2>
            <h2>​Центральная улица, 133​</h2>
          </div>
          <div className="place--map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5853.442844956362!2d74.0523829478745!3d42.83911335924458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389f25a47962c7bb%3A0x3de8e09dd9068cf1!2z0KLQvtC50LrQsNC90LAgIlJpbSBHcmFuZCBIYWxsIg!5e0!3m2!1sru!2skg!4v1758628586344!5m2!1sru!2skg"
              width="90%"
              height="100%"
              style={{ border: "0", borderRadius: "20px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
          <h2>
            Сиздин ыңгайлуулугуңуз үчүн биз <br />
            карта даярдап койдук. Сиз сүннөт тоюн <br />
            оңой таап, бизди өзүңүздүн катышууңуз <br />
            менен кубантасыз деп ишенебиз!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Place;
