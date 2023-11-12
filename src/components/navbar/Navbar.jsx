import { useState } from "react";
import {
  BsCartFill,
  BsChatLeftDotsFill,
  BsFillAirplaneFill,
  BsFillGrid3X3GapFill,
  BsFillHouseFill,
  BsFillXCircleFill,
  BsGeoAltFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);
  const showNav = () => {
    setActive(!active);
  };
  
  
  return (
    <section className="navbarSection">
      <header className="header">
        <div className="logoDiv">
          <a href="#" className="logo flex"></a>
          <h1>
            <BsGeoAltFill className="iconNavbar" />
            TripFind
          </h1>
        </div>

        <div className={"navBar"}>
          <ul className="navList">
            <li className="navItem">
              <Link to="/" className="navLink">
                <BsFillHouseFill className="homeIcon" />
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/packages" className="navLink">
                <BsFillAirplaneFill className="packagesIcon" />
                Packages
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">
                <BsChatLeftDotsFill className="contactIcon" />
                Contact
              </Link>
            </li>
            <li className="navItem">
              <Link to="/user" className="navLink">
                <BsCartFill className="userIcon" />
                User
              </Link>
            </li>
          </ul>
          
          
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <BsFillGrid3X3GapFill className="icon" />
        </div>
      </header>
      <div className="navbarMobile">
            {active ? (
              <ul className="navListMobile">
                <li className="navItemMobile">
                  <Link to="/" className="navLink">
                    <BsFillHouseFill className="homeIcon" />
                    Home
                  </Link>
                </li>
                <li className="navItemMobile">
                  <Link to="/packages" className="navLink">
                    <BsFillAirplaneFill className="packagesIcon" />
                    Packages
                  </Link>
                </li>
                <li className="navItemMobile">
                  <Link to="/contact" className="navLink">
                    <BsChatLeftDotsFill className="contactIcon" />
                    Contact
                  </Link>
                </li>
                <li className="navItemMobile">
                  <Link to="/user" className="navLink">
                    <BsCartFill className="userIcon" />
                    User
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
    </section>
  );
}
export default Navbar;
