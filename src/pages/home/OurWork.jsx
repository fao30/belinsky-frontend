import React from 'react'
import Cards from './Cards'
import {Photos} from './Data'
import {videos} from './Data'
// Cards


const OurWork = () => {
  return (
    <div className='w-full my-14 mb-6  '>
        <div className='w-full mx-auto px-2 '>
            <div className='text-center'>
            <h1 className='text-slate-900/80  lg:text-6xl text-5xl font-bold   '>Our Work </h1> 
       <p className='text-blue-500/90 font-poppins lg:text-xl text-lg font-semibold my-2 '>Taking of to a sky, where creativity is limitless </p>
            </div >
       

            <div className='relative flex items-center -mt-5 py-6'>
                <div  id='slider'  className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide '>
                {videos.map((item) => (
            <video autoPlay loop
              className='w-[500px] inline-block p-2 cursor-pointer hover:scale-110 ease-in-out duration-300'
              src={item.video}
              alt='/'
            />
          ))}
                  </div>  
                  
            </div>

            <div className='relative flex items-center -mt-5 py-6'>
                <div  id='slider'  className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide '>
                {Photos.map((item) => (
            <img 
              className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.image}
              alt='/'
            />
          ))}
                  </div>  
                  
            </div>



            {/* <div className='flex items-center py-12 -mt-20'>
                <div  id='slider'  className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide '>
                <Cards className="inline-block p-5"  />
                  </div>  
                  
            </div> */}
        </div>
    </div>
  )
}

export default OurWork