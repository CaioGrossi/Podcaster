import Base from "../Base/index";
import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";
import { usePlayerContext } from "../../contexts/PlayerContext";
import { convertToTimeString } from "../../utils/convertToTimeString";

export type EpisodeProps = {
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  thumbnail: string;
  description: string;
  duration: number;
  url: string;
  file: {
    url: string;
    type: string;
  };
};

export type HomeTemplateProps = {
  latestEpisodes: EpisodeProps[];
  allEpisodes: EpisodeProps[];
};

export default function Home({
  allEpisodes,
  latestEpisodes,
}: HomeTemplateProps) {
  const { playList } = usePlayerContext();

  const episodeList = [...latestEpisodes, ...allEpisodes];

  return (
    <Base>
      <S.Wrapper>
        <S.LatestEpisodes>
          <h2>Últimos lançamentos</h2>

          <ul>
            {latestEpisodes.map((episode, index) => (
              <li key={episode.id}>
                <Image
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                />

                <S.EpisodeDetails>
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  &bull;
                  <span>{convertToTimeString(episode.duration)}</span>
                </S.EpisodeDetails>

                <button
                  type="button"
                  onClick={() => playList(episodeList, index)}
                >
                  <img src="/play-green.svg" alt="Tocar episodio" />
                </button>
              </li>
            ))}
          </ul>
        </S.LatestEpisodes>

        <S.AllEpisodes>
          <h2>Todos os episodios</h2>

          <table cellSpacing={0}>
            <thead>
              <tr>
                <th></th>
                <th>Podcast</th>
                <th>Integrantes</th>
                <th>Data</th>
                <th>Duração</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {allEpisodes.map((episode, index) => (
                <tr key={episode.id}>
                  <td style={{ width: 72 }}>
                    <Image
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                      objectFit="cover"
                    />
                  </td>
                  <td>
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                    </Link>
                  </td>

                  <td>{episode.members}</td>
                  <td style={{ width: 100 }}>{episode.publishedAt}</td>
                  <td>{convertToTimeString(episode.duration)}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        playList(episodeList, index + latestEpisodes.length)
                      }
                    >
                      <img src="/play-green.svg" alt="Tocar episodio" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </S.AllEpisodes>
      </S.Wrapper>
    </Base>
  );
}
