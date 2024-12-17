import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../api";
import ReturnToMain from "../components/ReturnToMain";
import ReturnToList from "../components/ReturnToList";

const singleArticle = () => {
    const {articleId} = useParams()
    const [article, setArticle] = useState([])
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        getSingleArticle(articleId)
        .then((data) => {
            setArticle(data)
            setIsLoading(false)
        })
    }, [articleId])

    if (loading) {
        return <p>Loading</p>
    }

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <img src={article.article_img_url} width={300} alt="Article image"/>
            <ReturnToList />
        </div>
    )

}

export default singleArticle