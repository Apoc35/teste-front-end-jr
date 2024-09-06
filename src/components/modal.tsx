import React from "react";
import "../styles/modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{product.productName}</h2>
        <img
          src={product.photo}
          alt={product.descriptionShort}
          style={{ width: "100%", height: "auto" }}
        />
        <p>{product.descriptionShort}</p>
        <p>Preço: R$ {product.price}</p>
      </div>
    </div>
  );
};

export default Modal;
