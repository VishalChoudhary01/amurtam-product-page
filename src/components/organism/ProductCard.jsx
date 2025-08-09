// ProductCard.jsx
import React from 'react'
import dot from '/products/Ellipse.svg'
import { HiStar } from "react-icons/hi2";
import { motion } from 'framer-motion'; 

const ProductCard = ({ image, alt, productName, price, quantity }) => {
  return (
    <div className=' flex flex-col justify-between md:min-h-[532px] md:w-[356.22px] w-[220px]'>
      {/* Image container with responsive height control */}
      <div className='overflow-hidden rounded-lg cursor-pointer aspect-[361/430] md:h-[430px] md:w-[356.22px] w-[220px]'>
        <motion.img
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={image}
          alt={alt}
          loading='lazy'
          className='w-full h-full object-cover'
        />
      </div>
      {/* Description */}
      <div className='flex justify-between items-end mt-1 md:mt-0'>
        <span className='w-[95%] text-center flex flex-col items-center'>
          <h4 className='font-Poppins md:text-[16.3px] text-[12px] font-medium text-neutral-900 line-clamp-1'>{productName}</h4>
          <p className='flex items-center gap-x-1 font-Poppins text-neutral-900/90 md:text-[15px] text-[12px]'>
            <span className=''>{price}</span>
            <img src={dot} alt="" className='h-1 w-1' />
            <span>{quantity}</span>
          </p>
          <div className="text-yellow-400 text-[14px] flex gap-x-1 items-center">
            <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
            <span className='text-neutral-900 font-Poppins md:text-[15px] text-[12px]'>(52)</span>
          </div>
        </span>
        <button className='bg-[#3A643B] text-[#FFF7E2] md:w-[28px] md:h-[28px] w-[20px] h-[20px] rounded-[5px] md:text-xl text-lg flex justify-center items-center'>+</button>
      </div>
    </div>
  )
}

export default ProductCard