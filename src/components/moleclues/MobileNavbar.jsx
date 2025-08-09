import React from 'react'
import hamburger from '/mobile/menu.svg'
import mobilepurse from '/mobile/purse.svg'
import amurtamName from "/logo/Amurtam Name.png";
import cart from '/mobile/cart.svg'

const MobileNavbar = ({ handleOpen }) => {
  return (
    <nav className="md:hidden py-3.5 flex justify-between  px-3">
      <img
        src={hamburger}
        className="w-[24px] h-[24px]"
        alt="menu"
        onClick={handleOpen} // <-- Toggle menu
      />
      <div className="flex items-center gap-x-4">
        <img src={amurtamName} className="w-[140px] h-[28px]" alt="logo" />
        <div className="flex gap-x-3 items-center">
          <img src={mobilepurse} className="w-[14px] h-[14px]" alt="purse" />
          <img src={cart} className="w-[14px] h-[14px]" alt="cart" />
          <button className="bg-[#3A643C] text-white w-[50px] h-[20px] rounded-[9.5px] font-DM_Sans text-[10px]">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
