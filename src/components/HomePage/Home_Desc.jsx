import React from 'react'
import { Link } from 'react-router-dom'

const Home_Desc = () => {
  return (
    <section className="home">
        <div className="home-text">
            <h1>
            Find your own <br /> Happiness
            </h1>
            <p>
            Make a bouquet and pick up a gift with <br /> your wishes. Deliver to any
            corner of the city.
            </p>
            <Link to='/new' className="btn">
            Pick a Bouquet
            </Link>
        </div>
    </section>
  )
}

export default Home_Desc