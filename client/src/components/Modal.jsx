import React from 'react';
import Carousel from './Carousel';
import './Modal.css';

const Modal = (props) => {
  return props.open ? (
    <div>
      <div className="modal">
        <button className="modal-close" onClick={props.toggleModal}>
          <svg viewBox="0 0 40 40">
            <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <div className="modal-content">
          <Carousel photos={props.photos} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;