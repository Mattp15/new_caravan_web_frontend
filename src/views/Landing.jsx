import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <section>
            <h1>Landing page</h1>
            <Link to='login'>login</Link>
            <Link to='build'>build</Link>
        </section>
    );
}

export default Landing;
