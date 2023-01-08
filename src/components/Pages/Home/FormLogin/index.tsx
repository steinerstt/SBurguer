import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { Input } from "../../../Global/Input";
import { Form } from "../../../../styles/components/Form";
import { formLoginSchema } from "../../../../validations/formLoginSchema";
import { Button } from "../../../../styles/components/Buttons";
import { CreteAccount } from "./CreateAccount";
import { api } from "../../../../services/api";
import { useUserStore } from "../../../../stores/useUserStore";
import { iFormLogin, iFormLoginProps, iHandleLoginResponse } from "./@types";

export const FormLogin = ({ handleAlterForm }: iFormLoginProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormLogin>({
    resolver: yupResolver(formLoginSchema),
  });

  const [isLoginIncorrect, setIsLoginIncorrect] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogin = async (loginData: iFormLogin): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await api.post("/login", loginData);
      const { token, user }: iHandleLoginResponse = response.data;
      localStorage.setItem("@sburguer:token", token);
      toast.success("Login realizado com sucesso");
      setUser(user);

      navigate("/dashboard", { replace: true });
    } catch (error) {
      if (isAxiosError(error)) {
        const msgLoginIncorrect: string = "Email or password invalid";
        const msgError: string = error.response?.data.message;

        if (msgError == msgLoginIncorrect) {
          setIsLoginIncorrect(true);
        }
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <h2>Login</h2>
      <Input
        textLabel="Email"
        textRef="email"
        register={register("email")}
        msgError={errors.email?.message}
      />

      <Input
        textLabel="Senha"
        type="password"
        textRef="password"
        register={register("password")}
        msgError={errors.password?.message}
      />

      {isLoginIncorrect && <span>Email ou senha inválidos</span>}

      <Button type="submit" disabled={isLoading}>
        Logar
      </Button>

      <CreteAccount handleAlterForm={handleAlterForm} />
    </Form>
  );
};
