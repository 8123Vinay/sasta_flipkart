import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {toggleCart,addToCart,removeFromCart,incrementCount} from '../store/cart.js'
import { Link } from 'react-router-dom'
export default function Cart() {
  const {cartState}=useSelector((s)=>s);
  const dispatch=useDispatch();
  const {items,totalPrice,isOpen,count}=cartState;
  console.log("cart count" ,count);
  return (
    <div style={{display: cartState.isOpen ? "block" :"none" ,position:'absolute',top:0, left:'80vw' ,height:'200vh' }} className="">
    < button className='text-white bg-orange-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 fixed right-2'
      onClick={()=>{
        dispatch(toggleCart(false))
      }}>Close</button>
       

    <h2 className="text-center mb-10">Items In your Cart</h2>
    <h1 className="">Total Price :${parseInt(totalPrice)}</h1>
      <div>
       
        <div className="flex flex-col">
           {Object.values(items).map((item)=>{
              return(
               <div className="flex flex-col mb-10"> 
                  <img style={{width:"100px",height:"100px"}} src={item.image} />
                  <p>Price :${item.price}</p>
                  <p>Rating :{item.rating.rate}({item.rating.count})</p>
                  <div className="flex gap-4">  
                      <button className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-2 py-1.1 text-center mr-2 mb-2 dark:bg-green-600"
                      onClick={()=>{
                          dispatch(addToCart((item)))
                          dispatch((incrementCount(count+1)));
                        }
                      }>+</button>
                      <h2>{item.quantity}</h2>
                      <button className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2 dark:bg-green-600"
                      onClick={()=>{
                        dispatch(removeFromCart(item))
                      }}>-</button>
                  </div>
               </div>
              )
           })}
        </div>
      </div>
      
       <Link to ="/payment" >
       < button className='text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '
        onClick={()=>{
          dispatch(toggleCart(!isOpen))
        }}>
         Checkout
       </button>
       </Link>
       
    </div>
  )
}
