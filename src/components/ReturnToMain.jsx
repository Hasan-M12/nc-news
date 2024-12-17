import { Link } from "react-router-dom";

export default function ReturnToMain() {
    return (
        <Link to={`/`} >
            <p>Return to the main page</p>
        </Link>
    )
}