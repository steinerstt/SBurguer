import { iCreateAccountProps } from "./@types";
import { Button } from "../../../../../styles/components/Buttons";
import { ContainerCreateAccount } from "./styles";

export const CreteAccount = ({ handleAlterForm }: iCreateAccountProps) => {
  return (
    <ContainerCreateAccount>
      <span>
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </span>

      <Button variant="secondary" type="button" onClick={handleAlterForm}>
        Cadastrar
      </Button>
    </ContainerCreateAccount>
  );
};
