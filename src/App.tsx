import { useState,useCallback } from "react";
import {
 Routes,
 Route,
 useNavigate
} from "react-router-dom";

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Shop from './pages/shop';
import Contact from './pages/contact';
import Bookings from './pages/bookings';
import AboutUs from './pages/aboutus';
import Blog from './pages/blog';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Cart from './pages/cart/cart';
import {ServicePricingData } from "./interfaces/ui_interface";




function App() {
  const [addToCart,setAddToCart] = useState<ServicePricingData[]>([]);
  const navigation = useNavigate();
  const handleCheckout =useCallback(()=>{
    navigation("/checkout");
  },[]);
  return (
    <>
      <main className='w-full h-[100vh] overflow-x-hidden bg-primaryDark/80 dark:bg-primaryDark' >
        <Navbar setAddToCart={setAddToCart} addToCart={addToCart} handleCheckout={handleCheckout}/>
            <Routes>
              <Route path="/" element={ <Home addToCart={addToCart}  setAddToCart={setAddToCart}/>}/>
              <Route path="contact" element={<Contact />} />
              <Route path="services"element={<Services />}/>
              <Route path='shop' element={<Shop  addToCart={addToCart} setAddToCart={setAddToCart}/>}/>
              <Route path='about-us' element={<AboutUs />}/>
              <Route path='contact' element={<Contact />}/>
              <Route path='blog' element={<Blog />}/>
              <Route path='bookings' element={<Bookings />}/>
              <Route path='gallery' element={<Gallery />}/>
              <Route path='checkout' element={<Cart addToCart={addToCart} setAddToCart={setAddToCart} />}/>
            </Routes>
        <Footer/>
      </main>
    </>
  )
}

export default App
