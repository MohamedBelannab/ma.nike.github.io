import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/css/ProductsDetails.css'
import Details from '../components/Details/Details'
import Home_NewPro from '../components/HomePage/Home_NewPro'

const ProductDetails = ({pro5}) => {
    const {id} = useParams()
    const ProductDetails = pro5.find((ele)=> ele.id === Number(id))
  return (
 <>
 {
    ProductDetails && <Details details={ProductDetails}/>
 }
    
 
 </>
  )
}

export default ProductDetails