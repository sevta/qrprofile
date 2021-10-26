import GhostContentAPI from "@tryghost/content-api";
import Strapi from "strapi-sdk-js";

export async function getDataFromGraphCms({ query }) {
  const URL =
    "https://api-ap-northeast-1.graphcms.com/v2/ckuu49t4b17fc01z71mvf6d59/master";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  };

  return await fetch(URL, options);
}

export const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "94d1b40e59fc3aded17007504e",
  version: "v3",
});

export const strapi = new Strapi({
  url: process.env.STRAPI_URL || "http://localhost:1337",
  store: {
    key: "strapi_jwt",
    useLocalStorage: false,
    cookieOptions: { path: "/" },
  },
  axiosOptions: {},
});
