import { iCardSnackCartProps } from "./@types";
import { ButtonRmvToCart } from "./ButtonRmvToCart";
import { ContainerCardSnackCart, ContainerImg, ContainerInfo } from "./styles";

export const CardSnackCart = ({ snack }: iCardSnackCartProps) => {
  const { id, img, name, price } = snack;

  const priceFormatted: string = Number(price).toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumIntegerDigits: 2,
  });

  return (
    <ContainerCardSnackCart>
      <ContainerImg>
        <img src={img} alt={name} />
      </ContainerImg>
      <ContainerInfo>
        <h3>{name}</h3>
        <p>{priceFormatted}</p>
        <ButtonRmvToCart idSnack={id} />
      </ContainerInfo>
    </ContainerCardSnackCart>
  );
};
