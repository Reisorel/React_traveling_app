import React, { useState } from "react";
import "./Navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { PiDotsNine } from "react-icons/pi";
import { Link } from "react-router-dom"; // Import du composant Link
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex" onClick={removeNav}>
            <h1>
              <MdOutlineTravelExplore className="icon" />
              BreizhTravel.
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink" onClick={removeNav}>
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link to="/packages" className="navLink" onClick={removeNav}>
                Packages
              </Link>
            </li>

            <li className="navItem">
              <Link to="/boutique" className="navLink" onClick={removeNav}>
                Boutique
              </Link>
            </li>

            <li className="navItem">
              <Link to="/about" className="navLink" onClick={removeNav}>
                A Propos
              </Link>
            </li>

            <li className="navItem">
              <Link to="/pages" className="navLink" onClick={removeNav}>
                Pages
              </Link>
            </li>

            <li className="navItem">
              <Link to="/actualites" className="navLink" onClick={removeNav}>
                Acutalités
              </Link>
            </li>

            <li className="navItem">
              <ScrollLink
                to="footer"
                className="navLink"
                smooth={true}
                duration={500}
                onClick={removeNav}
              >
                Contact
              </ScrollLink>
            </li>

            <button className="btn" onClick={removeNav}>
              <Link to="/book">Réservez maintenant !</Link>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <IoCloseCircleSharp className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <PiDotsNine className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
