import { useEffect, useState } from 'react'
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button
} from '@mui/material'
import styles from './TaskForm.module.css'
import { TaskFormProps } from '../../types/Task'
import { useCategory } from '../../context/CategoryContext'



const TaskForm = ({ onSuccess }: TaskFormProps) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

      const { categories } = useCategory();
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (onSuccess) onSuccess()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <TextField label="Título" value={title} onChange={e => setTitle(e.target.value)} fullWidth required />
            <FormControl fullWidth required>
                <InputLabel>Categoría</InputLabel>
                <Select value={category} onChange={e => setCategory(e.target.value)}>
                    {(categories || []).map((category) => (
                        <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                label="Descripción"
                multiline
                rows={4}
                value={description}
                onChange={e => setDescription(e.target.value)}
                fullWidth
            />
            <Button type="submit" variant="contained" fullWidth>
                Guardar tarea
            </Button>
        </form>
    )
}

export default TaskForm
