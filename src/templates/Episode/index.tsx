import Base from "../Base";
import Image from "next/image";
import Link from "next/link";
import { usePlayerContext } from "../../contexts/PlayerContext";
import * as S from "./styles";

export type EpisodeProps = {
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  thumbnail: string;
  description: string;
  duration: number;
  url: string;
};

export type EpisodeTemplateProps = {
  episode: EpisodeProps;
};

export default function Episode({ episode }: EpisodeTemplateProps) {
  const { playEpisode } = usePlayerContext();
  return (
    <Base>
      <S.Wrapper>
        <S.ThumbnailContainer>
          <Link href="/" passHref>
            <button type="button">
              <img src="/arrow-left.svg" alt="Voltar" />
            </button>
          </Link>

          <Image
            width={700}
            height={160}
            src={episode.thumbnail}
            objectFit="cover"
          />

          <button type="button" onClick={() => playEpisode(episode)}>
            <img src="/play.svg" alt="Tocar episodio" />
          </button>
        </S.ThumbnailContainer>

        <S.Header>
          <h1>{episode.title}</h1>
          <span>{episode.members}</span>
          &bull;
          <span>{episode.publishedAt}</span>
          &bull;
          <span>{episode.duration}</span>
        </S.Header>

        <S.EpisodeDescription
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
      </S.Wrapper>
    </Base>
  );
}
