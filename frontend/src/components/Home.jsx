import React from 'react'
import Navbar from './Navbar';
import Hero from './hero';
import RoomsPreview from './RoomsPreview';
import Amenities from './Amenities';
import About from './About';
import BookingCTA from './BookingCTA';
import Footer from './Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <RoomsPreview/>
      <Amenities/>
      <About/>
      <BookingCTA/>
      <Footer/>
    </div>
  )
}

export default Home;
