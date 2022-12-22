import React from 'react'
import { useDispatch } from 'react-redux';
import { add_cart } from '../../Redux/HandleCart';
import formatter from '../currency/Currency';

const Home_NewPro = ({Product}) => {
    
    const dispatch = useDispatch()
    const addProduct = (p) =>{
        dispatch(add_cart(p))
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

export default Home_NewPro