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
import PrivateRoute from './routers/PrivateRoute'
import PublicRoute from './routers/PublicRoute'

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
                    <Route path='/' element={<PrivateRoute />} >
                        <Route index element={<MarvelScreen />} />
                        <Route path='dc' element={<DcScreen />} />
                        <Route path='hero/:heroeId' element={<HeroScreen />} />
                        <Route path='search' element={<SearchScreen />} />
                        <Route path='*' element={<MarvelScreen />} />
                    </Route>
                    <Route path='/login' element={<PublicRoute />}>
                        <Route index element={<LoginScreen />} />
                    </Route>
                </Routes>
            </div>
        </AuthContext.Provider>
    )
}

