import { GetStaticProps } from "next";
import api from "../services/api";
import Home from "../templates/Home";
import { HomeTemplateProps } from "../templates/Home";
import format from "date-fns/format";
import { parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  });

  const episodes = data.map((episode) => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), "d MMM yy", {
        locale: ptBR,
      }),
      duration: episode.file.duration,
      description: episode.description,
      url: episode.file.url,
    };
  });

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 6 * 8,
  };
};
