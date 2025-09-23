import React from "react";
import logo from "../../../../public/logo.png";
import { FaWhatsapp } from "react-icons/fa6";
import sass from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={sass.footer}>
      <div className={sass.container}>
        <p className={sass.footer_text}>
          Для заказа сайта-приглашения на ваше мероприятие <br />
          переходите в WhatsApp!
        </p>

        <div className={sass.footer_content}>
          {/* ЛОГО */}
          <div className={sass.footer_logo}>
            <img src={logo} alt="logo" />
          </div>

          {/* WHATSAPP */}
          <div className={sass.footer_icons}>
            <a href="https://wa.me/996706555172">
              <FaWhatsapp />
            </a>
          </div>

          {/* ТЕЛЕФОН */}
          <div className={sass.footer_tel}>
            <a href="tel:0706555172">+ (996) 706-555-172</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
