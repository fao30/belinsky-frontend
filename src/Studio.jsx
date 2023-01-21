import React from 'react'
import photo1 from "../src/assets/studio-9/assets/photo1.jpeg"
import photo2 from "../src/assets/studio-9/assets/photo2.jpeg"
import photo3 from "../src/assets/studio-9/assets/photo3.jpeg"
import photo4 from "../src/assets/studio-9/assets/photo4.jpeg"
import photo5 from "../src/assets/studio-9/assets/photo5.png"
import photo6 from "../src/assets/studio-9/assets/photo6.png"
import turah from "../src/pages/home/assets/contents/Turah.mp4"
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
    {
      image: photo6,
    },
  
  ];
  
const Studio = () => {
  return (
    <div className='w-full mt-24 '>
        <div className='w-full mx-auto px-2'>
        <div className='text-center '>
        <h1 className='text-[#022581] text-7xl  md:text-8xl font-extrabold '>
            Studio.1
        </h1>
        <h3 className='text-blue-900 text-2xl md:text-4xl font-extrabold '>3 Thematic Korean background + Makeup Room</h3>
        <div className='text-center py-2'>
        <p className='text-blue-900 text-xl md:text-3xl font-bold md:py-14 py-10'> <span className='md:mr-8'>
        Length: 8,2m  </span> <span className='md:mr-7'> <span className='md:mr-7'> |</span> Height: 3m
            </span> <span className='md:mr-7'>
              |</span> Width: 9,4m   </p>
        </div>
        </div>
        <div className='relative flex items-center'>
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
         {/* PRICELIST FIR */}
        {/* <div className='grid grid-cols-1 rounded-lg items-center py-8 lg:w-[800px] h-[400px] justify-center bg-zinc-100 divide-blue-900 divide-solid divide-y-2 divide-bold  border-solid border-2 border-blue-900 mt-11 relative  mb-32'>
      <div> <p className=' text-blue-900 text-xl text-center justify-items-start  '> Price List</p></div>  
      <div> <p className='text-center '> </p></div>  
        </div> */}
        <video autoPlay loop className='w-[1260px]  md:pl-48 mb-10 md:mb-36' src={turah} />
        <div className='text-center mx-auto md:mb-14 ' >
            <h2 className='md:text-6xl text-4xl text-blue-900 font-extrabold'> Photoshoot by our photographer </h2>
        </div>
    <div  className='w-full h-full md:pl-36 md:mr-4 object-center mb-10 ' >
        {Photos1.map((item) => (
            <img 
              className=' md:w-[393px] object-center item-center md:h-[697px] w-[400px] inline-block  p-4 md:p-4 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.image}
              alt='/'
            />
          ))}
        </div>
        {/* PRICELIST FIR */}
        {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 divide-y-2 border-solid pt-12 sm:pt-20 text-blue-900 mb-20 items-center'>
            <div className='bg-zinc-100 rounded-lg shadow-2xl w-[450px] h-[320px]'>
            <div className='p-8'>
                    <h3 className='font-bold text-2xl my-6 text-center'>Price List</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                </div>
                {/* <div className='p-8'>
      <h3 className='font-bold text-2xl my-6 text-center'>Price List</h3>
        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
         </div> */}
            {/* </div>
            <div className='bg-zinc-100 rounded-lg shadow-2xl w-[450px] h-[320px] '>
            <div className='p-8'>
                    <h3 className='font-bold text-2xl my-6 text-center'>Price List</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                </div>
            </div>
        </div> */} 
        <div className='text-center mb-20'>
            <div className='md:text-2xl text-xl text-blue-900 md:font-semibold font-bold '>
           <p className='mb-2'> Additional printed photo: Rp10.000  </p> 
           <p className='mb-2'>Soft copy all photo: Rp25.000/person </p>
           <p> or tag @belinsky.studio on IG story</p>
            </div>
        </div>
        </div>
        <CardReservation className="mb-10"/>
        </div>
  )
}

export default Studio


