import iconShieldCheck from "../assets/headerAssets/ShieldCheck.svg";
import iconTruck from "../assets/headerAssets/Truck.svg";
import iconCreditCard from "../assets/headerAssets/CreditCard.svg";
import iconVtx from "../assets/headerAssets/Group 35vtex.svg";
import iconMagnifier from "../assets/headerAssets/MagnifyingGlass.svg";
import iconGroup from "../assets/headerAssets/Group.svg";
import iconHeart from "../assets/headerAssets/Heart.svg";
import iconUser from "../assets/headerAssets/UserCircle.svg";
import iconShoppingCart from "../assets/headerAssets/ShoppingCart.svg";
import iconCrown from "../assets/headerAssets/CrownSimple.svg";
import promotionImg from "../assets/headerAssets/Rectangle 250.png";

import "../styles/header-style.scss";

function Header() {
  return (
    <header className="header">
      <div className="top-section">
        <span className="normal-text item-header">
          <img src={iconShieldCheck} alt="Ícone de verificado, escudo." />
          Compra&nbsp; <span className="highlight">100% segura</span>
        </span>
        <span className="normal-text item-header">
          <img src={iconTruck} alt="Ícone caminhao de entrega." />
          <span className="highlight">Entrega grátis</span>&nbsp; a partir de
          200 reais
        </span>
        <span className="normal-text item-header">
          <img src={iconCreditCard} alt="Ícone de cartão de crédito." />
          <span className="highlight">Parcele</span>&nbsp; suas compras
        </span>
      </div>
      <div className="mid-section">
        <img className="vtx-icon" src={iconVtx} alt="Logo de marca VTX" />
        <div className="input-container">
          <img
            className="input-icon"
            src={iconMagnifier}
            alt="Ícone de lupa, input de pesquisa"
          />
          <input
            className="input-header"
            placeholder="O que você está buscando?"
            type="text"
          />
        </div>
        <div className="header-icons">
          <img src={iconGroup} alt="Ícone de grupo" />
          <img src={iconHeart} alt="Ícone de favoritos/Likes" />
          <img src={iconUser} alt="Ícone de usuário/Perfil" />
          <img
            src={iconShoppingCart}
            alt="Ícone de carrinho de compras/Seu carrinho de compras"
          />
        </div>
      </div>
      <div className="lower-section">
        <span>Todas as categorias</span>
        <span>Supermercado</span>
        <span>Livros</span>
        <span>Moda</span>
        <span>Lançamentos</span>
        <span>Ofertas do dia</span>
        <span>
          <img src={iconCrown} alt="Ícone de assinatura, uma coroa" />
          &nbsp; Assinatura
        </span>
      </div>
      <figure className="background-container">
        <img
          className="promotion-image"
          src={promotionImg}
          alt="Imagem das promoções"
        />
        <figcaption className="text-overlay">
          <h1 className="promotion-title">Venha conhecer nossas promoções</h1>
          <h3 className="promotion-title">50% Off nos produtos</h3>
          <button className="promotion-button">Ver produtos</button>
        </figcaption>
      </figure>
    </header>
  );
}

export default Header;
