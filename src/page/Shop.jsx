
import React from 'react'
import { useSelector } from 'react-redux'
import '../assets/css/Shop.css'
import Shop_Cart from '../components/ShopPage/Shop_Cart'
import Vide_Shop from '../components/ShopPage/Vide_Shop'


const Shop = () => {
    
const ProShop = useSelector(state => state.cart)
  return (
    <>
    {ProShop.length > 0  ? <Shop_Cart ProShop={ProShop}/> : <Vide_Shop/>}
    
    </>
    
  )
}

export default Shop