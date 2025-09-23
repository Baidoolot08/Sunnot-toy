import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import audioFile from "../../../../public/music/Alem.mp3";
import "./MusicPlayer.scss";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.log(err));
    }
    setIsPlaying(!isPlaying);
  };

  const text = "Музыканы куйгузуу учун басыңыз●";
  const letters = text.split("");
  const radius = 75;

  return (
    <div className="music-player">
      <div className="music-player__circle">
        <div className="music-player__text">
          {letters.map((letter, i) => {
            const angle = (360 / letters.length) * i;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            return (
              <span
                key={i}
                style={{
                  transform: `translate(${x}px, ${y}px) rotate(${
                    angle + 90
                  }deg)`,
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
        <button className="music-player__btn" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      <audio ref={audioRef} src={audioFile} preload="auto" />
    </div>
  );
};

export default MusicPlayer;
