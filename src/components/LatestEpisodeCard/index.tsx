import Image from "next/image";
import Link from "next/link";
import { EpisodeProps } from "../../templates/Episode";
import { convertToTimeString } from "../../utils/convertToTimeString";

import * as S from "./styles";

export type LatestEpisodeCardProps = Omit<
  EpisodeProps,
  "url" | "description"
> & {
  onPlay: () => void;
};

const LatestEpisodeCard = ({
  id,
  members,
  duration,
  thumbnail,
  title,
  publishedAt,
  onPlay,
}: LatestEpisodeCardProps) => {
  return (
    <S.Wrapper>
      <Image
        width={192}
        height={192}
        src={thumbnail}
        alt={title}
        objectFit="cover"
      />

      <S.EpisodeDetails>
        <Link href={`/episodes/${id}`}>
          <a>{title}</a>
        </Link>
        <p>{members}</p>
        <span>{publishedAt}</span>
        &bull;
        <span>{convertToTimeString(duration)}</span>
      </S.EpisodeDetails>

      <S.PlayButton type="button" onClick={() => onPlay()}>
        <img src="/play-green.svg" alt="Tocar episodio" />
      </S.PlayButton>
    </S.Wrapper>
  );
};

export default LatestEpisodeCard;
