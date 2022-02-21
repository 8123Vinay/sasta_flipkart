import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {toggleCart,addToCart,removeFromCart,incrementCount} from '../store/cart.js'
import { Link } from 'react-router-dom'
import Card from '../components/Card.js'
export default function Cart() {
  const {cartState}=useSelector((s)=>s);
  const dispatch=useDispatch();
  const {items,totalPrice,isOpen,count}=cartState;
  console.log("cart count" ,count);
  return (
    <div>
    {/* < button className='text-white bg-orange-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 fixed right-2'
      onClick={()=>{
        dispatch(toggleCart(false))
      }}>Close</button> */}
       

    <h2 className="text-center mb-10">Items In your Cart</h2>
    <h1 className="">Total Price :${parseInt(totalPrice)}</h1>
    <div className="flex flex-wrap gap-10">
              {Object.values(items).map((item,index)=>{
                  return(<Card item={item} key={index}/>)
              })}
       </div>
       <Link to ="/payment" >
       < button className='text-white bg-orange-600 shadow-sm shadow-orange-400 w-40 h-12 rounded-xl mt-8 hover:shadow-red shadow-lg text-xl'
        style={{marginLeft:"40vw"}}
       >
         Confirm Order
       </button>
       </Link>
       
    </div>
  )
}
