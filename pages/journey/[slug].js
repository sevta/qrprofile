import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleContent from "../../components/ArticleContent";
import Container from "../../components/Container";
import { strapi } from "../../utils";

export default function JourneyDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [articles, setArticles] = useState({});

  async function getArticle() {
    const resp = await strapi.find("articles", { slug });
    if (resp.length > 0) setArticles(resp[0]);
  }

  useEffect(() => {
    console.log("slug", slug);
    getArticle();
  }, [slug]);

  return <ArticleContent />;
}
