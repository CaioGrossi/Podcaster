import React, { createContext, useContext, useState } from "react";
import { EpisodeProps } from "../templates/Episode";

type Episode = Omit<EpisodeProps, "description" | "publishedAt" | "id">;

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  playEpisode: (episode: Episode) => void;
  setIsPlayingState: (state: boolean) => void;
  playEpisodeList: (list: Episode[], index: number) => void;
  playNext: () => void;
  playPrevious: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  clearPlayerState: () => void;
};

type PlayerProviderProps = {
  children: React.ReactNode;
};

export const PlayerContext = createContext({} as PlayerContextData);

export default function PlayerProvider({ children }: PlayerProviderProps) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  function playEpisode(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playEpisodeList(list: Episode[], index: number) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function toggleShuffle() {
    setIsShuffling(!isShuffling);
  }

  function setIsPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  function clearPlayerState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  function playNext() {
    if (isShuffling) {
      const nextRandomIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(nextRandomIndex);
      return;
    }

    const nextEpisodeIndex = currentEpisodeIndex + 1;

    if (nextEpisodeIndex >= episodeList.length) {
      setCurrentEpisodeIndex(0);
    } else {
      setCurrentEpisodeIndex(nextEpisodeIndex);
    }
  }

  function playPrevious() {
    const previousEpisodeIndex = currentEpisodeIndex - 1;

    if (previousEpisodeIndex < 0) {
      setCurrentEpisodeIndex(episodeList.length - 1);
    } else {
      setCurrentEpisodeIndex(previousEpisodeIndex);
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        currentEpisodeIndex,
        episodeList,
        isPlaying,
        isLooping,
        isShuffling,
        playEpisode,
        setIsPlayingState,
        playEpisodeList,
        playNext,
        playPrevious,
        toggleLoop,
        toggleShuffle,
        clearPlayerState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayerContext() {
  return useContext(PlayerContext);
}
