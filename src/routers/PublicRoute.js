import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const PublicRoute = () => {
    let { user: { logged } } = useContext(AuthContext);
    return !logged ? <Outlet /> : <Navigate to={'/'} />

}
export default PublicRoute;