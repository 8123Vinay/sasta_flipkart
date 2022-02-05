import React from 'react'
import {toggleNews} from '../store/news.js'
import {useSelector,useDispatch} from 'react-redux';
export default function News() {
  const{ newsState}=useSelector((s)=>s);
  const {isOpen}=newsState;
  const dispatch=useDispatch();
  console.log(isOpen)
  return (
    <div style={{
      display: isOpen ? "block" :'none'
    }}>
      <h1>This is the news about the app</h1>
      <h1>
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</h1>
< button className='text-white bg-orange-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 fixed right-2'
      onClick={()=>{
        dispatch(toggleNews(!isOpen))
      }}>Close</button>
    </div>
  )
}
