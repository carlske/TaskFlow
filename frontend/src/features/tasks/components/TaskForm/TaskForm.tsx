import { useState } from 'react'
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
} from '@mui/material'
import styles from './TaskForm.module.css'
import { useTask } from '@/features/tasks/context/TaskContext'
import { TaskCreateForm } from '@/types/Task'
import { useCategory } from '@/features/categories/context/CategoryContext'
import { FormSuccess } from '@/types/Shared'
import { TaskService } from '@/features/tasks/service/TaskService'

const TaskForm = ({ onSuccess }: FormSuccess) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const { categories } = useCategory();

    const { setFilter, filter, refreshTasks } = useTask();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newCategory: TaskCreateForm = {
            title: title,
            category: category,
            description: description
        };

        try {
            const result = await TaskService.create(newCategory);
            if (result) {
                refreshTasks()
                setFilter({ ...filter, categoryId: undefined });
                if (onSuccess) onSuccess()
            }

        } catch (error: any) {

        }
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
