import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth'

export default function Login() {
  const [email,setEmail] = useState('nguyenquockhanhkz20@gmail.com')
  const [password,setPassword] = useState(123)
  let {login} = useAuth()
  return (
   <>
    <div className="container flex align-items-center auth">
    <form className="form">
    <input placeholder='Email' onChange={(e)=> setEmail(e.target.value)} type="text" />
    <input placeholder='Password' onChange={(e)=> setPassword(e.target.value)} type="password" />
    </form>
    <h3 className="auth-title">Page Login</h3>
    <button onClick={() => login({email},{password})} className="btn">Login</button>
    </div>
    
   </>
  )
}
