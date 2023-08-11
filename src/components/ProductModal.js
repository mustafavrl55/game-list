import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ProductModal = ({data, isOpen}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModalIsOpen(!modalIsOpen)}
      contentLabel="Örnek Modal"
    >
      <h2>{data.title}</h2>
      <button onClick={() => setModalIsOpen(!modalIsOpen)}>Modalı Kapat</button>
    </Modal>
  );
};

export default ProductModal;
