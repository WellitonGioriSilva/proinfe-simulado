"use client";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import { pessoaSchema } from "../dto/pessoaSchema";
import { useState } from "react";

export default function RecadosNovo() {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const router = useRouter();

  function handleReturn() {
    router.push("/recados");
  }

  async function handleSave() {
    try {
      await pessoaSchema.validate(form, { abortEarly: false });

      const response = await fetch("http://localhost:3001/pessoas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar os dados");
      }

      alert("Pessoa salva com sucesso!");
      handleReturn();
    } catch (error) {
      if (error.name === "ValidationError") {
        // Erros do Yup
        alert(error.errors.join("\n"));
      } else {
        console.error(error);
        alert("Ocorreu um erro ao salvar");
      }
    }
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid size={4}>
          <TextField
            sx={{ width: "100%" }}
            id="nome"
            label="Nome"
            variant="outlined"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
          />
        </Grid>
        <Grid size={4}>
          <TextField
            sx={{ width: "100%" }}
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </Grid>
        <Grid size={4}>
          <TextField
            sx={{ width: "100%" }}
            id="senha"
            label="Senha"
            variant="outlined"
            type="password"
            value={form.senha}
            onChange={(e) => setForm({ ...form, senha: e.target.value })}
          />
        </Grid>

        <Grid sx={{ marginTop: 10 }} size={2}>
          <Button
            sx={{ height: "100%" }}
            variant="contained"
            color="success"
            startIcon={<SaveIcon />}
            onClick={handleSave}
          >
            Novo
          </Button>
        </Grid>
        <Grid sx={{ marginTop: 10 }} size={2}>
          <Button
            sx={{ height: "100%" }}
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            onClick={handleReturn}
          >
            Voltar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
