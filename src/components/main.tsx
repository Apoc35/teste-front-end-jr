import iconTecnology from "../assets/mainAssets/monitorar-tablet-e-smartohone 1.png";
import iconSuperMarket from "../assets/mainAssets/supermercados 1.png";
import iconDrinks from "../assets/mainAssets/whiskey.png";
import iconTools from "../assets/mainAssets/ferramentas 1.png";
import iconHealth from "../assets/mainAssets/cuidados-de-saude 1.png";
import iconSportsAndFitness from "../assets/mainAssets/corrida 1.png";
import iconModel from "../assets/mainAssets/moda 1.png";

import "../styles/main.scss";
function Main() {
  return (
    <main>
      <section className="menu-section">
        <div className="icon-div">
          <img
            className="icon-section"
            src={iconTecnology}
            alt="Ícone de produtos de tecnologia"
          />
          <span className="span-section">Tecnologia</span>
        </div>
        <div className="icon-div">
          <img
            className="icon-section"
            src={iconSuperMarket}
            alt="Ícone de supermercado"
          />
          <span className="span-section">SuperMercado</span>
        </div>
        <div className="icon-div">
          <img
            className="icon-section"
            src={iconDrinks}
            alt="Ícone de bebidas"
          />
          <span className="span-section">Bebidas</span>
        </div>
        <div className="icon-div">
          <img
            className="icon-section"
            src={iconTools}
            alt="Ícone de ferramentas"
          />
          <span className="span-section">Ferramentas</span>
        </div>
        <div className="icon-div">
          <img className="icon-section" src={iconHealth} alt="Ícone de saúde" />
          <span className="span-section">Saúde</span>
        </div>
        <div className="icon-div">
          <img
            className="icon-section"
            src={iconSportsAndFitness}
            alt="Ícone de esportes e fitness"
          />
          <span className="span-section">Esporte e Fitness</span>
        </div>
        <div className="icon-div">
          <img className="icon-section" src={iconModel} alt="Ícone de moda" />
          <span className="span-section">Moda</span>
        </div>
      </section>
    </main>
  );
}

export default Main;
