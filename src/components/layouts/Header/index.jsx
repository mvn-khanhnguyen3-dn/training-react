import React from 'react'
import {NavLink} from 'react-router-dom'
import {ImEarth} from 'react-icons/im'
import {AiOutlineUser,AiFillHeart} from 'react-icons/ai'
import { useSelector } from 'react-redux'

export default function Header() {
  const fav = useSelector((state) => state.fav.value);

  return (
   <header className='page-header flex justify-content-between'>
     <div className="header-logo">
      <ImEarth className="logo"/>
     </div>
        <ul className="menu-list">
          <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
        </ul>
       <ul className="header-action">
         <li><sup>{fav.length}</sup> <AiFillHeart/></li>
         <li><NavLink activeClassName="active" to="/account"><AiOutlineUser/></NavLink></li>
       </ul>
   </header>
  )
}
