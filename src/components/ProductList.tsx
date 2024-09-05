import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts.products);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.productName}</h2>
          <p>{product.descriptionShort}</p>
          <img src={product.photo} alt={product.productName} />
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
