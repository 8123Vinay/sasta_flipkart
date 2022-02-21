import React,{useState,useContext} from 'react'
import {getItemsByFilter} from '../dummy'
import {filterContext} from '../App'
import {useDispatch} from 'react-redux'
import {setPriceRange} from '../store/items.js' 



export default function Filter({filter}) {
  const dispatch=useDispatch()
  const price_ranges=[ {start: 0,end:10000},{start: 0,end:9},{start: 10,end:99},{start: 100,end:499},{start: 500,end:1000}]
  return (
    <div style={{display:filter ? "block" : "none"}} className="fixed top-0 bottom-0 bg-white-600 left-2/3 top-14 bg-gray-600 text-white h-1/3">
      <h1>
          Choose Price Range
      </h1>
       <div className="flex flex-col gap-4">
           {price_ranges.map((range,index)=>{
               return(
                   <h1 className="hover:cursor-pointer text-center" key={index}
                     onClick={()=>{
                      dispatch(setPriceRange(range))
                     }}>$ {range.start}-{range.end} </h1>
               )
           })}
       </div>
      
    </div>
  )
}

