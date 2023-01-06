import React from 'react'
import formatter from '../components/currency/Currency'
import { Link } from 'react-router-dom'
import Product_Notfound from '../components/ShopPage/Product_Notfound'
import { useState } from 'react'

const Kids = ({pro4}) => {
    const filterPro = pro4.filter((e)=> e.cat === 'kids')
    const [query , setQuery] = useState('')
    const filterKids = filterPro.filter((e)=> e.name.toLowerCase().includes(query.toLowerCase()))
  return (
    <section className="new product cat">
    <div className="center-text">
        <h2>new  Kids ({filterPro.length})</h2>
    </div>
    <div className='serach'>
      <input maxLength={50} className="input-elevated" value={query} onChange={(e)=>{setQuery(e.target.value)}} type="text" placeholder="Search"></input>
    </div>
    <div className="new-content">
        {
            filterKids.length > 0 ? filterKids.map((ele , index)=>{
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

export default Kids