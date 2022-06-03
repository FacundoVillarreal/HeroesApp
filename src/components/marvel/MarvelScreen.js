import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { HeroList } from '../heroe/HeroList'
import { NavBar } from '../ui/NavBar';

export const MarvelScreen = () => {
  const location = useLocation();
  const publisher = (location.pathname === '/marvel' || '/') && 'Marvel Comics'

  return (
    <>
      <NavBar />
      <div className='container p-5'>
        <h1>Marvel</h1>
        <hr />

        <div className='row'>
          <div className='col-12'>
            <HeroList publisher={publisher} />
          </div>
        </div>
      </div>
    </>
  )
}
