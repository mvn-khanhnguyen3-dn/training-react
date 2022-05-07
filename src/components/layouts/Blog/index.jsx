import React from 'react'
import data from './data'

export default function Banner() {
  return (
    
    <section className="section-blog flex">
        <div className="container">
          <ul className="blog-list flex">
          {data.map((item,index)=>(
            <li key={index} className="blog-item">
              <div className="blog-tag">
                <span>{item.tag}</span>
              </div>
              <a href="" className="blog-img">
                <img src={item.img} alt="blog-1" />
              </a>
              <h3 className="blog-desc">
                {item.desc}
                <br />
                <i>{item.by}</i>
              </h3>
            </li>
             ))}   
          </ul>
        </div>
      </section>
  )
}
