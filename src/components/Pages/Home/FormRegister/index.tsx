import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { Button } from "../../../../styles/components/Buttons";
import { Form } from "../../../../styles/components/Form";
import { formRegisterSchema } from "../../../../validations/formRegisterSchema";
import { Input } from "../../../Global/Input";
import { api } from "../../../../services/api";
import { ButtonToLogin, ContainerTitleButton } from "./styles";
import { iFormRegister, iFormRegisterProps } from "./@types";

export const FormRegister = ({ handleAlterForm }: iFormRegisterProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormRegister>({
    resolver: yupResolver(formRegisterSchema),
  });

  const [isRegisterIncorrect, setIsRegisterIncorrect] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async (dataRegister: iFormRegister): Promise<void> => {
    setIsLoading(true);
    try {
      await api.post("/users", dataRegister);
      toast.success("Cadastro realizado com sucesso");
      handleAlterForm();
    } catch (error) {
      if (isAxiosError(error)) {
        const msgEmailRegistered: string = "Email already registered";
        const msgError: string = error.response?.data.message;

        if (msgError === msgEmailRegistered) {
          setIsRegisterIncorrect(true);
        }
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleRegister)}>
      <ContainerTitleButton>
        <h2>Register</h2>
        <ButtonToLogin type="button" onClick={handleAlterForm}>
          Retorna para login
        </ButtonToLogin>
      </ContainerTitleButton>
      <Input
        textLabel="Nome"
        textRef="name"
        register={register("name")}
        msgError={errors.name?.message}
      />
      <Input
        type="email"
        textLabel="Email"
        textRef="email"
        register={register("email")}
        msgError={
          isRegisterIncorrect ? "Email já cadastrado" : errors.email?.message
        }
      />
      <Input
        type="password"
        textLabel="Senha"
        textRef="password"
        register={register("password")}
        msgError={errors.password?.message}
      />
      <Input
        type="password"
        textLabel="Confirmar Senha"
        textRef="confirmPassword"
        register={register("confirmPassword")}
        msgError={errors.confirmPassword?.message}
      />

      <Button type="submit" disabled={isLoading}>
        Cadastrar
      </Button>
    </Form>
  );
};
