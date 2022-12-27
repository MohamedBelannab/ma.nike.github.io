import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import formatter from '../components/currency/Currency'
import { add_cart , LocalStorageCart} from '../Redux/HandleCart'

const Men = ({pro6}) => {
    const filterMen = pro6.filter((e)=> e.cat === 'men')
    const dispatch = useDispatch()
    const addProduct = (p) =>{
       
        dispatch(add_cart(p))
        dispatch(LocalStorageCart())
        
    }

  return (
    <section className="new product cat">
    <div className="center-text">
        <h2>new shoes Men ({filterMen.length})</h2>
    </div>
    <div className="new-content">
        {
            filterMen.map((ele , index)=>{
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

export default Men