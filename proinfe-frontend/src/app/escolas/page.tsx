"use client";

import { getEscolas } from "@/app/escolas/services/api";
import PessoaTable from "./components/pessoaTable";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default async function EscolasPage() {
  const escolas = await getEscolas();
  console.log(escolas);
  return (
    <Grid container spacing={2} sx={{ width: "100%" }}>
      <Grid size={{ md: 8 }}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid size={{ md: 4 }}></Grid>
      <Grid size={{ md: 12 }}>
        <PessoaTable data={escolas} />
      </Grid>
    </Grid>
  );
}
