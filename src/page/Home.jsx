import React from 'react'
import Home_Desc from '../components/HomePage/Home_Desc'
import Home_Offer from '../components/HomePage/Home_Offer'
import Home_NewPro from '../components/HomePage/Home_NewPro'
import Home_Banner from '../components/HomePage/Home_Banner'
import Home_TopPro from '../components/HomePage/Home_TopPro'
import Home_Blog from '../components/HomePage/Home_Blog'

const Home = ({pro}) => {
  return (
    <>
    <Home_Desc/>
    <Home_Offer/>
    <Home_NewPro Product={pro}/>
    <Home_Banner/>
    <Home_TopPro Product={pro}/>
    <Home_Blog Product={pro}/>
    

    </>
  )
}

export default Home