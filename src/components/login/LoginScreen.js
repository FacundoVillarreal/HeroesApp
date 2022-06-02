import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleClickLogin = () => {
    const action = {
      payload: { name: 'Facundo' },
      type: types.login
    }
    dispatch(action);
    navigate('/')
  }
  return (
    <>
      <div className='container p-5'>
        <h1>Login</h1>
        <hr />
        <button className='btn btn-danger' onClick={handleClickLogin}>Login</button>
      </div>
    </>
  )
}
