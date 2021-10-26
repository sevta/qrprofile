/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import Link from "next/link";
import { api, getDataFromGraphCms, strapi } from "../utils";

export default function Homepage({ journeys }) {
  async function getPosts() {
    const resp = await api.posts
      .browse({
        limit: "all",
      })
      .catch((err) => console.log(err));
    console.log(resp);
  }

  async function findArticles() {
    const resp = await strapi.find("articles");
    console.log("reps", resp);
  }

  useEffect(() => {
    findArticles();
  }, []);

  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        consequatur facilis dolore facere sunt alias laborum sit minus, tempora
        temporibus quod sequi laudantium ex soluta adipisci tempore optio.
        Fugiat, commodi?
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const resp = await getDataFromGraphCms({
    query: `
  {
    journeys {
      title
      createdAt
      updatedAt
      slug
      image {
        url
        size
      }
      createdBy {
        id
        name
        picture
      }
      content {
        markdown
      }
    }
  }      
  `,
  });

  const {
    data: { journeys },
  } = await resp.json();

  return {
    props: {
      journeys,
    },
  };
}
