import React from 'react';
import './whatssappbutton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=21644411204"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
    <FontAwesomeIcon icon={faWhatsapp} style={{color: "#ffffff",}} />
    </a>
  );
};

export default WhatsAppButton;
