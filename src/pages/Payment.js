import React from 'react'
import {useSelector} from 'react-redux';
import Card from '../components/Card.js'


export default function Payment() {
    const {cartState}=useSelector((state)=>state);
    const {items,totalPrice}=cartState;
    console.log(items)
  return (
    <div className="mt-20">
      <h1 className>Total Price is :${parseInt(totalPrice)}</h1>
      <div className="flex flex-wrap gap-10">
              {Object.values(items).map((item)=>{
                  return(<Card item={item}/>)
              })}
       </div>
    </div>
  )
}
