import React, { useEffect, useState } from 'react'
import formatter from '../components/currency/Currency'
import { Link } from 'react-router-dom'
import { useDispatch  } from 'react-redux'
import { add_cart , LocalStorageCart} from '../Redux/HandleCart'

const New = ({pro2}) => {
  const shfulle = (d)=>{
    return [...d].sort(()=> Math.random() - 0.5)
  }
  const dispatch = useDispatch()
  const addProduct = (p) =>{
     
      dispatch(add_cart(p))
      dispatch(LocalStorageCart())
      
  }
  return (
    <section className="new product cat">
    <div className="center-text">
        <h2>new shoes ({pro2.length})</h2>
    </div>
    <div className="new-content">
    {
                shfulle(pro2).map((ele , index)=>{
                    return (<div key={index} className="row">
                    <Link to={`/shoes/${ele.id}`}><img src={ele.img} /></Link>
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