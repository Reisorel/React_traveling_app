import React, {useState} from "react";
import "./Navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { PiDotsNine } from "react-icons/pi";


const Navbar = () => {

  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const removeNav = () => {
    setActive('navBar')
  }


  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              BreizhTravel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNav}
          className="closeNavbar">
            <IoCloseCircleSharp className="icon" />
          </div>
        </div>

        <div onClick={showNav}
        className="toggleNavbar">
          <PiDotsNine className="icon"/>
        </div>

      </header>
    </section>
  );
};
export default Navbar;
