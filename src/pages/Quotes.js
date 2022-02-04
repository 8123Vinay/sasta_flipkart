import React, { useEffect } from 'react'
import {getQuotes,incCount} from '../store/quotes'
import {useDispatch,useSelector} from 'react-redux' 

export default function Quotes() {
   const dispatch=useDispatch();
   const {count}=useSelector((s)=>{
     return s.quoteState
   })
    console.log("quote Count" ,count);
    useEffect(()=>{
     dispatch(getQuotes())
     
    },[dispatch])
    const {quotes}=useSelector((s)=>{
      return (s.quoteState)
   })
   console.log(quotes)
 
  return (
    <div>
         <h1>This is quote page here</h1>
         <button className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2 dark:bg-green-600 mt-20"
                      onClick={()=>{
                         dispatch(incCount(count+1))
                      }}>Click</button>
                      <h1>{count}</h1>
           </div>

  )
}
