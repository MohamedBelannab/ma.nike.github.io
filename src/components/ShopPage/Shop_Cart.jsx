import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import api from '../../api/Product'
import formatter from '../currency/Currency'
import {  useNavigate } from 'react-router-dom'
import { decrement_cart , increment_cart , remove_cart , cancel , LocalStorageCart  } from '../../Redux/HandleCart'

const Shop_Cart = ({ProShop}) => {
    const navigate = useNavigate()
    

    const Tax = 30
    let sub = 0
    
    const dispatch = useDispatch()

    const cancelCart = ()=>{
        dispatch(cancel())
        dispatch(LocalStorageCart())
    }

   const decrimentPro = (p)=>{
        dispatch(decrement_cart(p))
        dispatch(LocalStorageCart())

   }
   const inrimentPro = (p)=>{
    dispatch(increment_cart(p))
    dispatch(LocalStorageCart())

    }

    const remove = (p)=>{
        dispatch(remove_cart(p))
        dispatch(LocalStorageCart())

    }
    const subTotal = ()=>{
       
       ProShop.map((e)=>{
        sub += Number(e.price) * Number(e.qt)
       })
       return sub    

    }
    const checkout = async ()=>{
        // const conf = confirm('confirm your command')
        // if(conf){
        //     if(ProShop){
        //         ProShop.map((e)=>{
        //           try{
        //             const res = api.put(`/Products/${e.id}` , {...e , stock : e.stock - e.qt , qt : 1})
        //           }catch(err){
        //             console.log(`error edite : ${err.message}`)
        //           }
        //         })
        //       }

        //       alert('your command successfuly')

        // }
        if(ProShop){
            navigate('/checkout' , {state : { total : sub , tax : Tax} })
        }

        
    }

  return (
    <section className='cart-page'>
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>controle</th>
            </tr>
           {
            ProShop ?  ProShop.map((ele)=>{
                        return(<tr key={ele.id}>
                            <td>
                                <div className='cart-info'>
                                    <img src={ele.img} alt=''/>
                                    <div>
                                        <p>{ele.name}</p>
                                        <small>Price : {formatter.format(ele.price)}</small> <br/>
                                        <small>In Stock : {ele.stock}</small>
                                        <br/>
                                        <span onClick={()=>{remove(ele)}}>Remove</span>
                                    </div>

                                </div>
                            </td>
                            <td><button onClick={()=>{decrimentPro(ele)}}>-</button>{ele.qt} <button onClick={()=>{inrimentPro(ele)}}>+</button></td>
                            <td>{formatter.format(ele.qt * ele.price)}</td>
                            </tr> )
                        })
                    : ''
           }
        </table>
        <div className='total-price'>
            <table>
                <tr>
                    <td>subTotal</td>
                    <td>{formatter.format(subTotal())}</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>{formatter.format(Tax)}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{formatter.format(subTotal() + Tax)}</td>
                </tr>
             
            </table>

        </div>
        <div className='control'>
            <span onClick={()=>checkout()}>checkout</span>
            <span onClick={()=>{cancelCart()}}>cancel</span>
        </div>

       


    </section>
  )
}

export default Shop_Cart