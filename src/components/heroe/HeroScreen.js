import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  const navigate = useNavigate();
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  if (!hero) {
    return <Navigate to="/" replace={true} />
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  const handleClickReturn = () => {
    navigate(-1)
  }

  return (
    <div className='container'>

      <div className='row mt-5 '>
        <div className='col-6'>
          <img
            src={`../assets/heroes/${heroeId}.jpg`}
            alt={superhero}
            className='img-thumbnail animate__animated animate__fadeInLeft'
          />
        </div>
        <div className='col-6 p-0 animate__animated animate__fadeIn'>
          <h3 className='card-title'> {superhero}</h3>

          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><b>Alter ego:{alter_ego}</b></li>
            <li className='list-group-item'><b>Publisher:{publisher}</b></li>
            <li className='list-group-item'><b>First Appearance:{first_appearance}</b></li>
          </ul>

          <h5>Characters</h5>
          <p>{characters}</p>

          <button className='btn btn-dark' onClick={handleClickReturn}>Return</button>
        </div>
      </div>
    </div>
  )
}
