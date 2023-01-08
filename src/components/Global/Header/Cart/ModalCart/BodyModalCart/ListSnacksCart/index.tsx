import { iListSnacksCartProps } from "./@types";
import { CardSnackCart } from "./CardSnackCart";
import { ContainerListSnacksCart } from "./styles";

export const ListSnacksCart = ({ snacks }: iListSnacksCartProps) => {
  return (
    <ContainerListSnacksCart>
      {snacks.map((snack, index) => (
        <CardSnackCart key={index} snack={snack} />
      ))}
    </ContainerListSnacksCart>
  );
};
