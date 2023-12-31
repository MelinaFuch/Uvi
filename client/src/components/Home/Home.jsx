import React, { useState } from "react";
import style from "./Home.module.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

//backgrounds
import backgroundHome from "../../assets/background-home.png";
import backgroundHomeMovile from "../../assets/backgroud-home-mobile.png";
import backgroundHomeMid from "../../assets/background-home-mid.png";
import backgroundHomeMovileLow from "../../assets/background-movil-low.png";
import backgroundVideo from "../../assets/video-home.mp4";
//backgrounds

//Cards of slider
import cardCV from "../../assets/cardCV.png";
import cardLinkedin from "../../assets/CardLinkedin.png";
import cardInterview from "../../assets/CardInterview.png";
import cardCVMovile from "../../assets/cardCVMovile.png";
import cardLinkedinMovile from "../../assets/CardLinkedinMovil.png";
import cardInterviewMovile from "../../assets/CardInterviewMovil.png";
import { useServices } from "../../context/ServiceContext";
//Cards of slider

export default function Home() {
  const { handleCompanyClick, handleProfessionalClick, setActiveButton } =
    useServices();

  let background = backgroundHome;
  if (innerWidth > 1200) background = backgroundHome;
  else if (innerWidth <= 1200 && innerWidth > 700)
    background = backgroundHomeMid;
  else if (innerWidth <= 700 && innerWidth > 400)
    background = backgroundHomeMovile;
  else if (innerWidth <= 400) background = backgroundHomeMovileLow;
  return (
    <div className={style.contentAll} id="home">
      <img src={background} alt="" className={style.background} />

        {innerWidth > 700 ? (
          <div className={style.contentSlider}>
            <motion.div
              className={style.contentImages}
              initial={{ x: "100%" }}
              animate={{ x: [null, "0%", "0%", "0%", "100%"] }}
              transition={{
                delay: 2,
                duration: 5,
                repeatType: "reverse",
                repeat: Infinity,
                repeatDelay: 12,
              }}
            >
              <img src={cardCV} alt="" />
            </motion.div>
            <motion.div
              className={style.contentImages}
              initial={{ x: "100%" }}
              animate={{ x: [null, "0%", "0%", "0%", "100%"] }}
              transition={{
                delay: 7,
                duration: 5,
                repeatType: "reverse",
                repeat: Infinity,
                repeatDelay: 12,
              }}
            >
              <img src={cardLinkedin} alt="" />
            </motion.div>
            <motion.div
              className={style.contentImages}
              initial={{ x: "100%" }}
              animate={{ x: [null, "0%", "0%", "0%", "100%"] }}
              transition={{
                delay: 12,
                duration: 5,
                repeatType: "reverse",
                repeat: Infinity,
                repeatDelay: 12,
              }}
            >
              <img src={cardInterview} alt="" />
            </motion.div>
          </div>
        ) : (
          <div className={style.contentSlider}>
            <motion.div
              className={style.contentImages}
              initial={{ x: "100%" }}
              animate={{ x: [null, "0%", "0%", "0%", "100%"] }}
              transition={{
                delay: 2,
                duration: 5,
                repeatType: "reverse",
                repeat: Infinity,
                repeatDelay: 12,
              }}
            >
              <img src={cardCVMovile} alt="" />
            </motion.div>
            <motion.div
              className={style.contentImages}
              initial={{ x: "100%" }}
              animate={{ x: [null, "0%", "0%", "0%", "100%"] }}
              transition={{
                delay: 7,
                duration: 5,
                repeatType: "reverse",
                repeat: Infinity,
                repeatDelay: 12,
              }}
            >
              <img src={cardLinkedinMovile} alt="" />
            </motion.div>
            <motion.div
              className={style.contentImages}
              initial={{ x: "100%" }}
              animate={{ x: [null, "0%", "0%", "0%", "100%"] }}
              transition={{
                delay: 12,
                duration: 5,
                repeatType: "reverse",
                repeat: Infinity,
                repeatDelay: 12,
              }}
            >
              <img src={cardInterviewMovile} alt="" />
            </motion.div>
          </div>
        )}
  
        <div className={style.backgroundVideo}>
          <video autoPlay muted loop>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
  
        <div className={style.contentInfo}>
          <h6>
          Descubre nuestro servicio de asesoría mediante una donación para mejorar tu currículum vitae, perfil de LinkedIn y búsqueda laboral.
          </h6>
          <div className={style.contentButtons}>
            <Link to="services">
              <button
                onClick={() => {
                  handleProfessionalClick();
                  setActiveButton(false);
                }}
                smooth="true"
                offset={-20}
                duration={500}
                className={style.buttonServices}
                activeclass="active"
              >
                Asesoría
              </button>
            </Link>
          </div>
        </div>
    </div>
  );
}
