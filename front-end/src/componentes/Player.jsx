import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause, faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Player = ({ duration = "2:40", randomIdfromArtist, randomId2fromArtist }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // de 0 a 100
  const [tempoAtual, setTempoAtual] = useState(0); // em segundos
  const intervalRef = useRef(null);

  const totalSegundos = (() => {
    const [min, sec] = duration.split(':').map(Number);
    return min * 60 + sec;
  })();

  const formatarTempo = (segundos) => {
    const min = Math.floor(segundos / 60).toString().padStart(2, '0');
    const sec = Math.floor(segundos % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  const resetPlayer = () => {
    setTempoAtual(0);
    setProgress(0);
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const playPausar = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setTempoAtual((prevTempo) => {
          const proximo = prevTempo + 1;

          if (proximo >= totalSegundos) {
            resetPlayer(); //reseta tudo
            return 0;
          }

          return proximo;
        });

        setProgress((prevProgress) => {
          const novo = ((tempoAtual + 1) / totalSegundos) * 100;
          return novo > 100 ? 100 : novo;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, tempoAtual, totalSegundos]);

  return (
    <div className='player'>
      <div className='player__controllers'>
        <Link to={`/song/${randomIdfromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPausar}
        />

        <Link to={`/song/${randomId2fromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className='player__progress'>
        <p>{formatarTempo(tempoAtual)}</p>

        <div className="player__bar">
          <div
            className="player__bar--progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p>{duration}</p>
      </div>
    </div>
  );
};



export default Player