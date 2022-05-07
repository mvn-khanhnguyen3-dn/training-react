import React from 'react'
import useAuth from '../../hooks/useAuth'

export default function Account() {
  let {logout} = useAuth();
  return (
   <>
    <div className="container auth flex align-items-center">
      <h3 className="auth-title">Welcome</h3>
      <button className="btn" onClick={() => {logout()}}>
        Sign out
      </button>
    </div>
   </>
  )
}
