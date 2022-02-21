import React,{ useContext,useEffect } from 'react'
import {getItems} from '../dummy'
import Card from '../components/Card'
import {NavLink } from 'react-router-dom'
import {useParams} from 'react-router'
import {useSelector,useDispatch} from 'react-redux'
import {setCategory,getFakeItems} from '../store/items.js'
export default function Items() {
    const {itemsState}=useSelector((s)=>s);
    // const {categoryName}=useParams();
    const dispatch=useDispatch()
    // whenever i hit an api end point I have to use The use Effect here;
    // useEffect(()=>{
    //     dispatch(setCategory(categoryName))
    // },[])
     

        if(itemsState.items!=null){
            return (
                <div className="flex flex-wrap gap-10 mt-28">
                   {itemsState.items.map((item,index)=>{
                       return(<Card item={item} key={index}/>)
                   })}
                 </div>
               
              )
     
        }
        else{
            return(
                <h1>Hello We are Loading</h1>
            )
        }
      
     
 
}
