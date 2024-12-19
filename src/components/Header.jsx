import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <header className="header-box">
            <h1 id="main-page-heading">NC News</h1>
            <h2>
                <Link to={`/topics`}>
                    View Topics
                </Link>
            </h2>
        </header>
        </>
    )
}