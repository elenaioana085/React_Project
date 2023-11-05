import React, {useState} from 'react';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/home';
import Packages from './components/Pages/Packages/packages';
import Contact from './components/Pages/Contact/contact';
import User from './components/Pages/User/user';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';


function App() {
  const [searchDetails, setSearchDetails] = useState()
  
  const handleChangeSearchDetails = (fieldChange) => {
    setSearchDetails(fieldChange)
  }
  
  return (
    <>
    <Navbar></Navbar>
    <Routes>
          
          <Route path="/packages" element={<Packages searchDetails={searchDetails} />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/" element={<Home onChangeSearch={handleChangeSearchDetails}/>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
