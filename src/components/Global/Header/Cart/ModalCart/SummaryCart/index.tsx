import { useUserStore } from "../../../../../../stores/useUserStore";
import { ContainerSummaryCart } from "./styles";

export const SummaryCart = () => {
  const { snacks_cart: snacksCart } = useUserStore((state) => state.user);

  const total: number = snacksCart.reduce((acc, cur): number => {
    const price = Number(cur.price);
    return price + acc;
  }, 0);

  const totalFormatted: string = total.toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumIntegerDigits: 2,
  });

  return (
    <ContainerSummaryCart>
      <div>
        <p>Total</p>
        <p>{totalFormatted}</p>
      </div>
    </ContainerSummaryCart>
  );
};
