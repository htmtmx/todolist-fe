'use client'
import './page.css'
import "./../main.css";
import { LoginForm } from '@/ui/auth/LoginForm/LoginForm';
import { SignupForm } from '@/ui/auth/SignupForm/SignupForm';
import { useState } from 'react';
  
export default function Login() {

  const [loginVisible, setLoginVisible] = useState(true);
 
  return (
    <div className="container">

      <h2>Todo App</h2>
      
      {loginVisible ? <LoginForm setLoginVisible={setLoginVisible} /> : <SignupForm setLoginVisible={setLoginVisible}/>}
    </div>
  )
}