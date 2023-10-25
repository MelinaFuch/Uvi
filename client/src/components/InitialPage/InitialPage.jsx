import Navbar from "../Navbar/Navbar";
import Form from "../Form/Form";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import { useState } from "react";
import Asesoria from "../Asesoria/Asesoria";

export default function InitialPage() {
    const [positionAboutY, setPositionAboutY] = useState();
    function handleAction(y) {
    setPositionAboutY(y);
  }
    return (
        <>
            <Navbar dataAboutPosition={positionAboutY} />
            <Home />
            <About receiveDataAbout={handleAction} />
            <Asesoria />
            <Form />
            <Footer />
        </>
    )
}