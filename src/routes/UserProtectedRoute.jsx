import { Navigate } from "react-router-dom"


const UserProtectedRoute = ({children, user}) => {
    if (!user) {
        return <Navigate to='/user/login' />;
    } else {
        return children;
    }

}

export default UserProtectedRoute
