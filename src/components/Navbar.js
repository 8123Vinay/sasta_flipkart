import React,{useState,useContext} from 'react'
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import {getCategories} from '../dummy'
import {toggleCart} from '../store/cart.js'
import {useSelector,useDispatch} from 'react-redux';
import { setCategory,setPriceRange,searchItems } from '../store/items'




export default function Navbar({filter,setFilter}) {
  const [inputValue,setInputValue]=useState("")
  const categories=getCategories();
  const {cartState,itemsState}=useSelector((state)=>state);
  const {isOpen}=cartState;
  const dispatch=useDispatch();
  return (
    <div className="flex flex-wrap lg:gap-15 gap-10 bg-blue-600 text-center text-white left-0 top-0 text-orange w-full text-xl text-xl pt-2 pb-2  fixed"	>
      <Link to="/"><h3 className="hover:underline">Home</h3></Link>
      <Link to="/about"><h3 >About</h3></Link>
      <Link to="/items"><h3 onClick={()=>{
         dispatch(setCategory(undefined))
      }}>Items</h3></Link>


       {categories.map((cat)=>{
         return(
           <Link to={`items/${cat.name}`} >
             <h3 className="" onClick={()=>{
                 dispatch(setCategory(cat.name))
             }}>{cat.name}</h3>
           </Link>
         )
       })}


      <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 mb-2 text-center mr-2 mb-2 text-lg"
       onClick={()=>{
         dispatch(toggleCart(!isOpen))
       }}>
        Cart
      </button>

      <h1 className="hover:cursor-pointer" 
      onClick={()=>{
        setFilter(!filter)
      }}>Filter
      </h1>

      <div>
      <input type="text" value={inputValue} placeholder="Search for Items" className="h-8 text-black text-sm w-60" onChange={(e)=>{
        setInputValue(e.target.value)
      }}/>
      <button
      onClick={()=>{
        dispatch(searchItems(inputValue))
        
      }}>Search</button>
      </div>
      {/* <button onClick={console.log("Hello")}>click</button> */}
      
     </div>

    
  )
}
