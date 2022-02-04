import React,{ useContext,useEffect } from 'react'
import {getItems} from '../dummy'
import Card from '../components/Card'
import {NavLink } from 'react-router-dom'
import {useParams} from 'react-router'
import {useSelector,useDispatch} from 'react-redux'
import {setCategory} from '../store/items.js'
export default function Items() {
    const {itemsState}=useSelector((s)=>s);
    const {categoryName}=useParams();
    const dispatch=useDispatch()
    // whenever i hit an api end point I have to use The use Effect here;
    useEffect(()=>{
        dispatch(setCategory(categoryName))
    },[])
     


        return (
           <div className="flex flex-wrap gap-10 mt-28">
              {itemsState.items.map((item)=>{
                  return(<Card item={item}/>)
              })}
            </div>
          
         )

     
 
}
