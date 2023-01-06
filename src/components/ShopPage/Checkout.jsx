import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../../assets/css/checkout.css'
import formatter from '../currency/Currency';
import validate from '../Validate/ValidateCheckout';
import Checkout_Form from '../Forms/Checkout_Form';
import Checkoutpay from '../Forms/Paymant';
import { useSelector } from 'react-redux';
import api from '../../api/Product'

const Checkout = () => {
 
    const location = useLocation()
    const ProductCheck = useSelector(state => state.cart)
    const Total = location.state.total
    const Tax = location.state.tax

    const [Error , setError] = useState({})
    const [Auth , setAuth] = useState([])
    const [check  , setcheck] = useState(false)
    console.log(location.state.total);

    const handleSubmit= (e)=>{
    e.preventDefault()
    const data = new FormData(e.target)
    const dataForm  = Object.fromEntries(data.entries())
    setError(validate(dataForm))
    if(validate(dataForm).loading ){
      setAuth(dataForm)
      setcheck(true)
    }
    
  }

  const addUser = async()=>{
    const res = await api.post('/Users' , Auth)
    if(ProductCheck){
        ProductCheck.map((e)=>{
          try{
            const resPro = api.put(`/Products/${e.id}` , {...e , stock : e.stock - e.qt , qt : 1})
          }catch(err){
            console.log(`error edite : ${err.message}`)
          }
        })
      }
  }
  return (
    <div className='checkout'>
  <div className='head'>
    <h3>Checkout </h3>
  </div>
  <main>
 {
   !check ? <>
      <div className="checkout-form">
      <form onSubmit={handleSubmit} action="" method="post">
        <h6>Contact information</h6>
        <Checkout_Form Error={Error} />
      </form>
    </div>
    <div className="checkout-details">
      <div className="checkout-details-inner">
        <div className="checkout-lists">
          {
           ProductCheck && ProductCheck.map((ele , i)=>{
                return (<div key={i} className="card">
                <div className="card-image">
                  <img
                    src={ele.img}
                    alt=""
                  />
                </div>
                <div className="card-details">
                  <div className="card-name">{ele.name}</div>
                  <div className="card-price">
                    {formatter.format(ele.price)}
                  </div>
                  <div className="card-wheel">
                    
                    <span>For-{ele.cat}</span>
                    
                  </div>
                </div>
              </div>)
            })
          }
        </div>
        <div className="checkout-shipping">
          <h6>Shipping</h6>
          <p>{ Tax && formatter.format(Tax)}</p>
        </div>
        <div className="checkout-total">
          <h6>Total</h6>
          <p>{ Total && formatter.format(Total)}</p>
        </div>
      </div>
    </div>
   </> : <Checkoutpay addUser={addUser} />
 }
  </main>

</div>

  )
}

export default Checkout