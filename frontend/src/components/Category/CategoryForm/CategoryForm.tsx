import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import styles from './CategoryForm.module.css'
import { MuiColorInput } from 'mui-color-input'
import useFetch from '../../../hooks/useFetch'
import { AppConfig } from '../../../config/AppConfig'
import { CategotyFormSuccess, CreateCategory } from '../../../types/Category'



const CategoryForm = ({ onSuccess }: CategotyFormSuccess) => {
    const [title, setTitle] = useState('')
    const [color, setColor] = useState('')


      const { executeFetch } = useFetch<CreateCategory>(AppConfig.CATEGORIES_URL);

      const handleSubmit = async (e: React.FormEvent) => {
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
          onSuccess({added : true});
        }
      };
      

    const handleChangeColor = (color : any ) => {
        console.log(color)
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
