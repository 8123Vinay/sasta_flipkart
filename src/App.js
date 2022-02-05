import React, { createContext ,useState} from 'react'
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import {Home,About,Items,Payment,Quotes,News} from './pages'
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
            <Route path="/news" element={<News />} />
            <Route path ="/cart" element={<Cart />}/>
          </Routes>
          <Filter filter={filter} />
        </BrowserRouter>
       
        
       
    </div>

  );
}

export default App;
