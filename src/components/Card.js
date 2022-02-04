import React,{useContext} from 'react'
import '../styles/Card.css'
import AddremoveButton from './AddremoveButton'




export default function Card({item}){
   return(
    //  <div className='flex flex-col h-96 bg-red-600'>
       <div className='flex flex-col justify-between hover:shadow-xl w-60 cursor-pointer  mt-10  hover:font-bold hover:underline hover:rounded-2xl border-2 border-white  hover:shadow-black-200' >
          <img src={item.image} className='ml-10 w-40 h-40' />
         <div className="flex flex-col  text-center" >
          <h3 className="mb-2"> {item.title}</h3>
          <div>
          <h3 className="mb-1 ml-20 w-16 bg-green-600 text-white h-8 text-center pt-1 rounded-lg">{item.rating.rate} ★ {/*({item.rating.count}) */}</h3>
          <span className="text-sm">rating({item.rating.count})</span>
          </div>
          <h3 className="mb-2">Price ${item.price}</h3>
          {/* </div> */}
          <AddremoveButton item={item}/>
        </div>    
        
       </div>
   )
}
