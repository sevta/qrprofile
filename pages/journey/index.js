import { strapi } from "../../utils";
import ArticlePages from "../../components/ArticlePages";

export default function JourneyPage({ articles }) {
  return (
    <div>
      <ArticlePages articles={articles} />
    </div>
  );
}

export async function getStaticProps() {
  const articles = await strapi.find("articles");
  return {
    props: {
      articles,
    },
  };
}
