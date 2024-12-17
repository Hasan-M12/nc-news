import { useEffect, useState } from "react"
import { getCommentsById } from "../api";
import CommentCard from "./CommentCard";

export default function CommentList({articleId}) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsById(articleId)
        .then((data) => {
            setComments(data)
        })
        .catch(() => {
            console.error(`Failed to fetch Comments`)
        });  
    }, [articleId])
    
    return (
        <>
        <ul className="comments-list">
            {comments.map((comment) => {
                return (
                <CommentCard comment={comment} key={comment.comment_id} />
                )
            })}
        </ul>
        </>
    )
}