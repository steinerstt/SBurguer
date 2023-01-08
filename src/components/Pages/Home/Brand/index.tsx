import logo from "../../../../assets/logo.svg";
import bag from "../../../../assets/bag.svg";
import bubbles from "../../../../assets/bubbles.svg";
import { ContainerBrand, ContainerSlogan } from "./styles";

export const Brand = () => {
  return (
    <ContainerBrand>
      <img src={logo} alt="Logo SBurguer" />

      <ContainerSlogan>
        <div>
          <img src={bag} alt="Sacola" />
        </div>

        <p>
          A vida é como um sandíche, é preciso recheá-la com os{" "}
          <span>melhores</span> ingredientes
        </p>
      </ContainerSlogan>

      <img src={bubbles} alt="Bolhas" />
    </ContainerBrand>
  );
};
