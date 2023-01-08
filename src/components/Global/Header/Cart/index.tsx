import { RiShoppingCart2Fill } from "react-icons/ri";
import { useCartStore } from "../../../../stores/useCartStore";
import { useUserStore } from "../../../../stores/useUserStore";
import { ModalCart } from "./ModalCart";
import { ContainerCart } from "./styles";

export const Cart = () => {
  const { snacks_cart: snacksCart } = useUserStore((state) => state.user);
  const { isOpenCartModal, setIsOpenCartModal } = useCartStore();
  const qtSnacksCart: number = snacksCart.length;

  return (
    <>
      <ContainerCart type="button" onClick={setIsOpenCartModal}>
        <RiShoppingCart2Fill />
        <span>{qtSnacksCart}</span>
      </ContainerCart>

      {isOpenCartModal && <ModalCart />}
    </>
  );
};
