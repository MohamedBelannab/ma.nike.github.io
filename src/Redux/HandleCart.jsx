import { createSlice } from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
const itemCart = localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) : []

const initialState = [...itemCart]

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_cart: (state , action) => {
      const product = action.payload
      const exist = state.find((x)=> x.id === product.id )
      if(exist){
        toast.info('increased product quantity' , {position:"bottom-left"})
        return state.map((ele)=>
          ele.id === product.id ? {...ele , qt : ele.qt +1} : ele
        )
        
      }else{
        const product = action.payload
        toast.success(`${product.name}` , {position:'bottom-left'})
        return [
          ...state , {
            ...product , qt : 1
          }
        ]
      }
      
     
      
    },
    decrement_cart: (state , action) => {
      const product = action.payload
      const exist = state.find((x)=> x.id === product.id)
      if(exist){
        if(exist.qt > 1){
          return state.map((ele)=> ele.id === product.id ? {...ele , qt : ele.qt -1} : ele)

        }
      } 
      
    },
    increment_cart: (state , action) => {
      const product = action.payload
      const exist = state.find((x)=> x.id === product.id)
      if(exist){
        if(exist.qt < exist.stock){
          return state.map((ele)=> ele.id === product.id ? {...ele , qt : ele.qt +1} : ele)

        }
      }},
    remove_cart: (state, action) => {
      
      const product = action.payload
      const exist = state.find((x)=> x.id === product.id)
      if(exist.qt=== 1){
        return state.filter((ele)=> exist.id !== ele.id)
      }else{
        return state.map((ele)=> ele.id === product.id ? {...ele , qt : ele.qt -1} : ele)
      }
      
    },
    cancel : (state)=>{
     let con =  confirm('are you sure cancel shop ? ')
     if(con){
      return state = []
     }
    },
    LocalStorageCart : (state)=>{
       localStorage.setItem('cart' , JSON.stringify(state))
      
    }
   

  },
})


// Action creators are generated for each case reducer function
export const { add_cart, decrement_cart, remove_cart , increment_cart , cancel , LocalStorageCart } = CartSlice.actions

export default CartSlice.reducer
