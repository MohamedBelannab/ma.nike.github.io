import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import '../../assets/css/checkout.css'
import Paymant from './Paymant';
import formatter from '../currency/Currency';

const Checkout = () => {
 
    const location = useLocation()
    const ProductCheck = location.state.cart
    const Total = location.state.total
    const Tax = location.state.tax
    console.log(location.state.total);
  return (
    <div className='checkout'>
  <div className='head'>
    <h3>Checkout</h3>
  </div>
  <main>
    <div className="checkout-form">
      <form action="#!" method="get">
        <h6>Contact information</h6>
        <div className="form-control">
          <label htmlFor="checkout-email">E-mail</label>
          <div>
            <span className="fa fa-envelope" />
            <input
              type="email"
              id="checkout-email"
              name="checkout-email"
              placeholder="Enter your email..."
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="checkout-phone">Phone</label>
          <div>
            <span className="fa fa-phone" />
            <input
              type="tel"
              name="checkout-phone"
              id="checkout-phone"
              placeholder="Enter you phone..."
            />
          </div>
        </div>
        <br />
        <h6>Shipping address</h6>
        <div className="form-control">
          <label htmlFor="checkout-name">Full name</label>
          <div>
            <span className="fa fa-user-circle" />
            <input
              type="text"
              id="checkout-name"
              name="checkout-name"
              placeholder="Enter you name..."
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="checkout-address">Address</label>
          <div>
            <span className="fa fa-home" />
            <input
              type="text"
              name="checkout-address"
              id="checkout-address"
              placeholder="Your address..."
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="checkout-city">City</label>
          <div>
            <span className="fa fa-building" />
            <input
              type="text"
              name="checkout-city"
              id="checkout-city"
              placeholder="Your city..."
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-control">
            <label htmlFor="checkout-country">Country</label>
            <div>
              <span className="fa fa-globe" />
              <input
                type="text"
                name="checkout-country"
                id="checkout-country"
                placeholder="Your country..."
                list="country-list"
              />
              <datalist id="country-list">
                <option value="India" />
                <option value="USA" />
                <option value="Russia" />
                <option value="Japan" />
                <option value="Egypt" />
              </datalist>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="checkout-postal">Postal code</label>
            <div>
              <span className="fa fa-archive" />
              <input
                type="numeric"
                name="checkout-postal"
                id="checkout-postal"
                placeholder="Your postal code..."
              />
            </div>
          </div>
        </div>
        <div className="form-control checkbox-control">
          <input
            type="checkbox"
            name="checkout-checkbox"
            id="checkout-checkbox"
          />
          <label htmlFor="checkout-checkbox">
            Save this information for next time
          </label>
        </div>
        <div className="form-control-btn">
          <button>Continue</button>
        </div>
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
          <p>{formatter.format(Tax)}</p>
        </div>
        <div className="checkout-total">
          <h6>Total</h6>
          <p>{formatter.format(Total)}</p>
        </div>
      </div>
    </div>
  </main>
  <Routes>
    <Route path={`paymant`} element={<Paymant/>} />
  </Routes>
</div>

  )
}

export default Checkout