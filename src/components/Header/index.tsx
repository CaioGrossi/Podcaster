import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import * as S from "./styles";

export default function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });
  return (
    <S.Wrapper>
      <img src="/favicon.png" alt="Podcaster" />

      <S.Slogan> O melhor para você ouvir, sempre.</S.Slogan>

      <S.Date>{currentDate}</S.Date>
    </S.Wrapper>
  );
}
