import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth'

export default function Login() {
  const [email,setEmail] = useState('nguyenquockhanhkz20@gmail.com')
  const [password,setPassword] = useState(123)
  let {login} = useAuth()
  const loginEvent = (e) =>{
    e.preventDefault();
    login({email},{password})
  }
  return (
   <>
    <div className="container flex align-items-center auth">
    <form className="form">
    <h3 className="auth-title">Page Login</h3>
    <input placeholder='Email' onChange={(e)=> setEmail(e.target.value)} type="text" />
    <input placeholder='Password' onChange={(e)=> setPassword(e.target.value)} type="password" />
    <button onClick={(e) => loginEvent(e)} className="btn">Login</button>
    </form>
    </div>
   </>
  )
}
