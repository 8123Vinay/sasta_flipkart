import React,{useState,useContext} from 'react'
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'
import {toggleCart} from '../store/cart.js'
import {useSelector,useDispatch} from 'react-redux';
import { setCategory,setPriceRange,searchItems } from '../store/items'


const categories=[`men's clothing`, `women's clothing`,  "jewelery","electronics"]


export default function Navbar({filter,setFilter}) {
  const [inputValue,setInputValue]=useState("")
  const {cartState,itemsState,newsState}=useSelector((state)=>state);
  const {isOpen}=cartState;
  const dispatch=useDispatch();

  // const cates=["men","women","electronics","jewellery"]
  
  return (
    // <div className="bg-green-600 fixed">
    <div className="flex flex-wrap lg:gap-15 gap-10 bg-sky-600 text-white left-0 top-0 w-full text-xl pt-2 pb-2  fixed "	>
      <NavLink to="/"><h3 className="ml-4">Home</h3></NavLink>
      <NavLink to="/about"><h3 >About</h3></NavLink>
      {/* <NavLink to="/items"><h3 onClick={()=>{
         dispatch(setCategory(undefined))
      }}>Items</h3></NavLink>
 */}

       {categories.map((category,index)=>{
         return(
           <NavLink to={`items/${category}`}  key={index}>
             <h3 className="text-green" onClick={()=>{
                 dispatch(setCategory(category))
             }}>{category}</h3>
           </NavLink>
         )
       })}


      <NavLink to="/cart" ><button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 mb-2 text-center mr-2 mb-2 text-lg"
       onClick={()=>{
         dispatch(toggleCart(!isOpen))
       }}>
        Cart
      </button>
      </NavLink>

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
      }} className="bg-orange-600 text-base ml-4 w-16 h-8 rounded-lg shadow-lg" >Search</button>
      </div>
     
      
     </div>

      
  )
}
