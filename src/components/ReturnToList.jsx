import { Link } from "react-router-dom";

export default function ReturnToList() {
    return (
        <Link to={`/articles`} >
            <p>View all articles</p>
        </Link>
    )
}