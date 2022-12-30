import React, { useEffect } from 'react'
import formatter from '../components/currency/Currency'
import { Link } from 'react-router-dom'
import { useDispatch  } from 'react-redux'
import { add_cart , LocalStorageCart} from '../Redux/HandleCart'

const Woman = ({pro3}) => {
    const filterWoman = pro3.filter((e)=> e.cat === 'woman')
    const dispatch = useDispatch()
    const addProduct = (p) =>{
       
        dispatch(add_cart(p))
        dispatch(LocalStorageCart())
        
    }
  return (
    <section className="new product cat">
    <div className="center-text">
        <h2>new shoes Woman ({filterWoman.length})</h2>
    </div>
    <div className="new-content">
        {
            filterWoman.map((ele , index)=>{
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
            })
        }
       
        
    
    </div>
    </section>
  )
}

export default Woman