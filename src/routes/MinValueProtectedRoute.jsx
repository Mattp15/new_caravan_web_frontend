import { Navigate } from "react-router-dom"


const MinValueProtectedRoute = ({children, key, value}) => {
    if (key < value) {
        return <Navigate to='/' />;
    } else {
        return children;
    }

}

export default MinValueProtectedRoute
