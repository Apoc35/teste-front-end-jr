import React, { useState, useEffect } from "react";
import "../styles/product-list.scss";

import Modal from "./modal";

import rightArrow from "../assets/productAssets/Vector.svg";
import leftArrow from "../assets/productAssets/Vector (1).svg";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const mockProducts = {
  success: true,
  products: [
    {
      productName: "Iphone 11 PRO MAX BRANCO 1",
      descriptionShort: "Iphone 11 PRO MAX BRANCO 1",
      photo:
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 15000,
    },
    {
      productName: "IPHONE 13 MINI 1",
      descriptionShort: "IPHONE 13 MINI 1",
      photo:
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 9000,
    },
    {
      productName: "Iphone 11 PRO MAX BRANCO 2",
      descriptionShort: "Iphone 11 PRO MAX BRANCO 2",
      photo:
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 14990,
    },
    {
      productName: "IPHONE 13 MINI 2",
      descriptionShort: "IPHONE 13 MINI 2",
      photo:
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 12000,
    },
    {
      productName: "Iphone 11 PRO MAX BRANCO 3",
      descriptionShort: "Iphone 11 PRO MAX BRANCO 3",
      photo:
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 4550,
    },
    {
      productName: "IPHONE 13 MINI 3",
      descriptionShort: "IPHONE 13 MINI 3",
      photo:
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 38000,
    },
    {
      productName: "Iphone 11 PRO MAX BRANCO 4",
      descriptionShort: "Iphone 11 PRO MAX BRANCO 4",
      photo:
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 42000,
    },
    {
      productName: "IPHONE 13 MINI 4",
      descriptionShort: "IPHONE 13 MINI 4",
      photo:
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 520,
    },
    {
      productName: "Iphone 11 PRO MAX BRANCO 5",
      descriptionShort: "Iphone 11 PRO MAX BRANCO 5",
      photo:
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 149990,
    },
    {
      productName: "IPHONE 13 MINI 5",
      descriptionShort: "IPHONE 13 MINI 5",
      photo:
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 100000,
    },
  ],
};

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Arrumar isso depois
      if (direction === "left") {
        carouselRef.current.scrollLeft -= scrollAmount;
      } else {
        carouselRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts.products);
      setLoading(false);
    }, 800);
  }, []);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <div className="product-section">
        <h1 className="product-title">Produtos Relacionados</h1>
        <div className="span-container">
          <span className="span-content">Celular</span>
          <span className="span-content">Acessórios</span>
          <span className="span-content">Tablets</span>
          <span className="span-content">Notebooks</span>
          <span className="span-content">Tvs</span>
          <span className="span-content">Ver todos</span>
        </div>
      </div>
      <div className="carousel-container">
        <button
          className="arrow left-arrow"
          onClick={() => handleScroll("left")}
        >
          <img src={leftArrow} alt="" />
        </button>
        <div className="product-carousel" ref={carouselRef}>
          {products.map((product, index) => (
            <div
              className="product-list"
              key={index}
              onClick={() => openModal(product)}
            >
              <img
                className="product-photo"
                src={product.photo}
                alt={product.productName}
              />
              <h3>{product.productName}</h3>
              <p>R$ {product.price}</p>
              <p className="frete">Frete Grátis</p>
              <button className="buy-button">Comprar</button>
            </div>
          ))}
        </div>
        <button
          className="arrow right-arrow"
          onClick={() => handleScroll("right")}
        >
          <img src={rightArrow} alt="" />
        </button>
      </div>

      {/* Modal simples, alterar configuração dele se der tempo*/}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
}

export default ProductList;
