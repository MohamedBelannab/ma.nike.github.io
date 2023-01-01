import React from 'react'
import { useNavigate } from 'react-router-dom'
import cart from '../../assets/image/cart.svg'

const Vide_Shop = () => {
  const navigate = useNavigate()
  const direct = () =>{
    navigate('/new')
  }
  return (
    <div className='cart-page vide_cart'>
        <img style={{ 'width' : '500px' }} src={cart} alt="" />
        <div>
            <span onClick={direct} className='shop_cont'>continue shopping</span>
        </div>
    </div>
  )
}

export default Vide_Shop