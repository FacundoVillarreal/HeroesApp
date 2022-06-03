import React, { useContext } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const NavBar = () => {
    const navigate = useNavigate()

    const { user: { name }, dispatch } = useContext(AuthContext);

    const handleClickLogout = () => {
        dispatch({
            type: types.logout
        });
        navigate('/login', {replace: true})
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <Link className="navbar-brand mx-1" to="/">HeroesApp</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-2" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/marvel">Marvel</Link>
                        <Link className="nav-item nav-link" to="/dc">DC</Link>
                        <Link className="nav-item nav-link" to="/search">Search</Link>
                        <button className="nav-item nav-link btn me-auto" onClick={handleClickLogout}>Logout</button>
                        <div className='m-o p-0 d-flex justify-content-end ms-5'>
                            <small className='nav-item nav-link text-info d-flex align-items-center ' to="/">Bienvenido {name}</small>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
