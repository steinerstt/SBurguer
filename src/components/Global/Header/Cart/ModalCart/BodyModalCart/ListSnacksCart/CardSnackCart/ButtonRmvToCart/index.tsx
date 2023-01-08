import { IoMdTrash } from "react-icons/io";
import { api } from "../../../../../../../../../services/api";
import { useUserStore } from "../../../../../../../../../stores/useUserStore";
import { iButtonRmvToCartProps } from "./@types";
import { ContainerButtonRmvToCart } from "./styles";

export const ButtonRmvToCart = ({ idSnack }: iButtonRmvToCartProps) => {
  const { user, setUser } = useUserStore();

  const handleRmvTocart = async () => {
    const token: string | null = localStorage.getItem("@sburguer:token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      await api.delete(`/cart/${idSnack}`);

      const { snacks_cart } = user;
      const indexSnack: number = snacks_cart.findIndex(
        (snack) => snack.id == idSnack
      );

      snacks_cart.splice(indexSnack, 1);
      const userCartUpdated = {
        ...user,
        snacks_cart: snacks_cart,
      };

      setUser(userCartUpdated);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContainerButtonRmvToCart type="button" onClick={handleRmvTocart}>
      <IoMdTrash />
    </ContainerButtonRmvToCart>
  );
};
