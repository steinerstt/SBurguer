import * as yup from "yup";
import { SchemaOf } from "yup";
import { iFormRegister } from "../components/Pages/Home/FormRegister/@types";

export const formRegisterSchema: SchemaOf<iFormRegister> = yup.object().shape({
  name: yup
    .string()
    .min(3, "Deve conter no mínimo 3 caracteres")
    .max(62, "Deve conter no máximo 62 caracteres")
    .trim()
    .required("Nome obrigatório"),
  email: yup
    .string()
    .email("Informe um email válido")
    .max(72, "Deve conter no máximo 72 caracteres")
    .trim()
    .required("Email obrigatório"),
  password: yup
    .string()
    .min(6, "Deve conter no mínimo 6 caracteres")
    .max(120, "Deve conter no máximo 120 caracteres")
    .trim()
    .required("Senha obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("Confirme sua senha"),
});
