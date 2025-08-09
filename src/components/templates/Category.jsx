import React from 'react'
import gridcat from '/icons/grid.svg';
import hair from '/icons/Hair.svg';
import skin from '/icons/skin.svg'
import digestion from '/icons/digestion.svg'
import bones from '/icons/bones.svg'
import Medical from '/icons/Medical.svg'
import virus from '/icons/Virus.svg'
import arrow from '/icons/arrow.svg'
import { FaChevronRight } from "react-icons/fa6";

const Category = () => {


  return (
    <section className='flex w-full justify-center items-center md:gap-[40px] gap-x-[12px] flex-wrap md:py-12 py-5'>
        <div className='md:w-[84px] md:h-[101px] text-center'>
            <div className={`md:border-[10px] border-[5px] border-white bg-[#E0E8E2] md:w-[78px] md:h-[78px] w-[40px] h-[40px]  flex justify-center items-center rounded-full `} >
                <img src={gridcat} alt="" className='md:w-fit md:h-fit w-[20px]' />
            </div>
            <h6 className='text-[#2E2F2E] font-Poppins md:text-[18px] text-[12px] '>All</h6>
        </div>
        <div className='md:w-[84px] md:h-[101px] flex justify-center flex-col items-center md:mt-2 mt-0.5'>
                <img src={hair} alt="" className='md:w-[72px] md:h-[72px] w-[40px] h-[40px]' />
            <h6 className='text-[#2E2F2E] font-Poppins md:text-[18px] text-[12px]'>Hair</h6>
        </div>
        <div className='md:w-[84px] md:h-[101px] text-center md:block flex flex-col items-center'>
            <div className={`md:border-[10px] border-[5px] border-white bg-[#E0E8E2] md:w-[78px] md:h-[78px] w-[40px] h-[40px]  flex justify-center items-center rounded-full `} >
                <img src={skin} alt="" className='md:w-fit md:h-fit w-[20px]' />
            </div>
            <h6 className='text-[#2E2F2E] font-Poppins md:text-[18px] text-[12px]'>Skin</h6>
        </div>
        <div className='md:w-[84px] md:h-[101px] text-center md:block flex flex-col items-center'>
            <div className={`md:border-[10px] border-[5px] border-white bg-[#E0E8E2] md:w-[78px] md:h-[78px] w-[40px] h-[40px]  flex justify-center items-center rounded-full `} >
                <img src={digestion} alt="" className='md:w-fit md:h-fit w-[20px]' />
            </div>
            <h6 className='text-[#2E2F2E] font-Poppins md:text-[18px] text-[12px]'>Digestion</h6>
        </div>
        <div className='md:w-[84px] md:h-[101px] text-center md:block flex flex-col items-center'>
            <div className={`md:border-[10px] border-[5px] border-white bg-[#E0E8E2] md:w-[78px] md:h-[78px] w-[40px] h-[40px]  flex justify-center items-center rounded-full `} >
                <img src={bones} alt="" className='md:w-fit md:h-fit w-[20px]' />
            </div>
            <h6 className='text-[#2E2F2E] font-Poppins md:text-[18px] text-[12px]'>Bones</h6>
        </div>
        
        <div className='md:w-[84px] md:h-[101px] text-center md:block flex flex-col items-center'>
            <div className={`md:border-[10px] border-[5px] border-white bg-[#E0E8E2] relative md:w-[78px] md:h-[78px] w-[40px] h-[40px]  flex justify-center items-center rounded-full  `} >
                <img src={Medical} alt="" className='relative md:top-2 md:left-1 top-1  md:w-fit md:h-fit w-[25px]'/>
                <img src={virus} alt="" className='absolute md:bottom-2.5 md:left-4.5 bottom-1 left-2 md:w-[12px] md:h-[10px] w-[8px] h-[8px]' />
            </div>
            <h6 className='text-[#2E2F2E] font-Poppins md:text-[18px] text-[12px]'>Immunity</h6>
        </div>
        {/* <div className='w-[84px] h-[101px] text-center'>
            <div className={`border-[10px] border-white relative bg-[#E0E8E2] w-[78px] h-[78px]  flex justify-center items-center rounded-full `} >
            <img src={arrow} alt="" />
            </div>
            <h6 className='text-[#2E2F2E] font-Poppins text-[18px]'>More</h6>
        </div> */}
        <div className='md:w-[84px] md:h-[101px] text-center md:block flex flex-col items-center'>
            <div className={`md:border-[10px] border-[5px] border-white bg-[#E0E8E2] md:w-[78px] md:h-[78px] w-[40px] h-[40px]  flex justify-center items-center rounded-full `} >
                <img src={arrow} alt="" className='md:w-fit md:h-fit w-[8px]' />
            </div>
            <h6 className='text-[#2E2F2E] font-Poppins md:text-[18px] text-[12px]'>More</h6>
        </div>
    </section>
  )
}

export default Category