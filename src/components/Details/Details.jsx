import React, { useRef } from 'react'
import formatter from '../currency/Currency'
import { add_cart } from '../../Redux/HandleCart'
import { useDispatch } from 'react-redux'

const Details = ({details}) => {
  const dispatch  =useDispatch()
  const srcImg = useRef(null)

  const changeSrc = (sr)=>{
    srcImg.current.src = sr
  }
  const addCart = (p)=>{
    dispatch(add_cart(p))
  }
  return (
    <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
            <img ref={srcImg} src={details.img} alt="watch" />
          </div>
          <div className="hover-container">
            {
              details.details.image.map((e , i)=>{
                return (<div onClick={()=>{changeSrc(e)}} key={i}>
                  <img src={e}  />
                </div>)
              })
            }

          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name"> {details.name} - For {details.cat}</span> 
           <span className="product-price">{formatter.format(details.price)}</span>
          <div className="product-rating">
            <span>({details.stock} in stock)</span>
          </div>
          <p className="product-description">
            {details.details.desc}
          </p>
          <div className="btn-groups">
            <button type="button" onClick={()=>{addCart(details)}} className="add-cart-btn">
            <i className='bx bxs-cart' ></i>
              add to cart
            </button>
            <button type="button"  className="buy-now-btn">
            <i className='bx bxs-wallet' ></i>
              buy now
            </button>
            <button type="button" className="buy-now-btn fav">
            <i className='bx bx-heart' ></i>
            </button>
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Details