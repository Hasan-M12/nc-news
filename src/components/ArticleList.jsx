import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
    const [articles, setArticles] = useState([]);
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
      getArticles()
        .then((data) => {
          console.log(data)
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
        <ul className="articles-list">
          {articles.map((article) => {
            {console.log(article, "in the article list")}
            return (
            <>
            <ArticleCard article={article} key={article.article_id} />
            </>
            )
          })}
        </ul>
      </>
    );
  }