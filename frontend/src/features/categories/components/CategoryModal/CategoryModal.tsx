import { useState } from "react";
import CategoryForm from "../CategoryForm/CategoryForm";
import BaseModalForm from "@/shared/components/BaseModalForm/BaseModalForm";
import { Button } from "@mui/material";

const CategoryModal = () => {
  const [open, setOpen] = useState(false);


  const handleCategorySuccess = ({ added }: { added: boolean }) => {
    setOpen(added)
  };


  const handleOpen = () => setOpen(true);

  return <>
    <Button variant="contained" onClick={handleOpen}>
      Agregar Categoria
    </Button>
    <BaseModalForm
      titleModal="Agrega una nueva a categoria"
      ariaDescripbedby="agrega una nueva a categoria"
      ariaLabelLedBy="agrega una nueva a categoria"
      isOpen={open}
      setIsOpen={setOpen}>
      <CategoryForm onSuccess={handleCategorySuccess}></CategoryForm>
    </BaseModalForm>
  </>
    ;
};

export default CategoryModal;
