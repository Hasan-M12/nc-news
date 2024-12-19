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

const getSingleArticle = (articleID) => {
  return api.get(`/articles/${articleID}`).then(({ data }) => {
    const article = data.article;
    return article;
  });
};

const getCommentsById = (articleID) => {
  return api.get(`/articles/${articleID}/comments`).then(({ data }) => {
    const commentsArr = data.comments;
    return commentsArr;
  });
};

const getTopics = () => {
  return api.get(`/topics`).then(({ data }) => {
    const topics = data.topics;
    // console.log(topics)
    return topics
  });
};

const updateVotes = (articleId, vote) => {
  const patchUrl = `/articles/${articleId}`;
  const increment = {
    inc_votes: vote,
  };
  return api.patch(patchUrl, increment).then(({ data }) => {
    const votes = data.article.votes;
    return votes;
  });
};

const postComment = (articleId) => {
  const commentUrl = `/articles/${articleId}/comments`;

  return api.post(commentUrl, comment).then(({ data }) => {
    const commentsArr = data.comment;
    return commentsArr;
  });
};

export {
  getArticles,
  getSingleArticle,
  getCommentsById,
  updateVotes,
  postComment,
  getTopics,
};
