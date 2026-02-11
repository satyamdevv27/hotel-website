import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Rooms from "./pages/Rooms";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="rooms" element={<Rooms/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
