import React, {useEffect} from "react";
import "./Home.css";
import { GrLocation } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
// Animation
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  const video1 = "https://res.cloudinary.com/dqrq4ullu/video/upload/v1727705926/travel_agency_react/videos/green_water.mp4"

  useEffect(()=>{
    Aos.init({duration:1000})
  }, [])

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video1} muted autoPlay loop type="video/mp4"></video>

      <div className ="homeContent container">
        <div className="textDiv">

          <span data-aos='fade-up'
          className="smallText">Nos offres !</span>

          <h1 data-aos='fade-up'
          className="homeTitle">
            Cherchez votre prochaine destination à l'ouest !
          </h1>
        </div>

        <div
        data-aos='fade-up'
        className="cardDiv grid">

          <div className="destinationInput">
            <label htmlFor="city">Cherchez votre destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Entrez un nom ici..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Séléctionnez vos dates</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Prix maximum:</label>
              <h3 className="total">€5000</h3>
            </div>

            <div className="input flex">
              <input type="range" max="5000" min="200" />
            </div>
          </div>

          <div className="searchOptions flex">
            <FaFilter className="icon"/>
            <span>PLUS DE CRITERES</span>
          </div>

        </div>
     <div data-aos='fade-up'
     className="homeFooterIcons flex">
      <div className="rightIcons">
      <FaFacebook className="icon" />
      <FaInstagram className="icon" />
      <FaSquareXTwitter className="icon" />
      </div>
      <div className="leftIcons">
      <BsListTask className="icon" />
      <TbApps className="icon" />
      </div>
     </div>
      </div>

    </section>
  );
};
export default Home;
