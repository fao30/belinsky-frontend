import React from 'react'
import {Photos} from './Data'
// import {videos} from './Data'

const Cards = () => {
  return (
    
    // <div className=' w-full items-center py-12 -mt-20'>
        <div  className='w-full h-full  scroll-smooth scrollbar-hide '>
        {Photos.map((item)=>{
        const {image,title,desc} = item;
        return (
         <div id='hover' className="h-full w-[500px] md:w-[500px] bg-slate-400 relative group">
         <img
           src={image}
           alt=""
           className="absolute w-[500px] h-[50vh]  object-cover scroll-smooth"
         />
         <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-gradient-to-t from-[#363636] to-transparent ">
           <div className="">
             <h3 className="text-2xl font-semibold text-white ">
               {title}
             </h3>
             <p className="text-white drop-shadow-md">
              {desc}
             </p>
           </div>
         </div>
         </div>
      
        )

     }) 
   }
      
//    </div>
    
  )
}

export default Cards