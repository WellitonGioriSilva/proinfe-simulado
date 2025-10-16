import * as Yup from "yup";

export const escolaSchema = Yup.object().shape({
  nome: Yup.string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(255, "O nome deve ter no máximo 100 caracteres"),
  cidade: Yup.string()
    .required("A cidade é obrigatória")
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(255, "O nome deve ter no máximo 100 caracteres"),
  uf: Yup.string()
    .required("O UF é obrigatório")
    .length(2, "O UF deve ter exatamente 2 caracteres"),
});
