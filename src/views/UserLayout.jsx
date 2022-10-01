import { Link, Outlet } from "react-router-dom";

const UserLayout = () => {
    return (
        <>
            <header>
                <Link to='/user/login'>login</Link>
                |
                <Link to='/user/register'>register</Link>
                |
                <Link to='/user/logout'>logout</Link>
            </header>
            <hr />
            <section>
                <Outlet />
            </section>
        </>
    );
}

export default UserLayout;
