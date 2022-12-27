import React from 'react'
import formatter from '../components/currency/Currency'

const Kids = ({pro4}) => {
    const filterKids = pro4.filter((e)=> e.cat === 'kids')
  return (
    <section className="new product cat">
    <div className="center-text">
        <h2>new  Kids</h2>
    </div>
    <div className="new-content">
        {
            filterKids.map((ele , index)=>{
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

export default Kids