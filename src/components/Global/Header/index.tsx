import { ContainerWrapper } from "../../../styles/components/Containers";
import { ContainerHeader, ContainerOptions } from "./styles";
import logo from "../../../assets/logo.svg";
import { Search } from "./Search";
import { Cart } from "./Cart";
import { Logout } from "./Logout";

export const Header = () => {
  return (
    <ContainerHeader>
      <ContainerWrapper className="container__wrapper">
        <img src={logo} alt="Logo SBurguer" />

        <ContainerOptions>
          <Search />
          <Cart />
          <Logout />
        </ContainerOptions>
      </ContainerWrapper>
    </ContainerHeader>
  );
};
