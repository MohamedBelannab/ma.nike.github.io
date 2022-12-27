import React from 'react'
import { useDispatch } from 'react-redux';
import { add_cart, LocalStorageCart } from '../../Redux/HandleCart';
import formatter from '../currency/Currency';
import { Link } from 'react-router-dom';

const Home_NewPro = ({Product}) => {
    const shfulle = (d)=>{
        return [...d].sort(()=> Math.random() - 0.5)
      }
    
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
                shfulle(Product).slice(shfulle(Product).length - 8 , shfulle(Product).length).map((ele , index)=>{
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

export default Home_NewPro