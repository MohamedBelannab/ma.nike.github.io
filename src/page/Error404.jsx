import React from 'react'
import img_error from '../assets/image/errorPage.svg'
import '../assets/css/Error.css'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate()
  const direct = () =>{
    navigate('/')
  }
  return (
    <div className='error_page'>
      <img  src={img_error} alt="" />
      <div>
            <span onClick={direct} className='shop_cont'>back to home</span>
        </div>
    
    </div>
  )
}

export default Error404