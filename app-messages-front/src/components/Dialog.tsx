import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useEffect } from "react";

interface AlertDialogProps {
  descricao: string;
  title: string;
  openDialog: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function AlertDialog({
  descricao,
  title,
  openDialog,
  onClose,
  onDelete,
}: AlertDialogProps) {
  return (
    <React.Fragment>
      <Dialog
        open={openDialog}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {descricao}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Não</Button>
          <Button onClick={onDelete} autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
