import { iCardSnackProps } from "./@types";
import { ButtonAddToCart } from "./ButtonAddToCart";
import { ContainerBody, ContainerCardSnack, ContainerImg } from "./styles";

export const CardSnack = ({ snack }: iCardSnackProps) => {
  const { img, name, category, price } = snack;
  const priceFormatted: string = Number(price).toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumIntegerDigits: 2,
  });

  return (
    <ContainerCardSnack>
      <ContainerImg>
        <p>{category}</p>
        <img src={img} alt={`${name} - ${category}`} />
      </ContainerImg>
      <ContainerBody>
        <h2>{name}</h2>
        <p>{priceFormatted}</p>

        <ButtonAddToCart snack={snack} />
      </ContainerBody>
    </ContainerCardSnack>
  );
};
