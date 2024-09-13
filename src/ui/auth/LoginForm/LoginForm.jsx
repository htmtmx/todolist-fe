import React from 'react'
import { useFormLogin } from '@/logic/hooks/useFormLogin'
import { login } from '@/services/auth/user';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { setCookieClient } from '@/logic/utils/cookies';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
  }

export const LoginForm = ({ setLoginVisible }) => {

  const router = useRouter();
  
  const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useFormLogin(loginFormFields);
  
  const loginSubmit = async (e) => {
    e.preventDefault();
    
    
    try {
      const resp = await login({email:loginEmail, password:loginPassword});
      if (resp.ok) {
        router.push('/');
        setCookieClient('auth-token', resp.token);
        console.log('Usuario logueado correctamente');
      } else {
        console.log('Error al loguear usuario');
        return Swal.fire('Error', 'Usuario o contraseña incorrectos','error');
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form  className="formLogin" onSubmit={loginSubmit}>
        <h1 className="titleForm">Iniciar sesión</h1>
        <label className="labelForm" htmlFor="loginEmail">Email</label>
        <input className="inputForm" id='loginEmail' type="email" name="loginEmail" placeholder="Email" value={loginEmail} onChange={onLoginInputChange} required />
        <label className="labelForm" htmlFor="loginPassword">Contraseña</label>
        <input className="inputForm" id='loginPassword' type="password" name="loginPassword" placeholder="Password" value={loginPassword} onChange={onLoginInputChange} required />
        <button className="buttonForm" type="submit">Iniciar sesión</button>
      <button className="buttonForm buttonForm__secondary" type="button" onClick={() => setLoginVisible(prevLoginVisible => !prevLoginVisible)}>Registrarse</button>
      </form>
  )
}
