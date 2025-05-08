import { FormEvent, useState } from 'react'
import { TextField, Button } from '@mui/material'
import styles from './CategoryForm.module.css'
import { MuiColorInput } from 'mui-color-input'
import { CategotyFormSuccess, CreateCategoryProps } from '@/types/Category'
import { useCategory } from '@/features/categories/context/CategoryContext'
import { CategoryService } from '@/features/categories/service/CategoryService'



const CategoryForm = ({ onSuccess }: CategotyFormSuccess) => {
  const [title, setTitle] = useState('')
  const [color, setColor] = useState('')

  const { refreshCategories } = useCategory();


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newCategory: CreateCategoryProps = {
      name: title,
      color: color
    };

    try {
      const result = await CategoryService.create(newCategory);
      if (result) {
        refreshCategories()
        onSuccess({ added: true });
      }
    } catch (e: any) {
      onSuccess({ added: false });
    }

  };


  const handleChangeColor = (color: any) => {
    setColor(color)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField label="Categoria" value={title} onChange={e => setTitle(e.target.value)} fullWidth required />
      <MuiColorInput value={color} onChange={handleChangeColor} />

      <Button type="submit" variant="contained" fullWidth>
        Crea Nueva Categoria
      </Button>
    </form>
  )
}

export default CategoryForm
