import { HeaderModalCart } from "./HeaderModalCart";
import { BodyModalCart } from "./BodyModalCart";
import { ContainerModalCart, Modal } from "./styles";
import { SummaryCart } from "./SummaryCart";
import { useState } from "react";
import { useCartStore } from "../../../../../stores/useCartStore";

export const ModalCart = () => {
  const { setIsOpenCartModal } = useCartStore();
  const [isModalClosing, setIsModalClosing] = useState<boolean>(false);

  const handleCloseModal = (): void => {
    setIsModalClosing(!isModalClosing);

    setTimeout((): void => {
      setIsOpenCartModal();
      setIsModalClosing(!isModalClosing);
    }, 900);
  };

  return (
    <ContainerModalCart>
      <Modal isModalClosing={isModalClosing}>
        <HeaderModalCart handleCloseModal={handleCloseModal} />
        <BodyModalCart />
        <SummaryCart />
      </Modal>
    </ContainerModalCart>
  );
};
