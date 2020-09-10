import React from 'react';
import { Link } from 'react-router-dom';
import backBtn from '../assets/images/icono-atras-50.png';
import { createUser } from '../services/index';
import './styles/SignUp.css';

export const SignUp = () => {

  const state = {};
  const handleChange = (e) => {
    // console.log({ name: e.target.name, value: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    console.log('Button was clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    this.data = this.state;
    createUser(this.data);
    // console.log(this.data);
  };

  return (
    <>
      <section className='card signup-section'>
        <Link to='/'>
          <img src={backBtn} alt='' />
        </Link>
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className='input'
            type='text'
            name='username'
            // id=""
            placeholder='Nombre de usuario'
            value={state.username}
          />
          <input
            onChange={handleChange}
            className='input'
            type='text'
            name='first_name'
            // id=""
            placeholder='Tu nombre'
            value={state.first_name}
          />
          <input
            onChange={handleChange}
            className='input'
            type='text'
            name='last_name'
            // id=""
            placeholder='Tu apellido'
            value={state.last_name}
          />
          <input
            onChange={handleChange}
            className='input'
            type='email'
            name='email'
            // id=""
            placeholder='Tu email'
            value={state.email}
          />
          <input
            onChange={handleChange}
            className='input'
            type='tel'
            name='phone_number'
            // id=""
            placeholder='Número de celular'
            value={state.phone_number}
          />
          <input
            onChange={handleChange}
            className='input'
            type='password'
            name='password'
            // id=""
            placeholder='Password'
            value={state.password}
          />
          <button className="button" type='submit' onClick={handleClick}>
            Registrarse
          </button>
        </form>
        <p>
          Regístrate con{' '}
          <a href='http://'>
            <b>Facebook</b>
          </a>{' '}
          o{' '}
          <a href='http://'>
            <b>Google</b>
          </a>
        </p>
        <p>
          ¿Ya tienes cuenta? Ingresa
          <Link to='/login'>
            <b>aquí</b>
          </Link>
        </p>
      </section>
    </>
  );
}
