import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import VoteUpdate from './VoteUpdate';

export default function ArticleCard( { article } ) {
    const [votes, setVote] = useState(article.votes)
    const [activeVote, setActiveVote] = useState(null);

    const handleUpVote = () => {
        VoteUpdate(article.article_id, -1).catch(() => {
          setVote((currVotes) => currVotes + 1);
        });
        setVote((currVotes) => currVotes - 1);
        setActiveVote(null);
      }

      const handleDownVote = () => {
        VoteUpdate(article.article_id, +1).catch(() => {
          setVote((currVotes) => currVotes - 1);
        });
        setVote((currVotes) => currVotes + 1);
        setActiveVote(null);
      }

    return (
        <>
            <Card style={{width: '22rem'}}>
            <CardBody>
            <Card.Img src={article.article_img_url} width={300} alt='Article' />
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>Topic: {article.topic}</Card.Text>
            <Card.Text>By {article.author}</Card.Text>
            <Card.Text>Comments: {article.comment_count}</Card.Text>
            <Card.Text>Votes: {votes}</Card.Text>
            <button id="downVote-button" onClick={handleDownVote}>UpVote</button>
            <button id="upVote-button" onClick={handleUpVote}>DownVote</button>
            <Link to={`/articles/${article.article_id}`}>
                <p style={{fontSize: 12}}>Read more</p>
            </Link>
            </CardBody>
            </Card>
        </>
    )
}