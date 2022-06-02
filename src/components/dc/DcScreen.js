import React from 'react'
import { useLocation } from 'react-router-dom';
import { HeroList } from '../heroe/HeroList';

export const DcScreen = () => {
  const location = useLocation();
  const publisher = location.pathname === '/dc' && 'DC Comics'

  return (
    <div className='container p-5'>
      <h1>Dc</h1>
      <hr />

      <div className='row'>
        <div className='col-12'>
          <HeroList publisher={publisher} />
        </div>
      </div>
    </div>
  )
}

