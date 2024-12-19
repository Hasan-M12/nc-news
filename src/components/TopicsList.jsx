import { useEffect, useState } from "react"
import { getTopics } from "../api";
import { Card, CardBody } from "react-bootstrap";

export default function TopicList() {
    const [topics, setTopics] = useState([])
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        getTopics()
        .then((data) => {
            // console.log(data, "in the sfiosf")
            setTopics(data)
            setIsLoading(false)
        })
        .catch((err) => {
            console.err(`Failed to fetch topics`, err)
        })
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <>
        <ul className="topics-list">
            {topics.map((topic) => {
                const title = topic.slug
                const titleCapitalised = title[0].toUpperCase() + title.substring(1)
                return (
                <>
                <Card className="topic-card" style={{width: "22rem"}}>
                    <CardBody>
                        <Card.Title>
                            <h1>
                                {titleCapitalised}
                            </h1>
                        </Card.Title>
                    </CardBody>
                </Card>
                </>
            )
            })}
        </ul>
        </>
    )
}