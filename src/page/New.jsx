import React, { useEffect, useState } from 'react'
import formatter from '../components/currency/Currency'
import { Link } from 'react-router-dom'
import { useDispatch  } from 'react-redux'
import { add_cart , LocalStorageCart} from '../Redux/HandleCart'
import Product_Notfound from '../components/ShopPage/Product_Notfound'
import '../assets/css/Search.css'

const New = ({pro2}) => {
  const [query , setQuery] = useState('')
  const filterPro = pro2.filter((e)=> e.name.toLowerCase().includes(query.toLowerCase()))
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
    <div className='serach'>
      <input maxLength={50} className="input-elevated" value={query} onChange={(e)=>{setQuery(e.target.value)}} type="text" placeholder="Search"></input>
    </div>
    <div className="new-content">
    
    {
                filterPro.length > 0 ? shfulle(filterPro).map((ele , index)=>{
                  return (<div key={index} className="row">
                  <Link className={ele.stock === 0 ? "outStock" : ""} to={`/shoes/${ele.id}`}><img src={ele.img} /></Link>
              <h4 className={ele.stock===0 ? 'outStock' : ''}>{ele.name}</h4>
              <h5>{formatter.format(ele.price)}</h5>
              <div className={ele.stock === 0 ? "topStock" : "top"}>
                  <p>{ele.stock}</p>
              </div>
              {ele.stock === 0 ? "" : <div className="bbtn">
                  <span onClick={()=>{addProduct(ele)}} >Add to cart</span>
              </div>}
              </div>)
              }) : <Product_Notfound inputValue = {query}/>
            }
  
        
    
    </div>
    </section>
  )
}

export default New