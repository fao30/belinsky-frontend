import React from 'react'
import photo1 from "../src/assets/studio-10/assets/photo1.jpeg"
import photo2 from "../src/assets/studio-10/assets/photo2.jpeg"
import photo3 from "../src/assets/studio-10/assets/photo3.jpeg"
import photo4 from "../src/assets/studio-10/assets/photo4.jpeg"
import photo5 from "../src/assets/studio-10/assets/photo5.jpeg"
import model1 from "../src/pages/home/assets/contents/model1.png"
import model2 from "../src/pages/home/assets/contents/model2.png"
import model3 from "../src/pages/home/assets/contents/model3.png"
import model4 from "../src/pages/home/assets/contents/model4.png"
import model5 from "../src/pages/home/assets/contents/model5.png"
import CardReservation from './CardReservation'

//photos
export const Photos = [
    {
      image: photo1,
    },
    {
      image: photo2,
    },
    {
      image: photo3,
    },
   
  ];

  export const Photos1 = [
    {
      image: photo4,
    },
    {
      image: photo5,
    },
  ];

  export const model = [
    {
      image: model1,
    },
    {
      image: model2,
    },
    {
      image: model3,
    },
    {
      image: model4,
      },
      {
        image: model5,
      },
   
  ];
  
const Studio = () => {
  return (
    <div className='w-full mt-24 '>
        <div className='w-full mx-auto px-2'>
        <div className='text-center '>
        <h1 className='text-[#022581] text-7xl  md:text-8xl font-extrabold '>
            Studio.2
        </h1>
        <div className='text-center py-2'>
        <p className='text-blue-900 text-2xl md:text-3xl font-bold md:py-14 py-10'> <span className='md:mr-2'>
        Area   </span> <span className='md:mr-1'> <span className='md:mr-0'> 3.6</span> x
            </span> <span className='md:mr-1'>
              </span> 5.5m² </p>
        </div>
        </div>
        <div className='relative flex items-center mb-20' >
        <div id='slider'  className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth   scrollbar-hide lg:-my-0 -my-11' >
        {Photos.map((item) => (
            <img 
              className=' md:w-[780px]  md:h-[1030px]  w-[400px] inline-block  p-2 md:p-9 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.image}
              alt='/'
            />
          ))}
        </div>
        </div>
        <div className='relative flex items-center mb-20 py-48' >
        <div id='slider'  className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth   scrollbar-hide lg:-my-0 -my-11' >
        {model.map((item) => (
            <img 
              className=' md:w-[670px]  md:h-[850px]  w-[400px] inline-block  p-2 md:p-7 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.image}
              alt='/'
            />
          ))}
        </div>
        </div>
        {/* PRICELIST fir */}

        <div className='text-center'>
            <h2 className='text-6xl font-extrabold text-blue-900 mb-10'> Self Studio</h2>
        </div>
          <div  className='w-full h-full  md:mr-4 object-center mb-10 md:pl-40' >
        {Photos1.map((item) => (
            <img 
              className=' md:w-[560px] object-center item-center md:h-[900px] w-[400px] inline-block  p-3 md:p-8 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.image}
              alt='/'
            />
          ))}
        </div>
         {/* PRICELIST FIR */}
        {/* <div className='grid grid-cols-1 rounded-lg items-center py-8 lg:w-[800px] h-[400px] justify-center bg-zinc-100 divide-blue-900 divide-solid divide-y-2 divide-bold  border-solid border-2 border-blue-900 mt-11 relative  mb-32'>
      <div> <p className=' text-blue-900 text-xl text-center justify-items-start  '> Price List</p></div>  
      <div> <p className='text-center '> </p></div>  
        </div> */}
        
    {/* <div  className='w-full h-full md:pl-36 md:mr-4 object-center mb-10 ' >
        {Photos1.map((item) => (
            <img 
              className=' md:w-[393px] object-center item-center md:h-[697px] w-[400px] inline-block  p-4 md:p-4 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.image}
              alt='/'
            />
          ))}
        </div> */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 divide-y-2 border-solid pt-12 sm:pt-20 text-blue-900 mb-20 items-center'>
            <div className='bg-zinc-100 rounded-lg shadow-2xl '>
            <div className='p-8'>
                    <h3 className='font-bold text-2xl my-6 text-center'>Price List</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                </div>
            </div>
            <div className='bg-zinc-100 rounded-lg shadow-2xl '>
            <div className='p-8'>
                    <h3 className='font-bold text-2xl my-6 text-center'>Price List</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                </div>
            </div>
        </div>
        </div>
        <CardReservation/>
        </div>
  )
}

export default Studio