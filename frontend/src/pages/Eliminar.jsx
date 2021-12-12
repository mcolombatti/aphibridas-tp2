import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useEmpleados, EmpleadosProvider } from '../context/Products.Context';
export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const { empleados,remove } = useEmpleados();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    remove(props.empleado)
  };

  return (
    <div>
      <Button variant="outlined" color="error" onClick={handleClickOpen}>
        Eliminar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           ¿Estas seguro que deseas eliminar el empleado?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose} autoFocus>
           Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}