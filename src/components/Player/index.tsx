import Image from "next/image";
import Slider from "rc-slider";
import { usePlayerContext } from "../../contexts/PlayerContext";
import { useEffect, useRef, useState } from "react";
import "rc-slider/assets/index.css";

import { convertToTimeString } from "../../utils/convertToTimeString";
import * as S from "./styles";

export default function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    isLooping,
    isShuffling,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    setIsPlayingState,
    playNext,
    playPrevious,
    clearPlayerState,
  } = usePlayerContext();

  const episode = episodeList[currentEpisodeIndex];

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if (isShuffling || currentEpisodeIndex + 1 < episodeList.length) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <S.Wrapper>
      <S.Header>
        <img src="/playing.svg" alt="Tocando" />
        <strong>Tocando agora</strong>
      </S.Header>

      {!!episode ? (
        <S.CurrentEpisode>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />

          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </S.CurrentEpisode>
      ) : (
        <S.EmptyPlayer>
          <strong>Selecione um podcast para ouvir</strong>
        </S.EmptyPlayer>
      )}

      <S.Footer isEmpty={!episode}>
        <S.Progress>
          <span>{convertToTimeString(progress)}</span>
          <S.Slider>
            {!!episode ? (
              <Slider
                onChange={handleSeek}
                max={episode.duration}
                value={progress}
                trackStyle={{ backgroundColor: "#04d361" }}
                railStyle={{ backgroundColor: "#9f75ff" }}
                handleStyle={{ borderColor: "#04d361", borderWidth: 4 }}
              />
            ) : (
              <S.EmptySlider></S.EmptySlider>
            )}
          </S.Slider>
          <span>{convertToTimeString(episode?.duration) || "00:00:00"}</span>
        </S.Progress>

        {!!episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            autoPlay
            loop={isLooping}
            onPlay={() => setIsPlayingState(true)}
            onPause={() => setIsPlayingState(false)}
            onLoadedMetadata={() => setupProgressListener()}
          />
        )}

        <S.ButtonsWrapper>
          <S.Button
            type="button"
            disabled={!episode || episodeList.length == 1}
            onClick={() => toggleShuffle()}
            isActive={isShuffling}
          >
            <img src="/shuffle.svg" alt="Embaralhar" />
          </S.Button>

          <S.Button
            type="button"
            onClick={() => playPrevious()}
            disabled={!episode || episodeList.length == 1}
          >
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </S.Button>

          <S.PlayButton
            type="button"
            disabled={!episode}
            onClick={() => togglePlay()}
          >
            {isPlaying ? (
              <img src="/pause.svg" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </S.PlayButton>

          <S.Button
            type="button"
            onClick={() => playNext()}
            disabled={!episode || episodeList.length == 1}
          >
            <img src="/play-next.svg" alt="Tocar proxima" />
          </S.Button>

          <S.Button
            type="button"
            disabled={!episode}
            onClick={() => toggleLoop()}
            isActive={isLooping}
          >
            <img src="/repeat.svg" alt="Repetir" />
          </S.Button>
        </S.ButtonsWrapper>
      </S.Footer>
    </S.Wrapper>
  );
}
