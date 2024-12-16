import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      getArticles()
        .then((data) => {
          setArticles(data);
        })
        .catch((err) => {
          console.error('Failed to fetch Articles:', err);
        });
    }, []);
  
    return (
      
        <ul className="articles-list">
          {/* {console.log(articles)} */}
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />
          })}
        </ul>
      
    );
  }