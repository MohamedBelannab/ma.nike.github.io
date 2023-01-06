import React from 'react'

const Checkout_Form = ({Error}) => {
  return (
    <>
            <div className="form-control">
          <div className='info-form'>
          <span className="bx bx-envelope" /> &nbsp;
          <label htmlFor="checkout-email">E-mail</label>
          </div>
          <div>
            <input
              type="email"
              id="checkout-email"
              name="checkoutemail"
              placeholder="Enter your email..."
            />
            <small className='error'>{Error.email}</small>
          </div>
        </div>
        <div className="form-control">
          <div className="info-form">
          <span className="bx bx-phone" /> &nbsp;
          <label htmlFor="checkout-phone">Phone</label>

          </div>
         
          <div>
            <input
              type="tel"
              name="checkoutphone"
              id="checkout-phone"
              placeholder="Enter you phone..."
            />
             <small  className='error'>{Error.phone}</small>
          </div>
        </div>
        <br />
        <h6>Shipping address</h6>
        <div className="form-control">
          <div className="info-form">
          <span className="bx bx-user-circle" /> &nbsp;
          <label htmlFor="checkout-name">Full name</label>

          </div>
          
          <div>
            
            <input
              type="text"
              id="checkout-name"
              name="checkoutname"
              placeholder="Enter you name..."
            />
             <small  className='error'>{Error.name}</small>
          </div>
        </div>
        <div className="form-control">
          <div className="info-form">
            <span className="bx bx-home" /> &nbsp;
            <label htmlFor="checkout-address">Address</label>

          </div>
          
          <div>

            <input
              type="text"
              name="checkoutaddress"
              id="checkout-address"
              placeholder="Your address..."
            />
             <small  className='error'>{Error.address}</small>
          </div>
        </div>
        <div className="form-control">
          <div className="info-form">
          <span className="bx bx-building" /> &nbsp;
          <label htmlFor="checkout-city">City</label>

          </div>
         
          <div>
            
            <input
              type="text"
              name="checkoutcity"
              id="checkout-city"
              placeholder="Your city..."
            />
             <small  className='error'>{Error.city}</small>
          </div>
        </div>
        <div className="form-group">
          <div className="form-control">
            <div className="info-form">
            <span className="bx bx-globe" /> &nbsp;
            <label htmlFor="checkout-country">Country</label>
            </div>
           
            <div>
             
              <input
                type="text"
                name="checkoutcountry"
                id="checkout-country"
                placeholder="Your country..."
                list="country-list"
              />
               <small  className='error'>{Error.country}</small>
              <datalist id="country-list">
                <option value="Marocco" />
                <option value="USA" />
                <option value="Russia" />
                <option value="Japan" />
                <option value="EK" />
              </datalist>
            </div>
          </div>
          <div className="form-control">
            <div className="info-form">
            <span className="bx bx-archive" /> &nbsp;
            <label htmlFor="checkout-postal">Postal code</label>

            </div>
            
            <div>
              
              <input
                type="numeric"
                name="checkoutpostal"
                id="checkout-postal"
                placeholder="Your postal code..."
              />
               <small  className='error'>{Error.postal}</small>
            </div>
          </div>
        </div>

        <div className="form-control-btn">
          <button>Continue</button>
        </div>
    </>
    
  )
}

export default Checkout_Form