import React, { useState } from "react";
import style from "./Asesoria.module.css";
import FormAsesoria from "./FormAsesoria";

export default function Asesoria() {
  return (
    <div className={style.contentAll} id="services">
      <div className={style.barra}></div>
      <h3 className={style.title}>Asesoría</h3>
      <div className={style.card}>
        <div className={style.containerServices}>
            <FormAsesoria />
        </div>
      </div>
    </div>
  );
}