import React from "react";
import "./styles.css";

import { FiArrowRight } from "react-icons/fi";
import LogoImg from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={LogoImg} alt="Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Criciúma</strong>
          <span>Santa Catarina</span>
        </div>
        <Link to="/app" className="enter-app">
          <FiArrowRight size={16} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}
