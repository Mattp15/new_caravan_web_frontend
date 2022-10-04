import { Link, Outlet } from "react-router-dom";

const MainSharedLayout = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to='/'> Home </Link>
                    |
                    <Link to='/user'> User Management </Link>
                    |
                    <Link to='/build'> Build Your Deck </Link>
                    |
                    <Link to='/game'> Play A Game </Link>
                </nav>
            </header>
            <hr />
            <section>
                <Outlet />
            </section>
        </>
    );
}

export default MainSharedLayout;
