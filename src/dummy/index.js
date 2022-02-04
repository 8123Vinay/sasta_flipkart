import React from 'react';
import data from './data.json'

export function getCategories(){
  return(data.categories)
}

export function getSearchItems(input){
  return(
    data.items.filter((item)=>{
      return (item.title).toLowerCase().includes(input)
    })
  )
}


export function getItems(categoryName,range){
 
  if(!categoryName && !range){
    return (data.items.map((item)=>item))
  }

  else if(!range && categoryName){
    return (data.items.filter((item)=>{
      return(item.category===categoryName)
    }))
  }

  else if(categoryName==undefined && range){
     return(
       data.items.filter((item)=>{
         return(
           (parseInt(item.price)>=range.start && parseInt(item.price)<=range.end)
         )
       })
     )  
  }

  else{  
         return data.items.filter((item)=>{
           return( item.category===categoryName && parseInt(item.price)>=range.start && parseInt(item.price)<=range.end)
          
       })
      
    }
      

}


