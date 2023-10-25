import React, { useRef, useEffect } from "react";
import CardReview from "../CardReview/CardReview";
import style from "./About.module.css";
import Team from "../Team/Team";
import avatar from "../../assets/avatar.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { color } from "framer-motion";

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const teamReviews = [
    {
      nombre: "nombre",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: "foto",
      servicios: "Servicios brindados",
      experiencia:
        "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum pariatur minus. Assumenda tempora dolorum in atque quae? Deserunt, veniam.'",
    },
    {
      nombre: "nombre2",
      profesion: "profesión2",
      linkedin: "linkedin2",
      foto: "foto2",
      servicios: "Servicios brindados2",
      experiencia:
        "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum pariatur minus. Assumenda tempora dolorum in atque quae? Deserunt, veniam.'",
    },
    {
      nombre: "nombre3",
      profesion: "profesión3",
      linkedin: "linkedin3",
      foto: "foto3",
      servicios: "Servicios brindados3",
      experiencia:
        "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum pariatur minus. Assumenda tempora dolorum in atque quae? Deserunt, veniam.'",
    },
  ];

  const teamData = [
    {
      nombre: "nombre",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: avatar,
    },
    {
      nombre: "nombre2",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: avatar,
    },
    {
      nombre: "nombre3",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: avatar,
    },
    {
      nombre: "nombre4",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: avatar,
    },
  ];

  return (
    <div className={style.contentAll} id="about">
      <div className={style.containerInfoAbout}>
        <div className={style.barra}></div>
        <h3>Nosotros</h3>
        <p className={style.description}>
        Somos una plataforma enfocada a ayudar a profesionales en su búsqueda laboral. Contamos con profesionales con una gran vocación comprometidos con el logro de resultados; trabajan en aspectos claves como el currículum vitae y el perfil de LinkedIn, además de compartir sus conocimientos para una búsqueda laboral eficaz.
        </p>
        <h2 className={style.subTitle}>Nuestra Mision</h2>
        <p className={style.description}>
        Buscamos disminuir las dificultades y diferencias que existen en el acceso a oportunidades laborales poniendo a disposición nuestro conocimiento y experiencia de forma accesible e igualitaria. Creemos que los valores humanos son las cualidades más importantes para lograr el éxito profesional y personal esto lo podria asi, ya que eso de 'es lo que promovemos' creo que ya se a entendido anteriormente en la mision y demas puntos
        </p>
        <h2 className={style.subTitle}>Nuestro Equipo:</h2>
      </div>
      <div className={style.containerCardTeam}>
        {teamData.map((member) => (
          <Team
            key={member.nombre}
            nombre={member.nombre}
            profesion={member.profesion}
            linkedin={member.linkedin}
            foto={member.foto}
          />
        ))}
      </div>
      <div className={style.containerCardReview}>
        <div className={style.titleReview}>
        <div className={style.barra}></div>
          <h3>Reseñas</h3>
        </div>
        <div className={style.sliderContainer}>
          <Slider {...settings} className={style.sliderStyles}
         >
            {teamReviews.map((review, index) => (
              <div key={index} className={style.swiperContainer}>
                <CardReview
                  nombre={review.nombre}
                  servicios={review.servicios}
                  experiencia={review.experiencia}
                  profesion={review.profesion}
                  linkedin={review.linkedin}
                  foto={review.foto}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
