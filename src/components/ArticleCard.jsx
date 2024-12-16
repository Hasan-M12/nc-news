import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function ArticleCard( { article } ) {
    return (
        <>
            <Card style={{width: '18rem'}}>
            <CardBody>
            <Card.Title>{article.title}</Card.Title>
            <p>Topic: {article.topic}</p>
            <img src={article.article_img_url} width={300} alt='Article'></img>
            <p>Author: {article.author}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
            </CardBody>
            </Card>
        </>
    )
}