import React, { useState, useEffect } from 'react';
import './popup.css';

const Popup = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Le message disparaîtra après 3 secondes

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <div className="popup__message-container">
      <div className="popup__checkmark"></div>
      <p className="popup__message-text">{message}</p>
    </div>
  ) : null;
};

export default Popup;
