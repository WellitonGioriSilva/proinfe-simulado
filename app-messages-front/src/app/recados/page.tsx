"use client";

import TableComponent from "@/components/table";
import Data from "./interfaces/data.interface";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ResponseDto } from "@/common/dto/Response.dto";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";
import AlertDialog from "@/components/Dialog";

export default function RecadosList() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [data, setData] = useState<ResponseDto<Data[]> | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  async function handleSearch() {
    const params = new URLSearchParams({
      nome: search,
    });

    const response = await fetch(
      `http://localhost:3001/pessoas?${params.toString()}`,
      { cache: "no-store" }
    );

    const json: ResponseDto<Data[]> = await response.json();
    setData(json);
  }

  function handleNew() {
    router.push("/recados/new");
  }
  function handleEdit(row: Data) {
    router.push(`/recados/edit/${row.id}`);
  }
  async function handleDelete(id: number) {
    if (!id) return;

    const response = await fetch(`http://localhost:3001/pessoas/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(response);
      throw new Error("Erro ao deletado os dados");
    }

    alert("Pessoa deletada com sucesso!");
    setDeleteId(null);
    handleSearch();
  }

  function handleOpenDialog(row: Data) {
    setDeleteId(row.id);
    setOpenDialog(true);
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div>
      <AlertDialog
        descricao="Deseja realmente deletar essa pessoa?"
        title="Pergunta"
        openDialog={openDialog}
        onClose={() => setOpenDialog(false)}
        onDelete={() => {
          setOpenDialog(false);
          handleDelete(deleteId ?? 0);
        }}
      />
      <Grid container spacing={2}>
        <Grid size={8}>
          <TextField
            id="name-search"
            label="Nome"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid size={2}>
          <Button
            sx={{ height: "100%", width: "100%" }}
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </Grid>
        <Grid size={2}>
          <Button
            sx={{ height: "100%", width: "100%" }}
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            onClick={handleNew}
          >
            Novo
          </Button>
        </Grid>
        <Grid size={12}>
          <TableComponent
            rows={data?.data ?? []}
            columns={[
              { id: "id", label: "Id", minWidth: 170 },
              { id: "nome", label: "Nome", minWidth: 170 },
              { id: "email", label: "Email", minWidth: 100 },
              {
                id: "createdAt",
                label: "Data de Criação",
                minWidth: 170,
                format: (value: string) =>
                  new Date(value).toLocaleDateString("pt-BR"),
              },
              {
                id: "acoes",
                label: "Ações",
                minWidth: 100,
                render: (row) => (
                  <>
                    <IconButton color="primary" onClick={() => handleEdit(row)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleOpenDialog(row)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                ),
              },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
}
