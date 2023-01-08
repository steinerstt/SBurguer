import { useState } from "react";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../../../../../services/api";
import { useUserStore } from "../../../../../stores/useUserStore";
import { Button } from "../../../../../styles/components/Buttons";
import { iButtonAddToCartProps } from "./@types";

export const ButtonAddToCart = ({ snack }: iButtonAddToCartProps) => {
  const { user, setUser } = useUserStore();
  const { id } = snack;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAddToCart = async (): Promise<void> => {
    setIsLoading(true);
    const token: string | null = localStorage.getItem("@sburguer:token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      await api.patch(`/cart/${id}`);
      const userCartUpdated = {
        ...user,
        snacks_cart: [...user.snacks_cart, snack],
      };

      setUser(userCartUpdated);
    } catch (error) {
      if (isAxiosError(error)) {
        const msgErroSnackAlreadyCart =
          "There is already the some snack in the cart";

        const msgError = error.response?.data.message;
        if (msgError == msgErroSnackAlreadyCart) {
          toast.error("OOPS! Você já tem esse lanche no carrinho", {
            autoClose: 2000,
          });
        }
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="button"
      disabled={isLoading}
      variant="primaryMedium"
      onClick={handleAddToCart}
    >
      Adicionar ao carrinho
    </Button>
  );
};
