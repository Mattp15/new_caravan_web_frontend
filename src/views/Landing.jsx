import { Link } from "react-router-dom";
import GetAllCards from "../BuildDeck/GetAllCards";

const Landing = () => {
    return (
        <section>
            <h1>Landing page</h1>
            <Link to='login'>login</Link>
            <Link to='build'>build</Link>
            <GetAllCards />
        </section>
    );
}

export default Landing;