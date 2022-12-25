import React from 'react'
import { useDispatch } from 'react-redux';
import { add_cart, LocalStorageCart } from '../../Redux/HandleCart';
import formatter from '../currency/Currency';
import { Link } from 'react-router-dom';

const Home_NewPro = ({Product}) => {
    
    const dispatch = useDispatch()
    const addProduct = (p) =>{
       
        dispatch(add_cart(p))
        dispatch(LocalStorageCart())
        
    }
  return (
    <section className="new product">
        <div className="center-text">
            <h2>new arrival items</h2>
        </div>
        <div className="new-content">
            {
                Product.slice(Product.length - 8 , Product.length).map((ele , index)=>{
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

export default Home_NewPro