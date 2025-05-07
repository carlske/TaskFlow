import { FormEvent, useState } from 'react'
import { TextField, Button } from '@mui/material'
import styles from './CategoryForm.module.css'
import { MuiColorInput } from 'mui-color-input'
import useFetch from '../../../hooks/useFetch'
import { AppConfig } from '../../../config/AppConfig'
import { CategotyFormSuccess, CreateCategory } from '../../../types/Category'
import { useCategory } from '../../../context/CategoryContext'



const CategoryForm = ({ onSuccess }: CategotyFormSuccess) => {
  const [title, setTitle] = useState('')
  const [color, setColor] = useState('')

  const { refreshCategories } = useCategory();

  const { executeFetch } = useFetch<CreateCategory>(AppConfig.CATEGORIES_URL);

  const handleSubmit = async (e : FormEvent) => {
    e.preventDefault();

    const newCategory: CreateCategory = {
      name: title,
      color: color
    };

    const result = await executeFetch({
      method: 'POST',
      body: newCategory,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (result) {
      refreshCategories()
      onSuccess({ added: true });
    }
    
    onSuccess({ added: false });
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
