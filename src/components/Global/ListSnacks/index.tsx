import { ContainerWrapper } from "../../../styles/components/Containers";
import { iListSnacksProps } from "./@types";
import { CardSnack } from "./CardSnack";
import { ContainerListSnacks } from "./styles";

export const ListSnacks = ({ snacks }: iListSnacksProps) => {
  return (
    <ContainerWrapper>
      <ContainerListSnacks>
        {snacks.map((snack) => (
          <CardSnack key={snack.id} snack={snack} />
        ))}
      </ContainerListSnacks>
    </ContainerWrapper>
  );
};
