import { GetStaticPaths, GetStaticProps } from "next";
import api from "../../services/api";
import format from "date-fns/format";
import { parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import EpisodeTemplate, { EpisodeTemplateProps } from "../../templates/Episode";

export default function Episode(props: EpisodeTemplateProps) {
  return <EpisodeTemplate {...props} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { data } = await api.get(`/episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), "d MMM yy", {
      locale: ptBR,
    }),
    duration: data.file.duration,
    description: data.description,
    url: data.file.url,
  };

  return {
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24,
  };
};
