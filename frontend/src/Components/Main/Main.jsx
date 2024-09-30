import React from "react";
import "./Main.css";

//Medias

import bzh1 from "../../Assets/bzh-1.jpg";
import bzh2 from "../../Assets/bzh-2.jpg";
import bzh3 from "../../Assets/bzh-3.jpg";
import bzh4 from "../../Assets/bzh-4.jpg";
import bzh5 from "../../Assets/bzh-5.jpg";
import bzh6 from "../../Assets/bzh-6.jpg";
import bzh7 from "../../Assets/bzh-7.jpg";
import bzh8 from "../../Assets/bzh-8.jpg";
import bzh9 from "../../Assets/bzh-9.jpg";

//Icons
import { FaLocationDot } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";

const Data = [
  {
    id: 1,
    imgSrc: bzh1,
    destTitle: "Cancale",
    location: "Ille-et-Vilaine",
    grade: "GASTRONOMIE NATURE",
    fees: "700€",
    description:
      "Cancale, réputée pour ses huîtres et ses paysages côtiers exceptionnels, offre une expérience authentique de la Bretagne. Ce village de pêcheurs est idéal pour savourer des fruits de mer frais tout en profitant de la vue sur la baie du Mont-Saint-Michel.",
  },
  {
    id: 2,
    imgSrc: bzh2,
    destTitle: "Saint-Malo",
    location: "Ille-et-Vilaine",
    grade: "HISTOIRE & AVENTURE",
    fees: "850€",
    description:
      "Saint-Malo, célèbre pour ses remparts majestueux et son histoire de corsaires, est une destination incontournable pour les amoureux de l'histoire et de la mer. Flânez dans ses rues pavées, explorez ses fortifications et profitez des plages environnantes pour une expérience bretonne riche en découvertes.",
  },
  {
    id: 3,
    imgSrc: bzh3,
    destTitle: "Quimper",
    location: "Finistère, France",
    grade: "CULTURAL RELAX",
    fees: "550€",
    description:
      "Quimper, capitale culturelle du Finistère, est célèbre pour sa cathédrale gothique et ses maisons à colombages. Découvrez son patrimoine breton à travers ses musées et ses artisans locaux.",
  },
  {
    id: 4,
    imgSrc: bzh4,
    destTitle: "Concarneau",
    location: "Finistère, France",
    grade: "SEASIDE RELAX",
    fees: "600€",
    description:
      "Concarneau, avec sa ville close entourée de remparts, est une destination pittoresque et charmante. Explorez ses ruelles pavées, ses galeries d'art, et profitez d'une balade le long de la plage.",
  },
  {
    id: 5,
    imgSrc: bzh5,
    destTitle: "Pointe du Raz",
    location: "Finistère, France",
    grade: "NATURE ADVENTURE",
    fees: "500€",
    description:
      "La Pointe du Raz, un site naturel spectaculaire, vous invite à découvrir ses falaises escarpées et sa vue panoramique sur l'océan. Un incontournable pour les amateurs de randonnée et de paysages grandioses.",
  },
  {
    id: 6,
    imgSrc: bzh6,
    destTitle: "Belle-Île-en-Mer",
    location: "Morbihan, France",
    grade: "ISLAND ESCAPE",
    fees: "750€",
    description:
      "Belle-Île-en-Mer est une île paradisiaque aux paysages variés : plages de sable, falaises déchiquetées et vallées verdoyantes. Idéale pour une escapade nature et détente, loin de l'agitation du continent.",
  },
  {
    id: 7,
    imgSrc: bzh7,
    destTitle: "Carnac",
    location: "Morbihan, France",
    grade: "HISTORICAL NATURE",
    fees: "620€",
    description:
      "Carnac est célèbre pour ses alignements de menhirs, mystérieux vestiges de la préhistoire. Profitez de la sérénité des lieux et explorez les plages et marais environnants pour une expérience unique.",
  },
  {
    id: 8,
    imgSrc: bzh8,
    destTitle: "Rochefort-en-Terre",
    location: "Morbihan, France",
    grade: "MEDIEVAL CHARM",
    fees: "580€",
    description:
      "Rochefort-en-Terre, élu plus beau village de France, charme par ses maisons fleuries et son ambiance médiévale. Flânez dans ses ruelles pittoresques et imprégnez-vous de l'atmosphère unique du lieu.",
  },
  {
    id: 9,
    imgSrc: bzh9,
    destTitle: "Locronan",
    location: "Finistère, France",
    grade: "CULTURAL CHARM",
    fees: "630€",
    description:
      "Locronan, petite cité de caractère, est l'un des joyaux architecturaux de la Bretagne. Avec ses maisons de granit et son église majestueuse, c'est une destination incontournable pour les amoureux de l'histoire et de l'architecture.",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Nos coups de coeur du moment</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <FaLocationDot className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <FaClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
export default Main;
