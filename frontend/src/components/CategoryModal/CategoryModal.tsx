import { Box, Button, Modal, Typography } from "@mui/material"
import { useState } from "react";
import style from './CategoryModal.module.css'
import CategoryForm from "../CategoryForm/CategoryForm";
import { useCategory } from "../../context/CategoryContext";

const CategoryModal = () => {
  const [open, setOpen] = useState(false);

  const { refreshCategories  } = useCategory();



  const handleCategorySuccess = ({ added }: { added: boolean }) => {
    if (added) {
      refreshCategories()
    }
    setOpen(false)
  };

  const handleClose = () => setOpen(false)

  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Agregar Nota
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="agrega nueva categoria"
        aria-describedby="agrega una nueva a categoria"
      >
        <Box className={style.modalBox}>
          <Typography variant="h6" component="h2">
            Agregar nueva Categoria
          </Typography>
          <CategoryForm onSuccess={handleCategorySuccess}></CategoryForm>
        </Box>
      </Modal>
    </div>
  );
};

export default CategoryModal;
