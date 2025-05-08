import { Button } from "@mui/material"
import { useState } from "react";
import TaskForm from "@/features/tasks/components/TaskForm/TaskForm"
import BaseModalForm from "@/shared/components/BaseModalForm/BaseModalForm";

const TaskFormModal = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return <>
      <Button variant="contained" onClick={handleOpen}>
        Agregar Tarea
      </Button>

      <BaseModalForm
        titleModal="Agrega una nueva Tarea"
        ariaDescripbedby="agrega una nueva a Tarea"
        ariaLabelLedBy="agrega una nueva a Tarea"
        isOpen={open}
        setIsOpen={setOpen}>
        <TaskForm onSuccess={handleClose}></TaskForm>
      </BaseModalForm>

    </>;
};

export default TaskFormModal;
