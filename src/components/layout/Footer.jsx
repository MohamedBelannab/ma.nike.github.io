import React from 'react'

const Footer = () => {
  return (
    <>
        <section className="contact">
            <div className="contact-box">
            <h4>MY ACCOUNT</h4>
            <li>
                <a href="#">My account</a>
            </li>
            <li>
                <a href="#">Checkout</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
            <li>
                <a href="#">Shopping Cart</a>
            </li>
            <li>
                <a href="#">WishList</a>
            </li>
            </div>
            <div className="contact-box">
            <h4>QUICK LINKS</h4>
            <li>
                <a href="#">Store Location</a>
            </li>
            <li>
                <a href="#">Orders Tracking</a>
            </li>
            <li>
                <a href="#">Size Guide</a>
            </li>
            <li>
                <a href="#">My account</a>
            </li>
            <li>
                <a href="#">FAQs</a>
            </li>
            </div>
            <div className="contact-box">
            <h4>INFORMATION</h4>
            <li>
                <a href="#">Privacy Page</a>
            </li>
            <li>
                <a href="#">About us</a>
            </li>
            <li>
                <a href="#">Careers</a>
            </li>
            <li>
                <a href="#">Delivery Inforamtion</a>
            </li>
            <li>
                <a href="#">Term &amp; Conditions</a>
            </li>
            </div>
            <div className="contact-box">
            <h4>CUSTOMER SERVICE</h4>
            <li>
                <a href="#">Shipping Policy</a>
            </li>
            <li>
                <a href="#">Help &amp; Contact Us</a>
            </li>
            <li>
                <a href="#">Returns &amp; Refunds</a>
            </li>
            <li>
                <a href="#">Online Stores</a>
            </li>
            <li>
                <a href="#">Terms and Conditions</a>
            </li>
            </div>
            <div className="contact-box">
            <h4>oxygen</h4>
            <h5>Connect with us</h5>
            <div className="social">
                <a href="#">
                <i className="bx bxl-facebook" />
                </a>
                <a href="#">
                <i className="bx bxl-instagram-alt" />
                </a>
                <a href="#">
                <i className="bx bxl-twitter" />
                </a>
            </div>
            </div>
        </section>
        {/*-scroll-*/}
        <a href="#" className="scroll-top">
            <i className="bx bx-chevrons-up" />
        </a>
        <div className="end-text">
            <p>© late 2022 Simo_bl. All Rights Reserved.</p>
        </div>
</>
  )
}

export default Footer