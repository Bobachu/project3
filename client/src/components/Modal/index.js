import React from "react";

const Modal = ({ show, children }) => {
  return (
    <div
      className="w3-modal w3-animate-zoom w3-center"
      style={{
        display: show ? "block" : "none",
        
      }}
    >
      <div
        className="w3-modal-content w3-black w3-card-4 w3-animate-zoom"
        style={{maxWidth: 700, height: 500, paddingLeft: 20, paddingRight: 20, paddingTop:30}}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
