import React from 'react'
import { useHistory } from "react-router-dom";
import {AiFillHeart} from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import {toggle} from '../../../store/Fav'

export default function ProductItem({product}) {

  let history = useHistory();

  const fav = useSelector((state) => state.fav.value);
  
  const dispatch = useDispatch()

  const {id,title,price,category,image} = product
  return (
   <>
   <div className="product-item">
     <AiFillHeart style={fav.includes(id) ? {color:"red"}: {}} className="icon-heart" onClick={() => dispatch(toggle(id))}  />
    <h2 className="product-catalog">{category}</h2>
     <a href="">
       <img className="product-img" src={image} alt="" />
     </a>
     <h3 className="product-title">
       {title}
     </h3>
      <div className="product-bottom">
       <span>$ {price}</span>
      <button onClick={()=> history.push(`/product/${id}`)} className="btn btn-show">Show more</button>
      </div>
   </div>
   </>
  )
}
