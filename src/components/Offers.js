import React,{useState} from 'react'

export default function Offers() {
    const images=['https://thumbs.dreamstime.com/z/shoe-shopping-sale-banner-panorama-shoes-winter-boots-store-shelves-sale-sign-background-autumn-bags-shoe-194152534.jpg',
    "https://image.shutterstock.com/shutterstock/photos/1038849250/display_1500/stock-photo-portrait-of-an-excited-beautiful-girl-wearing-dress-and-sunglasses-holding-shopping-bags-isolated-1038849250.jpg" ,
    "https://thumbs.dreamstime.com/z/happy-beautiful-young-woman-blue-dress-hand-holding-shopping-bags-looking-light-banner-background-copy-space-169293855.jpg"]
    const [count,setCount]=useState(0);
    console.log(count);
  return (
    <div className="overflow-hidden relative min-w-full flex top-12 h-[30rem]">
    {/* <img src="https://robohash.org/1" className=""/>
      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--sqXFkEvv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1920px-Unofficial_JavaScript_logo_2.svg.png" className="w-full"/> */}
      <img src={`${images[Math.abs(count%(images.length))]}`}  className="min-w-full"/>
      
      <button className="text-6xl absolute left-last top-40 bg-white h-20 z-10"
      onClick={()=>{
          setCount(count+1);
      }}>></button>
      <button className="text-6xl absolute top-40  bg-white h-20 "
       onClick={()=>{
        setCount(count-1);
       
    }}>{"<"}</button>
    </div>
  )
}
