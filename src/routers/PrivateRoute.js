import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';



const PrivateRoute = () => {
    let { user: { logged } } = useContext(AuthContext);
    let location = useLocation();
    localStorage.setItem('lastPathname', location.pathname);
    return logged ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoute;

