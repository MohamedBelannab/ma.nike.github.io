import React from 'react'
import formatter from '../currency/Currency'
import { add_cart } from '../../Redux/HandleCart'
import { useDispatch } from 'react-redux'
const Home_TopPro = ({Product}) => {
    //  const shuffle = (arr)=>{
    //     return [...arr].sort(()=> Math.random() - 0.5)
    // }
    const dispatch = useDispatch()
    const addProduct = (p) =>{
        dispatch(add_cart(p))
    }
  return (
    <section className="new product">
        <div className="center-text">
            <h2>top products</h2>
        </div>
        <div className="new-content">
            {
                Product && Product.slice(Product.length - 6 , Product.length).map((ele)=>{
                    return (<div key={ele.id} className="row">
                    <img src={ele.img} />
                    <h4>{ele.name}</h4>
                    <h5>{formatter.format(ele.price)}</h5>
                    <div className="top">
                        <p>{ele.stock}</p>
                    </div>
                    <div className="bbtn">
                        <span onClick={()=>{addProduct(ele)}}>Add to cart</span>
                    </div>
                    </div>)
                })
            }

        </div>
    </section>

  )
}

export default Home_TopPro