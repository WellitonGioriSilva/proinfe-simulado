"use client";

import { getEscolas } from "@/app/escolas/services/api";
import PessoaTable from "./components/pessoaTable";

export default async function EscolasPage() {
  const escolas = await getEscolas();
  console.log(escolas);
  return (
    <div>
      <h1>Escolas</h1>
      <PessoaTable />
      <pre>{JSON.stringify(escolas, null, 2)}</pre>
    </div>
  );
}
