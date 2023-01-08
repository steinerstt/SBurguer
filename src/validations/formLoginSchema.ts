import * as yup from "yup";
import { SchemaOf } from "yup";

interface iFormLogin {
  email: string;
  password: string;
}

export const formLoginSchema: SchemaOf<iFormLogin> = yup.object().shape({
  email: yup
    .string()
    .email("Informe um email válido")
    .max(72, "Deve ter no máximo 72 caracteres")
    .trim()
    .required("Email obrigatório"),
  password: yup
    .string()
    .min(6, "Deve ter no mínimo 6 caracteres")
    .max(120, "Deve ter no máximo 120 caracteres")
    .trim()
    .required("Senha obrigatória"),
});
