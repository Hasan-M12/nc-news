import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import ReturnToMain from "./ReturnToMain";
import VoteUpdate from "./VoteUpdate";

export default function ArticlesList({article, likeVote, dislikeVote}) {
    const [articles, setArticles] = useState([]);
    const [loading, setIsLoading] = useState(true);

    // const handleUpVote = () => {
    //   VoteUpdate(article.article_id, -1).catch(() => {
    //     setVote((currVotes) => currVotes + 1);
    //   });
    //   setVote((currVotes) => currVotes - 1);
    //   setActiveVote(null);
    // }

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
            <>
            <ArticleCard article={article} key={article.article_id} />
            {/* <h4>Votes: {votes}</h4> */}
            </>
            )
          })}
        </ul>
      </>
    );
  }