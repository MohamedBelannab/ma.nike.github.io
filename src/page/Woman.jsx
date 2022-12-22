import React, { useEffect } from 'react'
import formatter from '../components/currency/Currency'

const Woman = ({pro3}) => {
    const filterWoman = pro3.filter((e)=> e.cat === 'woman')
  return (
    <section className="new product cat">
    <div className="center-text">
        <h2>new Woman</h2>
    </div>
    <div className="new-content">
        {
            filterWoman.map((ele , index)=>{
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

export default Woman