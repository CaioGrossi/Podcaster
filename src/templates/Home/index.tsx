import Base from "../Base/index";
import { usePlayerContext } from "../../contexts/PlayerContext";
import { EpisodeProps } from "../Episode";
import LatestEpisodeCard from "../../components/LatestEpisodeCard";
import EpisodeTableRow from "../../components/EpisodeTableRow";
import * as S from "./styles";

export type HomeTemplateProps = {
  latestEpisodes: EpisodeProps[];
  allEpisodes: EpisodeProps[];
};

export default function Home({
  allEpisodes,
  latestEpisodes,
}: HomeTemplateProps) {
  const { playEpisodeList } = usePlayerContext();

  const episodeList = [...latestEpisodes, ...allEpisodes];

  return (
    <Base>
      <S.Wrapper>
        <S.LatestEpisodes>
          <h2>Últimos lançamentos</h2>

          <div>
            {latestEpisodes.map((episode, index) => (
              <LatestEpisodeCard
                {...episode}
                onPlay={() => playEpisodeList(episodeList, index)}
              />
            ))}
          </div>
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
                <EpisodeTableRow
                  {...episode}
                  onPlay={() =>
                    playEpisodeList(episodeList, index + latestEpisodes.length)
                  }
                />
              ))}
            </tbody>
          </table>
        </S.AllEpisodes>
      </S.Wrapper>
    </Base>
  );
}
