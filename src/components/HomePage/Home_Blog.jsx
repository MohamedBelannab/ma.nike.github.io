import React from 'react'

const Home_Blog = ({Product}) => {
  return (
    <section className="blog">
        <div className="center-text">
            <h2>Latest news</h2>
        </div>
        <div className="blog-content">
            {
                Product.slice(Product.length - 3 , Product.length).map((ele , i)=>{
                    return(<div key={i} className="main-box">
            <div className="box-img">
                <img src={ele.img} />
            </div>
            <div className="in-bxx">
                <div className="in-text">
                <p>Dec 02, 2022</p>
                </div>
                <div className="in-icon">
                <a href="#">
                    <i className="bx bx-message-rounded" />
                    40
                </a>
                </div>
            </div>
            <div>
            <h3>{ele.details.desc}</h3>
            </div>
            </div>)
                })
            }
            
           
        </div>
    </section>

  )
}

export default Home_Blog