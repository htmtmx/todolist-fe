import React from 'react';
import { useFormLogin } from '@/logic/hooks/useFormLogin';
import Swal from 'sweetalert2';
import { register } from '@/services/auth/user';
import { setCookieClient } from '@/logic/utils/cookies';
import { useRouter } from 'next/navigation';


const signupFormFields = {
  signupName: '',
  signupEmail: '',
  signupPassword: '',
  signupPasswordConfirm: '',
}

export const SignupForm = ({ setLoginVisible }) => {
  
  const router = useRouter();

  const { signupName, signupEmail, signupPassword, signupPasswordConfirm, onInputChange: onSignupInputChange } = useFormLogin(signupFormFields);

  const signupSubmit = async(e) => {
    e.preventDefault();
    if (signupPassword !== signupPasswordConfirm) {
      return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error');
    }
    try {
      const resp = await register({"name":signupName, "email":signupEmail, "password":signupPassword});

      if (resp.ok) {
        router.push('/');
        console.log(resp.token)
        setCookieClient('auth-token', resp.token);
        console.log('Usuario creado correctamente');
      } else {
        console.log('Error al crear usuario');
      }
    } catch (error) {
      console.error(error);
    }
    
  }

  return (
    <form className="formSignup" onSubmit={signupSubmit}>
      <h1 className="titleForm">Registrarse</h1>
      <label className="labelForm" htmlFor="signupName">Nombre</label>
      <input className="inputForm" id='signupName' type="text" name="signupName" placeholder="Nombre" value={signupName} onChange={onSignupInputChange} required />
      <label className="labelForm" htmlFor="signupEmail">Email</label>
      <input className="inputForm" id='signupEmail' type="email" name="signupEmail" placeholder="Email" value={signupEmail} onChange={onSignupInputChange} required />
      <label className="labelForm" htmlFor="signupPassword">Password</label>
      <input className="inputForm" id='signupPassword' type="password" name="signupPassword" placeholder="Contraseña" value={signupPassword} onChange={onSignupInputChange} required />
      <label className="labelForm" htmlFor="signupPasswordConfirm">Confirmar contraseña</label>
      <input className="inputForm" id='signupPasswordConfirm' type="password" name="signupPasswordConfirm" placeholder="Contraseña" value={signupPasswordConfirm} onChange={onSignupInputChange} required />
      <button className="buttonForm" type="submit">Registrarse</button>
      <button className="buttonForm buttonForm__secondary" type="button" onClick={() => setLoginVisible(prevLoginVisible => !prevLoginVisible)}>Iniciar sesión</button>
    </form>
  )
}
