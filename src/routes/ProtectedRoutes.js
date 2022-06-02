import React, { useContext } from 'react'
import { Navigate} from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'



const isLogged = () => {
    return JSON.parse(localStorage.getItem('user'));
}

const ProtectedRoutes = (a, component) => {
    const user = useContext(AuthContext);
    console.log(user)
    // const navigate = useNavigate()
    const {logged} = isLogged()
    return logged ? component : <Navigate to={'/login'}/>
}

export default ProtectedRoutes;