import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function ArticleCard( { article } ) {
    return (
        <>
            <Card style={{width: '18rem'}}>
            <CardBody>
            <Card.Title>{article}</Card.Title>
            </CardBody>
            </Card>
        </>
    )
}