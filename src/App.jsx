import React, { useEffect, useState } from "react"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./page/Home"
import Woman from "./page/Woman"
import Kids from "./page/Kids"
import { BrowserRouter , Route, Routes } from "react-router-dom"
import Shop from "./page/Shop"
import api from './api/Product'
import New from "./page/New"
import ProductDetails from "./page/ProductDetails"
import Men from "./page/Men"




function App() {

  const [dataGlobal , setdataGlobal] = useState([])
  useEffect(()=>{
    const fetchPro = async ()=>{
      try{
        const res = await api.get('/Products')
        setdataGlobal(res.data)
      }catch(err){
        console.log(err.message);

      }
    }
    fetchPro()
    
  } , [])
  

  return (
  <>
  <BrowserRouter>
 <ToastContainer/>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home pro={dataGlobal}  />} />
    <Route path="/new" element={<New pro2={dataGlobal}/>} />
    <Route path="/woman" element={<Woman pro3={dataGlobal}/>} />
    <Route path="/kids" element={<Kids pro4={dataGlobal}/>} />
    <Route path="/shoes/:id" element={<ProductDetails pro5={dataGlobal}/>} />
    <Route path="/men" element={<Men pro6={dataGlobal}/>} />
    <Route path="/shop" element={<Shop/>} />
    <Route path="/YourFavorite" element={<Home/>} />
  </Routes>
  <Footer/>
 
  </BrowserRouter>
  
  </>
  )
}

export default App
