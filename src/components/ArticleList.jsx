import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import ReturnToMain from "./ReturnToMain";

export default function ArticlesList() {
    const [articles, setArticles] = useState([]);
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
      getArticles()
        .then((data) => {
          setArticles(data);
          setIsLoading(false)
        })
        .catch((err) => {
          console.error('Failed to fetch Articles:', err);
        });
    }, []);

    if (loading) {
      return <p>Loading...</p>
    }

    return (
      <>
      <ReturnToMain />
        <ul className="articles-list">
          {articles.map((article) => {
            return (
            <ArticleCard article={article} key={article.article_id} />
            )
          })}
        </ul>
      </>
    );
  }