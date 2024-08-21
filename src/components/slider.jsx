import React from "react";
import "./slider.css";

const data = [
  [
    "Casa_Colibri_Logo.jpg",
    "CASTRO Y SALAZAR-1 - pamela jimenez.jpg",
    "Juan Aguilar.jpg",
    "LIFFE DANCE STUDIOS .png",
    "LOGO SIERRASANJUAN - Rafa Tapia.jpg",
    "Louis Georgeot.png",
    "soñarte .png",
    "V1 - EON Xperts.png",
    "VECINO_COLIVING .jpg",
    
  ],
  [
    "Casa_Colibri_Logo.jpg",
    "CASTRO Y SALAZAR-1 - pamela jimenez.jpg",
    "Juan Aguilar.jpg",
    "LIFFE DANCE STUDIOS .png",
    "LOGO SIERRASANJUAN - Rafa Tapia.jpg",
    "Louis Georgeot.png",
    "soñarte .png",
    "V1 - EON Xperts.png",
    "VECINO_COLIVING .jpg",
    
  ],
];

const Slider = ({ side = "left" }) => (
  <section className="infinite-slider-wrapper">
    {data.map((brand, index) => (
      <section key={index} className={`infinite-slider ${side}`}>
        {brand.map((logo, index2) => (
          <img key={index2} src={logo} alt={`logo-${index2}`} />
        ))}
      </section>
    ))}
  </section>
);

export default Slider;
