import React, { useState, useEffect } from "react";
import "./Anketa.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Anketa = () => {
  const [name, setName] = useState("");
  const [chisla, setChisla] = useState("");
  const [answer, setAnswer] = useState("");
  const [modal, setModal] = useState(false);
  const [sent, setSent] = useState(false); // анкета жөнөтүлгөнбү

  const nav = useNavigate();
  const { user } = useSelector((s) => s.userReducer);

  useEffect(() => {
    const alreadySent = localStorage.getItem("sent");
    if (alreadySent) setSent(true);
  }, []);

  const clearForm = () => {
    setName("");
    setChisla("");
    setAnswer("");
  };

  const isEmpty = (val) => val.length === 0 || val.replaceAll(" ", "") === "";

  const sendToTelegram = () => {
    if (sent) {
      alert("⚠️ Сиз анкета толтурдуңуз!"); // ✅ alert аркылуу билдирүү
      return;
    }

    if (isEmpty(name) || isEmpty(answer) || isEmpty(chisla)) {
      alert("Бардык талааларды толтуруңуз!");
      return;
    }

    const chat_id = "-1002708842759";
    const token = "7784579498:AAE4SwLV99YhzCxGvp8so-GaYdzWdQb7WrU";
    const api_url = `https://api.telegram.org/bot${token}/sendMessage`;

    const userData = {
      chat_id,
      parse_mode: "HTML",
      text: `
<b>📋 Жаңы анкета</b>\n
<b>👤 Аты:</b> ${name}
<b>👥 Канчоо келет:</b> ${chisla}
<b>✅ Жооп:</b> ${answer}
	  `,
    };

    axios
      .post(api_url, userData)
      .then(() => {
        alert("✅ Анкета жиберилди!");
        clearForm();
        setModal(false);
        setSent(true);
        localStorage.setItem("sent", "true"); // кайра жибере албайт
      })
      .catch(() => {
        alert("❌ Анкета жиберилген жок!");
      });
  };

  return (
    <div id="request">
      <div className="container">
        <div className="request">
          <h1>АНКЕТА</h1>
          <p>Тойго келериңизди белгилеп коюңуз!</p>

          <button
            onClick={() => {
              if (user) {
                setModal(true);
              } else {
                alert("⚠️ Кирип анан толтуруңуз!");
                nav("/");
              }
            }}
          >
            Анкетаны толтуруу
          </button>
        </div>
      </div>

      {modal && (
        <div className="logout-modal">
          <div className="logout-modal__content">
            <div className="logout-modal__buttons">
              <button className="a" onClick={() => setModal(false)}>
                X
              </button>
              <input
                type="text"
                placeholder="Атыңыз"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Канча адам болуп келесиз?"
                value={chisla}
                onChange={(e) => setChisla(e.target.value)}
              />

              <div className="options">
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value="Сөзсүз келем"
                    checked={answer === "Сөзсүз келем"}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  Сөзсүз келем
                </label>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value="Келе албайм"
                    checked={answer === "Келе албайм"}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  Келе албайм
                </label>
              </div>
            </div>

            <button onClick={sendToTelegram}>Жөнөтүү</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Anketa;
