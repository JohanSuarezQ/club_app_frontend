import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import backBtn from '../assets/images/icono-atras-50.png';
import { loginUser } from '../services/index';
import './styles/Login.css';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const Login = ({ history }) => {

  const { dispatch } = useContext( AuthContext );

  const handleLogin = () => {

      const lastPath = localStorage.getItem('lastPath') || '/';

      dispatch({
          type: types.login,
          payload: {
            name: 'Fernando'
          }
      });

      history.replace( lastPath );

  }

  const state = {};
  const handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    this.data = this.state;
    loginUser(this.data);
  };

  return (
    <>
      <section className='card login-section'>
        <Link to='/'>
          <img src={backBtn} alt='' />
        </Link>
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => handleChange(e)}
            className='input'
            type='email'
            value={state.email}
            name='email'
            placeholder='Email'
          />
          <input
            onChange={(e) => handleChange(e)}
            className='input'
            type='password'
            name='password'
            value={state.password}
            placeholder='Password'
          />
          <button className="button" type='submit' onClick={handleLogin}>
            Ingresar
          </button>
        </form>
        <p>
          Ingresa con{' '}
          <a href='http://'>
            <b>Facebook</b>
          </a>{' '}
          o{' '}
          <a href='http://'>
            <b>Google</b>
          </a>
        </p>
        <p>
          ¿No tienes cuenta? Regístrate
          <Link to='/signup'>
            <b>aquí</b>
          </Link>
        </p>
      </section>
    </>
  );
}

// export default Login;
