import * as Yup from "yup";

export const pessoaSchema = Yup.object().shape({
  nome: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  senha: Yup.string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve ter ao menos 8 caracteres")
    .matches(/[A-Z]/, "A senha deve conter ao menos uma letra maiúscula")
    .matches(/[a-z]/, "A senha deve conter ao menos uma letra minúscula")
    .matches(/[@$!%*?&]/, "A senha deve conter ao menos um símbolo"),
});
