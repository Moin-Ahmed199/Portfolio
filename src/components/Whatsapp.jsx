import React from "react";
import { FaWhatsapp} from 'react-icons/fa'; 
import "./Whatsapp.css"; 

const WhatsAppButton = () => {

    const hiremelink = () => {
        window.open("https://wa.link/ju3gzh", "_blank");}



  return (

    <div className="whatsapp-btn whatsapp-float" onClick={hiremelink}> 
 
    <FaWhatsapp/>
</div>   
  );
};

export default WhatsAppButton;
