import Footer from "./components/moleclues/Footer"
import Navbar from "./components/moleclues/Navbar"
import {Home,ConsumerShop} from './pages/index.js'
import { Routes,Route } from "react-router"

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF7E2]">
     
      <Navbar/>
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
