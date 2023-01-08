import { TextCartEmpty } from "./TextCartEmpty";
import { ListSnacksCart } from "./ListSnacksCart";
import { ContainerBodyModalCart } from "./styles";
import { useUserStore } from "../../../../../../stores/useUserStore";

export const BodyModalCart = () => {
  const { snacks_cart: snacksCart } = useUserStore((state) => state.user);

  return (
    <ContainerBodyModalCart>
      {snacksCart.length > 0 ? (
        <ListSnacksCart snacks={snacksCart} />
      ) : (
        <TextCartEmpty />
      )}
    </ContainerBodyModalCart>
  );
};
