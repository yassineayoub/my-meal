import React from 'react';
import { ReactDOM } from "react";
const Modal = () => {

  return ReactDOM.createPortal(
    <div>
      Ajouter un aliment personnalisé
    </div>
  ,document.getElementById('layout'))
}

export default Modal;