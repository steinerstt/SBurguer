import { useState } from "react";
import { Brand } from "./Brand";
import { FormLogin } from "./FormLogin";
import { FormRegister } from "./FormRegister";
import { ContainerHome, ContainerLoginRegister } from "./styles";

export const Home = () => {
  const [isFormLogin, setIsFormLogin] = useState<boolean>(true);

  const handleAlterForm = (): void => {
    setIsFormLogin(!isFormLogin);
  };

  return (
    <>
      <ContainerHome>
        <ContainerLoginRegister isFormLogin={isFormLogin}>
          {isFormLogin ? (
            <FormLogin handleAlterForm={handleAlterForm} />
          ) : (
            <FormRegister handleAlterForm={handleAlterForm} />
          )}
          <Brand />
        </ContainerLoginRegister>
      </ContainerHome>
    </>
  );
};
