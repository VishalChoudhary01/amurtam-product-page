import React from 'react'
import filledphone from "/icons/filledphone.svg";

const PromotionBar = () => {
  return (
    <div
        role="banner"
        className="w-full h-[70px] bg-[#373636] flex items-center justify-center relative "
      >
        <p className="text-[#D9D9D9] font-DM_Sans font-medium text-[20px]">
          Your first 5 minutes instant call is free.
        </p>
        <button className="bg-[#3A643B] absolute right-24 rounded-[16px] flex justify-center items-center gap-x-[10px] text-[#FFFFFF] font-DM_Sans font-bold text-[1rem] w-[355px] h-[51px] min-h-[80%]">
          <img src={filledphone} alt="phone icon" />
          <span>Try Instant Free call Now</span>{" "}
        </button>
      </div>
  )
}

export default PromotionBar