import React from "react";
import { NavLink, Link } from "react-router";
import phone from "/icons/phone.svg";
import amurtamName from "/logo/Amurtam Name.png";
import purse from "/icons/purse.svg";
import cart from "/icons/cart.svg";
import notification from "/icons/notification.svg";
import menu from "/icons/menu.svg";
import downArrow from "/icons/downArrow.svg";
import { navMenu } from "../../constants/index";
import PromotionBar from "./PromotionBar";
import MobileNavbar from "./MobileNavbar";



const Navbar = ({isOpen,handleOpen}) => {
  return (
    <header >
    <PromotionBar/>
      <nav className="lg:h-[150px] md:flex hidden relative w-full  px-3 py-[15px] flex-col place-content-between items-center  overflow-hidden">
        {/* number */}
        <div className="flex absolute items-center gap-x-2 left-3.5 top-[10%] ">
          <img src={phone} />
          <h6 className="font-DM_Sans text-[20px] text-[#3A643C]">
            <Link to={"tel:+919826352321"}>+91 9826352321</Link>
          </h6>
        </div>
        {/* logo */}
        <div className="flex w-full justify-center   ">
          <img
            src={amurtamName}
            className="md:w-[220px] md:h-[45px]"
            alt="Amurtam Logo"
          />
        </div>

        {/* bottom menu */}
        <div className="self-end flex items-center gap-x-[60px] pr-[80px]">
          <div className="flex gap-x-[55px] font-DM_Sans font-semibold text-[#3A643B] text-[20px]">
            {navMenu.map((navItem)=>(
              <NavLink
              to={navItem.href}
              className={({ isActive }) =>
                `relative  before:content-[''] before:absolute before:left-0 before:-bottom-1.5 before:h-[2px] text-nowrap before:bg-[#3A643B] before:transition-all before:duration-500 ${
                  isActive ? "before:w-full" : "before:w-0 hover:before:w-full"
                }`
              }
            >
              {navItem.label}
            </NavLink>
            ))}
          </div>
          {/* Purse */}

          <div className="flex gap-x-5 ">
            <div className="w-[36px] h-[36px] relative flex justify-center items-center bg-[#D2D9D2] rounded-full ">
              <img src={purse} alt="purse" />
              <div className="absolute bottom-7 -right-2.5 w-[24px] h-[24px] flex justify-center shadow-md items-center rounded-full bg-[#3A643C]">
                <p className="font-Poppins text-[10px] text-white">
                  <span>₹</span> 2
                </p>
              </div>
            </div>
            {/* cart */}
            <div className="w-[36px] group h-[36px] cursor-pointer relative flex justify-center items-center bg-[#D2D9D2] rounded-full ">
              <img
                src={cart}
                alt="cart icon"
                role="button"
                aria-label="Cart with 1 item"
                className="group-hover:scale-1 transition-all"
              />
              <div className="absolute bottom-7 -right-2.5 w-[24px] h-[24px] flex justify-center shadow-md items-center rounded-full bg-[#3A643C]">
                <p className="font-Poppins text-[10px] text-white">1</p>
              </div>
            </div>
            {/* notification */}
            <div className="w-[36px] h-[36px] relative flex justify-center items-center bg-[#D2D9D2] rounded-full ">
              <img src={notification} alt="" />
            </div>
            {/* menu */}
            <div className="w-[36px] h-[36px] relative flex justify-center items-center bg-[#D2D9D2] rounded-full ">
              <img src={menu} alt="" />
            </div>

            <img src={downArrow} alt="" />
          </div>
        </div>
      </nav>

      {/* MOBILE Navbar */}
      <MobileNavbar isOpen={isOpen} handleOpen={handleOpen}/>
      
    </header>
  );
};

export default Navbar;
