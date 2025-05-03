import { Box, Button, Modal, Typography } from "@mui/material"
import { useState } from "react";
import style from './TaskFormModal.module.css'
import TaskForm from "../TaskForm/TaskForm";

const TaskFormModal = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Agregar Nota
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="agrega nota"
        aria-describedby="agrega una nueva a tu lista"
      >
        <Box className={style.modalBox}>
          <Typography variant="h6" component="h2">
            Agregar Tarea
          </Typography>
          <TaskForm onSuccess={handleClose}></TaskForm>
        </Box>
      </Modal>
    </div>
  );
};

export default TaskFormModal;
