import React, { createContext ,useState} from 'react'
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import {Home,About,Items,Payment,Quotes} from './pages'
import  Navbar  from './components/Navbar'
import './App.css';
import Cart from './components/Cart'
import Filter from './components/Filter'

export const filterContext=createContext()




function App() {
  const [filter,setFilter]=useState(false)
  const [inputValue,setInputValue]=useState("");
  
  return (
    <div>

       <BrowserRouter >
          <Navbar setInputValue={setInputValue} filter={filter} setFilter={setFilter}/>
          <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/about" element={<About />} />
            <Route path ="/items" element={<Items />} />
            <Route path ="/items/:categoryName" element={<Items inputValue={inputValue} />} />
            <Route path ="/payment" element={<Payment />}/>
            {/* <Route path ="/quotes" element={<Quotes />}/> */}
          </Routes>
           <Cart />
          <Filter filter={filter} />
        </BrowserRouter>
       
        
       
    </div>

  );
}

export default App;
