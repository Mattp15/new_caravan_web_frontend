import { Link, Outlet } from "react-router-dom";

const MainSharedLayout = () => {
    return (
        <>
            <header>
                <Link to='/'> Home </Link>
                |
                <Link to='/user'> User Management </Link>
                |
                <Link to='/build'> Build Your Deck </Link>
            </header>
            <hr />
            <section>
                <Outlet />
            </section>
        </>
    );
}

export default MainSharedLayout;
