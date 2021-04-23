import Image from "next/image";
import Link from "next/link";
import { convertToTimeString } from "../../utils/convertToTimeString";
import { LatestEpisodeCardProps } from "../LatestEpisodeCard";
import * as S from "./styles";

type EpisodeTableRowProps = LatestEpisodeCardProps;

const EpisodeTableRow = ({
  thumbnail,
  title,
  id,
  publishedAt,
  duration,
  members,
  onPlay,
}: EpisodeTableRowProps) => {
  return (
    <S.Wrapper>
      <S.TableData style={{ width: 72 }}>
        <Image
          width={120}
          height={120}
          src={thumbnail}
          alt={title}
          objectFit="cover"
        />
      </S.TableData>
      <S.TableData>
        <Link href={`/episodes/${id}`}>
          <a>{title}</a>
        </Link>
      </S.TableData>

      <S.TableData>{members}</S.TableData>
      <S.TableData style={{ width: 100 }}>{publishedAt}</S.TableData>
      <S.TableData>{convertToTimeString(duration)}</S.TableData>
      <S.TableData>
        <S.PlayButton type="button" onClick={() => onPlay()}>
          <img src="/play-green.svg" alt="Tocar episodio" />
        </S.PlayButton>
      </S.TableData>
    </S.Wrapper>
  );
};

export default EpisodeTableRow;
