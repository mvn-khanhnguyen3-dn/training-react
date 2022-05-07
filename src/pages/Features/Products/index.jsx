import React, { useEffect, useState } from 'react'
import ProductItem from '../../../components/modules/ProductItem';
import {apiProductGetList} from '../../../api/products/products.api'

export default function Products() {
  const [productList,setProductList] = useState([])
  useEffect(()=>{
    apiProductGetList().then(data => {
      setProductList(data.data)
    },[]);

    // console.log(process.env.REACT_APP_TEST);
  },[]);
  return (
    <main className='page-main'>
      <div className="container">
      <div className="row">
        {productList.map(product =>(
         <li className="product-list" key={product.id}>
            <ProductItem product ={product}/>
         </li>
        ))}
      </div>
      </div>
    </main>
  )
}
