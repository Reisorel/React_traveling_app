import React from "react";
import "./Footer.css";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";


const Footer = () => {
  const video2 =
    "https://res.cloudinary.com/dqrq4ullu/video/upload/v1727706009/travel_agency_react/videos/rocky_water_lm4w4w.mp4";

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>Restons en contact !</small>
            <h2>Voyagez avec nous!</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Adress" />
            <button className="btn flex" type="submit">
              ENVOYER <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />BreizhTravel
              </a>
            </div>
            <div className="footerParagraph">
              Complétement.à.l'Ouest
            </div>

            <div className="footerSocials flex">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaSquareXTwitter className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Groupe-1 */}
            <div className="linkGroup">
              <span className="groupTitle">
                NOTRE AGENCE
              </span>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Services
              </li>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Assurance
              </li>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Agence
              </li>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Tourisme
              </li>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Paiement
              </li>

            </div>
            {/* Groupe-2 */}
            <div className="linkGroup">
              <span className="groupTitle">
                PARTENAIRES
              </span>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Réservation
              </li>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Location de véhicule
              </li>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              HostelWordld
              </li>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Apprendre le breton
              </li>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              TripAdvisor
              </li>

            </div>
            {/* Groupe-3 */}
            <div className="linkGroup">
              <span className="groupTitle">
                DERNIERE MINUTE
              </span>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Trégor
              </li>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Belle-île
              </li>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Concarneau
              </li>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Perros-Guirec
              </li>

              <li className="footerList flex">
              <FaChevronRight className="icon"/>
              Bréhat
              </li>

            </div>

          </div>

          <div className="footerDiv flex">
          <small>BREIZH TRAVEL WEBSITE THEME</small>
          <small>Développé par Reisorel - 2024</small>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
