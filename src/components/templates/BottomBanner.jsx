import React from 'react'
import bubble from '/icons/speech-bubble.svg'
import playstore from '/playstore.png'
import applestore from '/applestore.png'
import mobile from '/props/mob.png'
import arrow1 from '/props/arrow1.png'
import arrow2 from '/props/arrow2.png'
import card from '/props/card.png'
import sub from '/props/sub.png'

const BottomBanner = () => {
  return (
    <section className='md:px-28 px-3 flex md:flex-row flex-col-reverse border-t border-gray-300 py-24'>
      <div className='md:w-1/2'>
      <div className='space-y-8'>
        <h2 className='md:text-[36px] text-[25px] font-DM_Sans font-bold text-[#3A643B] max-w-[530px]'>Download Amrutam Ayurveda App Now</h2>
        <p className='max-w-[474px] font-DM_Sans md:text-[20px] text-[#676767 leading-tight] opacity-80'>The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! Apart from mimicking the website, the app has added benefits</p>
      <div className='grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-3 md:w-[480px] px-3'>
        
        
        <div className='flex items-center  md:w-[220px]  w-full  max-h-[81px] h-[81px] border-[#DCD8CD] border rounded-[16px] md:justify-center gap-x-4 p-6 '>
          <span className='max-w-[40px] max-h-[40px] w-[80px] h-[80px] relative rounded-full border-[#3A643B] border'>
            <img src={bubble} alt="" className='p-2 absolute w-[95%] h-[95%] ' />
          </span>
          <p className='max-w-[144px]  leading-5 text-[#3A643B] font-DM_Sans '>
            Access to Prescriptions
          </p>
        </div>
        <div className='flex items-center  md:w-[220px]  w-full  max-h-[81px] h-[81px] border-[#DCD8CD] border rounded-[16px] md:justify-center gap-x-4 p-6 '>
          <span className='max-w-[40px] max-h-[40px] w-[80px] h-[80px] relative rounded-full border-[#3A643B] border'>
            <img src={bubble} alt="" className='p-2 absolute w-[95%] h-[95%] ' />
          </span>
          <p className='max-w-[144px]  leading-5 text-[#3A643B] font-DM_Sans '>
            Track health efficiently
          </p>
        </div>
        <div className='flex items-center  md:w-[220px]  w-full  max-h-[81px] h-[81px] border-[#DCD8CD] border rounded-[16px] md:justify-center gap-x-4 p-6 '>
          <span className='max-w-[40px] max-h-[40px] w-[80px] h-[80px] relative rounded-full border-[#3A643B] border'>
            <img src={bubble} alt="" className='p-2 absolute w-[95%] h-[95%] ' />
          </span>
          <p className='max-w-[144px]  leading-5 text-[#3A643B] font-DM_Sans '>
            Direct Chat with Doctors
          </p>
        </div>
        <div className='flex items-center  md:w-[220px]  w-full  max-h-[81px] h-[81px] border-[#DCD8CD] border rounded-[16px] md:justify-center gap-x-4 p-4 '>
          <span className='max-w-[40px] max-h-[40px] md:ml-0 ml-1.5 w-[80px] h-[80px] relative rounded-full border-[#3A643B] border'>
            <img src={bubble} alt="" className='p-2  absolute w-[95%] h-[95%] ' />
          </span>
          <p className='w-[145px] md:px-0   leading-5 text-[#3A643B] font-DM_Sans '>
            In-app reminders for consultations
          </p>
        </div>
        
      </div>
      <div className='flex md:flex-row md:justify-start justify-center  gap-2'>
        <img src={playstore} alt="" className='md:w-[242px] w-[180px]  md:h-[72px] h-[60px]' />
        <img src={applestore} alt="" className='md:w-[242px] w-[180px]  md:h-[72px] h-[60px]' />
      </div>
      </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center relative md:h-[550px] h-[400px] ">
  <div className="relative w-[300px] md:w-[350px] ">
    {/* Mobile mockup */}
    <img src={mobile} alt="" className="absolute md:-right-[200px] md:-top-[300px] -right-[20px] bottom-[10px] md:w-[290px] md:h-[360px] w-[180px]" />

    {/* Arrow 1 - top left pointing to engagement card */}
    <img
      src={arrow1}
      alt=""
      className="absolute md:left-[190px] md:-top-[220px] bottom-[140px] left-[100px] w-[40px] md:w-[80px]"
    />

    {/* Engagement card */}
    <img
      src={card}
      alt=""
      className="absolute md:left-[10px] md:bottom-0 bottom-[50px] w-[110px] md:w-[200px]"
    />

    {/* Arrow 2 - bottom right pointing to downloads card */}
    <img
      src={arrow2}
      alt=""
      className="absolute md:-right-[20%] md:top-[80px] right-[70px] w-[30px] md:w-[60px]"
    />

    {/* Downloads card */}
    <div className="absolute md:left-[45%] md:top-[140px] left-20 top-8 md:w-[170px] md:h-[155px] w-[110px] h-[100px] border border-[#3a643b4e] rounded-lg bg-[#3a643b3e] flex flex-col items-center justify-center">
      <img src={sub} alt="" className="md:w-fit md:h-fit w-[60px]   " />
      <div className="text-center">
        <p className="font-DM_Sans text-[16px] md:text-[18px] text-[#3A643B]">10K+</p>
        <p className="font-DM_Sans font-bold md:text-[14px] text-[12px] text-[#3A643B]">
          Downloads
        </p>
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

export default BottomBanner