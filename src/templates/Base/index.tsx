import Player from "../../components/Player";
import Header from "../../components/Header";

import * as S from "./styles";

type BaseTemplateProps = {
  children: React.ReactNode;
};

export default function Base({ children }: BaseTemplateProps) {
  return (
    <S.Wrapper>
      <main>
        <Header />
        {children}
      </main>

      <Player />
    </S.Wrapper>
  );
}
