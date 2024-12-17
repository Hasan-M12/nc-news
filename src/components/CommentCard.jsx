import { Card, CardBody } from "react-bootstrap";

export default function CommentCard({comment}) {
    return (
        <>
        <Card style={{width: "18rem"}}>
            <CardBody>
            <Card.Text style={{fontSize: 14}}>{comment.body}</Card.Text>
            <Card.Text>Votes: {comment.votes}</Card.Text>                    
            <Card.Text>By {comment.author}</Card.Text>
            </CardBody>
        </Card>
        
        </>
    )
}