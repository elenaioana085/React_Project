import React from 'react';
import './app.css';
import Home from './components/Pages/Home/home';
import { Route, Routes } from 'react-router-dom';
import Packages from './components/Pages/Packages/packages';
import Contact from './components/Pages/Contact/contact';
import User from './components/Pages/User/user';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';


function App() {
  
  
  return (
    <>
    <Navbar></Navbar>
    <Routes>
          
          <Route path="/packages" element={<Packages/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/" element={<Home/>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
