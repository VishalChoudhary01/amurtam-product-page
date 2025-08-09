import { useState } from "react"
import Footer from "./components/moleclues/Footer"
import Navbar from "./components/moleclues/Navbar"
import {Home,ConsumerShop} from './pages/index.js'
import { Routes,Route } from "react-router"
import MobileSlideMenu from "./components/moleclues/MobileSlideMenu.jsx"

function App() {

  const [isOpen,setIsOpen]=useState(false)

  const handleOpen=()=>{
    setIsOpen((prev)=>!prev)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF7E2] ">
     
      <Navbar isOpen={isOpen} handleOpen={handleOpen}/>
      <MobileSlideMenu isOpen={isOpen} handleOpen={handleOpen} />

      <main className="grow">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<ConsumerShop/>} />
          </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
