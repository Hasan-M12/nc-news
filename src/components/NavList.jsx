import { Link } from 'react-router-dom';

export default function NavList() {
    return(
        <>
            <section id="nav-list">
                
                <section className="nav-card">
                    Topics
                </section>
                
                <section className="nav-card">
                    <Link to="/articles">
                            Articles
                    </Link>
                </section>

                <section className="nav-card">
                    Users
                </section>
            </section>
        </>
    )
}