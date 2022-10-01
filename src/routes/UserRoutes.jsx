import { Routes, Route } from "react-router-dom"
import { Login, Register, Logout, UserLayout } from '../views'
import { UserContext } from "../App";
import { useContext } from "react";
import { UserProtectedRoute } from './'

const UserRoutes = () => {

    const user = useContext(UserContext).user;

    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path='login' element={<Login />} />
                <Route path='logout' element={<UserProtectedRoute user={user}><Logout /></UserProtectedRoute>} />
                <Route path='register' element={<Register />} />
            </Route>
        </Routes>
    );
};

export default UserRoutes;
