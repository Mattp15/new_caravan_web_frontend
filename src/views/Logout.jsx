import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleClick = async (e) => {
        // console.log(setUser);
        e.preventDefault();
        if(user){
            fetch(process.env.REACT_APP_CARAVAN_API + '/user/logout', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }).then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setUser(null);
                // console.log(user);
                navigate('/');
            }).catch((err)=>{console.log({err})});
        } else
            console.log('user was not logged in');
            navigate('/');
    };

    return (
        <section>
            <h1>Logout</h1>
            <button onClick={handleClick}>Logout</button>
        </section>
    );
};

export default Logout;
