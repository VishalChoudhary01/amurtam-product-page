import React from 'react'
import topbanner from '/topbanner.png'
import search from '/icons/search.svg'
import basket from '/icons/basket.svg'

const TopBanner = () => {
  return (
    <section className='w-full md:h-[202px] h-[120px] relative'>
        <img src={topbanner} alt="" className='absolute md:object-cover w-full h-full' />
        <div className='absolute w-full h-full text-center flex justify-center items-center'>
            <div className='flex flex-col'>
            <h5 className='font-Poppins md:text-[36px] text-[18px] text-[#333448] font-semibold md:mb-11 mb-3.5'>Store</h5>
            <div className='flex items-center md:gap-3 gap-2'>
             <div className='md:w-[540px] relative md:h-[48px] w-[200px] h-[32px] bg-white md:rounded-[12px] rounded-[6px]'>
            <input type="text" placeholder='Search for Kuntal Care' className='absolute w-full h-full  md:-translate-x-64 -translate-x-30 outline-none md:pl-8 pl-14 placeholder:font-Nunito placeholder:text-neutral-900/80 text-neutral-900 placeholder:text-[10px] placeholder:md:text-[18px] '/>
            <img src={search} alt="" className='absolute md:top-3 md:left-3 top-2.5 left-2.5 md:w-fit md:h-fit w-[15px] h-[15px]' />
            </div> 
            <div className='md:w-[50px] md:h-[48px] w-[33px] h-[33px] rounded-[7px] bg-white flex justify-center items-center'>
                <img src={basket} alt="" className='md:w-fit md:h-fit w-[20px] h-[20px]' />
            </div>  
            </div>
            </div>
        </div>
        
    </section>
  )
}

export default TopBanner