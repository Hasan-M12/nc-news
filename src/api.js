import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-12v7.onrender.com/api",
});

const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    const dataArticles = data.articles;
    return dataArticles;
  });
};

export { getArticles };
