import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function ArticleCard( { article } ) {
    return (
        <>
            <Card style={{width: '22rem'}}>
            <CardBody>
            <Card.Img src={article.article_img_url} width={300} alt='Article' />
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>Topic: {article.topic}</Card.Text>
            <Card.Text>By {article.author}</Card.Text>
            <Card.Text>Votes: {article.votes}</Card.Text>
            <Card.Text>Comments: {article.comment_count}</Card.Text>
            </CardBody>
            </Card>
        </>
    )
}