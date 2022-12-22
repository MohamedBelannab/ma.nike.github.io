import React, { useEffect, useState } from 'react'
import formatter from '../components/currency/Currency'

const New = ({pro2}) => {
  const shfulle = (d)=>{
    for (var c = d.length - 1; c > 0; c--) {
      var b = Math.floor(Math.random() * (c + 1));
      var a = d[c];
      d[c] = d[b];
      d[b] = a;
    }
    return d
  }
  return (
    <section className="new product">
    <div className="center-text">
        <h2>new arrival items</h2>
    </div>
    <div className="new-content">
    {
                shfulle(pro2).map((ele , index)=>{
                    return (<div key={index} className="row">
                    <img src={ele.img} />
                    <h4>{ele.name}</h4>
                    <h5>{formatter.format(ele.price)}</h5>
                    <div className="top">
                        <p>{ele.stock}</p>
                    </div>
                    <div className="bbtn">
                        <span onClick={()=>{addProduct(ele)}} >Add to cart</span>
                    </div>
                    </div>)
                })
            }
  
        
    
    </div>
    </section>
  )
}

export default New