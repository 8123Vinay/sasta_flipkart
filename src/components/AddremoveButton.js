import React from 'react'
import {addToCart,removeFromCart} from '../store/cart.js'
import {useDispatch,useSelector} from 'react-redux'
export default function AddremoveButton({item}) {
  const dispatch=useDispatch();
  const {cartState}=useSelector((state)=>state)
  const items=cartState.items;
  const id=item.id
  
  if(items[id]){
    return (
        <div className='flex justify-center gap-8'>
          <button className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600"
          onClick={()=>{
             dispatch(addToCart((item)))
          }}>+</button>
          <h3>{items[id].quantity}</h3>
          <button className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600" onClick={()=>{
             dispatch(removeFromCart(item))
          
          }}>
              -
          </button>
        </div>
      )
  }
  else{
    return (
        <div>
          <button className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600"
          onClick={()=>{
             dispatch(addToCart((item)))
          }}>Add To Cart</button>
        </div>
      )
  }
  
}

