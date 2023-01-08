import { MdOutlineClose } from "react-icons/md";
import { iHeaderModalCartProps } from "./@types";
import { ButtonModalClose, ContainerHeaderModalCart } from "./styles";

export const HeaderModalCart = ({
  handleCloseModal,
}: iHeaderModalCartProps) => {
  return (
    <ContainerHeaderModalCart>
      <h2>Carrinho de compras</h2>
      <ButtonModalClose type="button" onClick={handleCloseModal}>
        <MdOutlineClose />
      </ButtonModalClose>
    </ContainerHeaderModalCart>
  );
};
