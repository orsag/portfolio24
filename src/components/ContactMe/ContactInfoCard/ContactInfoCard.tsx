import React from 'react'
import "./ContactInfoCard.css";

type ContactInfoCardType = {
    iconUrl: string;
    text: string;
}

const ContactInfoCard = ({ iconUrl, text }: ContactInfoCardType) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>

      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
