import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";


const Delete = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleClick = async (e) => {
        // console.log(setUser);
        e.preventDefault();
        fetch(`${process.env.REACT_APP_CARAVAN_API}/user/destroy/${user.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          }).then((response) => response.json())
          .then((data) => {
            console.log(data);
            setUser(null);
          });
          navigate('/');
    };

    return (
        <section>
            <h1>Delete User</h1>
            <button onClick={handleClick}>Delete</button>
        </section>
    );
};

export default Delete;
