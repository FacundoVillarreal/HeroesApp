import React, { useEffect, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { DcScreen } from './components/dc/DcScreen'
import { HeroScreen } from './components/heroe/HeroScreen'
import { LoginScreen } from './components/login/LoginScreen'
import { MarvelScreen } from './components/marvel/MarvelScreen'
import SearchScreen from './components/search/SearchScreen'
import { NavBar } from './components/ui/NavBar'
import ProtectedRoutes from './routes/ProtectedRoutes'

const init = () => {
    return (JSON.parse(localStorage.getItem('user')) || { logged: false })
}

export const App = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <div>
                <Routes>
                    <Route path='/' element={ProtectedRoutes(<NavBar />)}>
                        <Route index element={ProtectedRoutes(<MarvelScreen />)} />
                        <Route path='dc' element={ProtectedRoutes(<DcScreen />)} />
                        <Route path='hero/:heroeId' element={ProtectedRoutes(<HeroScreen />)} />
                        <Route path='search' element={ProtectedRoutes(<SearchScreen />)} />
                        <Route path='*' element={ProtectedRoutes(<MarvelScreen />)} />
                    </Route>
                    <Route path='/login' element={<LoginScreen />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    )
}

