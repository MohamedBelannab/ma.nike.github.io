import React from 'react'
import formatter from '../currency/Currency'

const Details = ({details}) => {
  return (
    <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
            <img src={details.img} alt="watch" />
          </div>
          <div className="hover-container">
            <div>
              <img src={details.img}  />
            </div>
            <div>
              <img src={details.img} />
            </div>
            <div>
              <img src={details.img} />
            </div>
            <div>
              <img src={details.img} />
            </div>
            <div>
              <img src={details.img} />
            </div>
          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name"> {details.name} - For {details.cat}</span> */
           <span className="product-price">{formatter.format(details.price)}</span>
          <div className="product-rating">
            <span>
              <i className="fas fa-star" />
            </span>
            <span>
              <i className="fas fa-star" />
            </span>
            <span>
              <i className="fas fa-star" />
            </span>
            <span>
              <i className="fas fa-star" />
            </span>
            <span>
              <i className="fas fa-star-half-alt" />
            </span>
            <span>(350 ratings)</span>
          </div>
          <p className="product-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae animi
            ad minima veritatis dolore. Architecto facere dignissimos voluptate
            fugit ratione molestias quis quidem exercitationem voluptas.
          </p>
          <div className="btn-groups">
            <button type="button" className="add-cart-btn">
              <i className="fas fa-shopping-cart" />
              add to cart
            </button>
            <button type="button" className="buy-now-btn">
              <i className="fas fa-wallet" />
              buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Details