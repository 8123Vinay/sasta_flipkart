import React,{useContext} from 'react'
import "../styles/Categories.css"
// now comes the important part
import { NavLink } from 'react-router-dom'
import {itemList} from '../App.js'
import "../styles/Categories.css"

export default function Categories() {
    const obj=useContext(itemList);
    const categories=obj.category

  return (
    <div className='category'>
       <h3 className="hello">Categories</h3>
       <ul className='categories'>
           {categories.map((x)=>{
               return(
                <li>
                  < NavLink to ={`/items/${x.name}`} >{x.name}</NavLink>
                </li>
               )
           })}
       </ul>

      {/* <ul>
          <li>
              <Link to ="/items/men's clothing" >men's clothing </Link>
          </li>
          <li>
            <Link to ="/items/women's clothing" >women's clothing</Link>
          </li>
          
          <li>
            < Link to ="/items/electronics" >electronics</Link>
          </li>
          <li>
            < Link to ="/items/jewelery" >jewelery</Link >
          </li>
      </ul> */}

    </div>
  )
}
