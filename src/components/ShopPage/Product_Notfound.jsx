import React from 'react'
import '../../assets/css/Product_notfound.css'
const Product_Notfound = ({inputValue}) => {
  return (
    <div className='content-p'>
    
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
  <path
    className="jumper"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M47.5,94.3c0-23.5,19.9-42.5,44.5-42.5s44.5,19,44.5,42.5"
  />
  <g stroke="#2d2d2d" strokeWidth={1}>
    <ellipse
      className="circleL"
      fill="none"
      strokeMiterlimit={10}
      cx="47.2"
      cy="95.6"
      rx="10.7"
      ry="2.7"
    />
    <ellipse
      className="circleR"
      fill="none"
      strokeMiterlimit={10}
      cx="136.2"
      cy="95.6"
      rx="10.7"
      ry="2.7"
    />
  </g>
  <path
    className="jumper clone"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M47.5,94.3c0-23.5,19.9-42.5,44.5-42.5s44.5,19,44.5,42.5"
  />
</svg>
    <div id="text">
      <span>We could not find anything for</span> "{inputValue}"
    </div>
  </div>
  
  )
}

export default Product_Notfound