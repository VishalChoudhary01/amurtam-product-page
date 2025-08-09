import { useState, useEffect, useRef } from "react";
import Button from "../atoms/Button";

const AyurvedicExperts = ({ specialists }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Auto-scroll interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % specialists.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [specialists.length]);

  // Scroll to active card
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeCard = scrollContainerRef.current.children[activeIndex];
      if (activeCard) {
        scrollContainerRef.current.scrollTo({
          left: activeCard.offsetLeft - 
                (scrollContainerRef.current.offsetWidth / 2) + 
                (activeCard.offsetWidth / 2),
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="py-[3rem] flex flex-col items-center md:space-y-[4rem]">
      {/* Heading - Desktop/Tablet */}
      <div className="lg:w-[50.375rem] md:w-[40rem] w-[25rem] md:flex hidden flex-col items-center lg:space-y-0 md:space-y-3 space-y-2 md:px-0 px-[1.5rem] lg:text-[3rem] md:text-[2.2rem] text-center text-[2rem] capitalize text-[#3A643B] font-Inter font-bold">
        <div className="w-full relative font-Nunito flex flex-col items-center">
          <p>Meet our Ayurveda experts</p>
          <hr className="-z-10 absolute lg:w-[110%] w-full md:block hidden lg:bottom-[0.7rem] md:bottom-[0.2rem] border-[3px] border-[#C3D0C4]" />
        </div>
      </div>

      {/* Desktop/Tablet View */}
      <div className="w-full md:flex hidden items-center lg:gap-x-[5rem] md:gap-x-[1rem] my-[3rem]">
        {/* Left arrow */}
        <button className="relative w-[4.5rem] px-[2.2rem] py-[1rem] h-[4.375rem] border border-[#A5A5A5] rounded-full flex justify-center items-center hover:bg-[#3a643b22]">
          <img className="absolute w-[50%] h-[50%]" src="/icons/ArrowLeft.svg" alt="Previous" />
        </button>
        
        {/* Specialist Cards */}
        {specialists.slice(0, 3).map((specialist, index) => (
          <div key={index} className="lg:w-[18.438rem] lg:h-[27.875rem] md:w-[15rem] md:h-[24rem] relative overflow-hidden bg-[#FFF7E2] flex flex-col rounded-[2rem] justify-center shadow-lg items-center">
            <div className="font-Nunito flex flex-col gap-y-[1rem] justify-center items-center text-center pb-[4rem]">
              {/* Profile Image */}
              <div className="relative lg:w-[9.313rem] lg:h-[9.313rem] md:w-[8.5rem] md:h-[8.5rem] rounded-full">
                <img 
                  className="absolute w-full h-full object-cover" 
                  src={specialist.profileImage} 
                  alt={specialist.name} 
                />
                {/* Rating */}
                <div className="lg:w-[4.375rem] lg:h-[1.875rem] md:w-[3.5rem] md:h-[1.5rem] rounded-full left-[2.8rem] bottom-0 gap-x-1 absolute text-white bg-gradient-to-b to-[#0b0b0bbf] from-[#0B0B0B] flex justify-center items-center">
                  <p>{specialist.rating}</p>
                  <img src="/icons/bright-yellow-star.svg" alt="Star" />
                </div>
              </div>
              
              {/* Specialist Info */}
              <div>
                <p className="font-bold text-[#2E2F2E] lg:text-[1.25rem] md:text-[1.1rem]">
                  {specialist.name}
                </p>
                <div className="lg:px-[1.2rem] px-[1rem] flex flex-col items-center tracking-wide md:space-y-2 space-y-1">
                  <p className="text-[#646665] whitespace-nowrap">
                    {specialist.qualification}
                  </p>
                  <div className="lg:gap-x-[0.6rem] gap-x-[0.5rem] flex items-center">
                    <img className="lg:w-[1.2rem] lg:h-[1.2rem] w-[1rem] h-[1rem]" src="/icons/graduate.svg" alt="Experience" />
                    <p className="text-[#0C0C0C] font-semibold">
                      {specialist.experience}
                    </p>
                  </div>
                  <div className="lg:gap-x-[0.6rem] gap-x-[0.5rem] lg:w-[9.563rem] lg:h-[1.875rem] rounded-full flex justify-center items-center bg-[#3a643b22]">
                    <img className="lg:w-[1rem] lg:h-[1rem]" src="/icons/pin.svg" alt="Specialty" />
                    <p className="text-[#646665]">{specialist.specialty}</p>
                  </div>
                </div>
              </div>
            </div>
            <Button 
              buttonText="Book a session"
              buttonStyle="w-full absolute bottom-0 h-[4.063rem] text-[1.1rem] font-semibold bg-[#3A643B] text-white hover:scale-105 transition-all"
            />
          </div>
        ))}
        
        {/* Right arrow */}
        <button className="relative w-[4.5rem] px-[2.2rem] py-[1rem] h-[4.375rem] border border-[#A5A5A5] rounded-full flex justify-center items-center hover:bg-[#3a643b22]">
          <img className="absolute w-[50%] h-[50%]" src="/icons/ArrowRight.svg" alt="Next" />
        </button>
      </div>
      
      {/* Mobile View */}
      <div className="w-full md:hidden relative mb-[5rem]">
        <div className="overflow-hidden w-full mt-[4rem]">
          <div 
            className="flex overflow-x-auto gap-x-[2rem] whitespace-nowrap scrollbar-hide"
            ref={scrollContainerRef}
          >
            {specialists.map((specialist, index) => (
              <div 
                key={index}
                className="shrink-0 mx-[2rem] w-[19.625rem] h-[27.875rem] relative overflow-hidden bg-[#FFF7E2] flex flex-col rounded-[2rem] justify-center shadow-lg items-center"
              >
                <div className="font-Nunito flex flex-col gap-y-[0.5rem] justify-center items-center text-center pb-[4rem]">
                  <div className="relative w-[9.375rem] h-[9.375rem] rounded-full">
                    <img 
                      className="absolute w-full h-full object-cover" 
                      src={specialist.profileImage} 
                      alt={specialist.name} 
                    />
                    <div className="w-[4.2rem] h-[1.8rem] rounded-full left-[2.7rem] bottom-0 gap-x-1 absolute text-white bg-gradient-to-b to-[#0b0b0bbf] from-[#0B0B0B] flex justify-center items-center">
                      <p>{specialist.rating}</p>
                      <img src="/icons/bright-yellow-star.svg" alt="Star" />
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-bold text-[#1d1e1d] text-[1.25rem]">
                      {specialist.name}
                    </p>
                    <div className="px-[1rem] flex flex-col items-center space-y-[0.8rem]">
                      <p className="text-[#646665] text-[0.938rem]">
                        {specialist.qualification}
                      </p>
                      <div className="gap-x-[0.2rem] flex items-center">
                        <img className="w-[1.3rem] h-[1.3rem]" src="/icons/graduate.svg" alt="Experience" />
                        <p className="text-[#0C0C0C] font-semibold text-[1rem]">
                          {specialist.experience}
                        </p>
                      </div>
                      <div className="gap-x-[0.2rem] w-[9.563rem] h-[1.875rem] rounded-full flex justify-center items-center bg-[#3a643b1c]">
                        <img className="w-[1.2rem] h-[1.2rem]" src="/icons/pin.svg" alt="Specialty" />
                        <p className="text-[#646665] font-semibold text-[1rem]">
                          {specialist.specialty}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button 
                  buttonText="Book a session"
                  buttonStyle="w-full absolute bottom-0 h-[4.063rem] text-[1.25rem] font-semibold bg-[#3A643B] text-white hover:scale-105 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-[-3rem] w-full flex gap-x-[1rem] justify-center">
          {specialists.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-[0.75rem] h-[0.75rem] rounded-full ${
                activeIndex === index 
                  ? "bg-[#3A643B] shadow-lg" 
                  : "bg-[#C3C3C3]"
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Find More Button */}
      <Button 
        buttonText="Find more experts >"
        buttonStyle="w-[17.25rem] md:block hidden h-[5.125rem] text-[1.5rem] font-medium border border-[#3A643B] text-[#3A643B] bg-[#DBE3DC] rounded-[0.438rem] hover:bg-[#3a643b22]"
      />
    </div>
  );
};

export default AyurvedicExperts;