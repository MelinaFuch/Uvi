import React, { useEffect, useRef, useState } from "react";
import CardService from "../CardService/CardService";
import { useServices } from "../../context/ServiceContext";
import style from "./FormAsesoria.module.css";
import CardCompany from "../CardCompany/CardCompany";
import emailjs from "@emailjs/browser";
import { uploadFile } from "../../firebase/config";
import { useLocation } from "react-router-dom";
import axios from 'axios';

export default function FormAsesoria () {
  const {
    activeButton,
    selectedServices,
  } = useServices();
  
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState('');
  const [price, setPrice] = useState(1);

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("ID");
  
  const form = useRef();
  
  const validateForm = () => {
    const newErrors = {};

    if (!form.current.user_name.value) {
      newErrors.user_name = "Por favor, ingresa tu nombre";
    }
    if (!form.current.user_lastname.value) {
      newErrors.user_lastname = "Por favor, ingresa tu apellido";
    }
    if (!form.current.user_linkedin.value) {
      newErrors.user_linkedin = "Por favor, ingresa el link de tu perfil de LinkedIn";
    }
    if (!form.current.user_email.value) {
      newErrors.user_email = "Por favor, ingresa tu email";
    }
    if (!form.current.user_message.value) {
      newErrors.user_message = "Por favor, ingresa tu mensaje";
    }

    setErrors(newErrors);
    // console.log(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const body = {
      price,
    };

    const response = await axios.post('http://localhost:3000/create-order', body, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .catch((error) => {
        console.error(error);
      })

      window.location.href = response.data.links[1].href
      // console.log(response);
  }

  return (
    <div className={style.cardServices}>
      <div className={style.subtitleCard}>
        <p>
        Completa y envía el siguiente formulario y un asesor va a comenzar a trabajar y a entregarte lo antes posible un documento con sugerencias de puntos a mejorar en tu CV y perfil de LinkedIn junto a nuestra guía de instrucciones y consejos para la búsqueda laboral.

        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit} ref={form}>
        <div className={style.formContainer}>
          <div className={style.formServices}>
            <label>Nombre</label>
            <input type="text" name="user_name"/>
            {errors.user_name && (
              <p className={style.errorText}>{errors.user_name}</p>
            )}
          </div>
          <div className={style.formServices}>
            <label>Apellido</label>
            <input type="text" name="user_lastname" />
            {errors.user_lastname && (
              <p className={style.errorText}>{errors.user_lastname}</p>
            )}
          </div>
          <div className={style.formServices}>
            <label>Correo electrónico</label>
            <input type="text" name="user_email" />
            {errors.user_email && (
              <p className={style.errorText}>{errors.user_email}</p>
            )}
          </div>
          <div className={style.formServices}>
            <label>Perfil de Linkedin</label>
            <input type="text" name="user_linkedin" />
            {errors.user_linkedin && (
              <p className={style.errorText}>{errors.user_linkedin}</p>
            )}
          </div>
          <div className={style.fileInput}>
            <label>Adjuntar CV</label>
            <input
              type="file"
              name="cv"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className={style.formServices}>
            <label>Mensaje</label>
            <input type="text" name="user_message" />
            {errors.user_message && (
              <p className={style.errorText}>{errors.user_message}</p>
            )}
          </div>
        </div>
        <div className={style.containerBtn}>
          <p>
          Podrás realizar la donación según tus posibilidades luego de recibir el trabajo en tu correo electrónico.
          </p>
          <input type="number" onChange={(e) => setPrice(e.target.value)} />
          <button type="submit" className={style.buttonDonate}>
            Donar y enviar
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};