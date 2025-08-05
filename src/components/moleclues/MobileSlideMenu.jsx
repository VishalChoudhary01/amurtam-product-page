import React from "react";
import { NavLink } from "react-router";
import { IoClose } from "react-icons/io5";
import mobilepurse from '/mobile/purse.svg';
import cart from '/mobile/cart.svg';
import { navMenu } from "../../constants/index";

const MobileSlideMenu = ({ isOpen, handleOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-amber-950/10 backdrop-blur-3xl bg-opacity-30 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOpen}
        aria-hidden="true"
      />

      {/* Sidebar menu */}
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-[#FFF7E2] z-50 shadow-xl transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-[#3A643C] font-DM_Sans">Menu</h2>
          <button 
            onClick={handleOpen}
            className="p-1 text-[#3A643C] hover:text-gray-700 transition-colors"
            aria-label="Close menu"
          >
            <IoClose className="text-2xl " />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col py-3">
          {navMenu.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={handleOpen}
              className={({ isActive }) => 
                `relative px-5 py-3 text-[#3A643C] font-DM_Sans text-base
                 transition-all duration-300 hover:bg-gray-50
                 ${isActive ? "font-medium" : ""}`
              }
            >
              {({ isActive }) => (
                <span className={`
                  relative inline-block py-1
                  before:content-[''] before:absolute before:left-0 before:bottom-0 
                  before:h-[2px] before:bg-[#3A643C] before:transition-all before:duration-300
                  ${isActive ? "before:w-full" : "before:w-0 hover:before:w-full"}
                `}>
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}

          
        </nav>

        {/* Additional mobile actions */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-100 bg-[#FFF7E2]">
          <div className="flex justify-between">
            <button className="flex flex-col items-center text-[#3A643C] font-DM_Sans text-sm">
              <div className="w-8 h-8 flex items-center justify-center bg-[#D2D9D2] rounded-full mb-1">
                <img src={mobilepurse} alt="Wallet" className="w-3 h-3" />
              </div>
              <span className="text-[12px]">Wallet</span>
            </button>
            
            <button className="flex flex-col items-center text-[#3A643C] font-DM_Sans text-sm">
              <div className="w-8 h-8 flex items-center justify-center bg-[#D2D9D2] rounded-full mb-1">
                <img src={cart} alt="Cart" className="w-3 h-3" />
              </div>
              <span className="text-[12px]">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSlideMenu;