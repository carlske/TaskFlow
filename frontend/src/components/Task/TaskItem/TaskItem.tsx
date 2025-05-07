import { Card, Typography, Button, Tab } from '@mui/material';
import { useTask } from '../../../context/TaskContext';
import { Task, TaskStatus } from '../../../types/Task';
import useFetch from '../../../hooks/useFetch';
import { AppConfig } from '../../../config/AppConfig';
import TagCategory from '../../TagCategory/TagCategory';

const TaskItem = ({ task }: { task: Task }) => {
    const { refreshTasks } = useTask();

    const { executeFetch: markDoneFetch } = useFetch<Task>(AppConfig.TASKS_DONE_URL);
    const { executeFetch: deleteFetch } = useFetch<Task>(AppConfig.TASKS_URL);

    const handleMarkAsDone = async () => {
        const result = await markDoneFetch({
            method: 'PATCH',
            body: { id: task.id },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (result) {
            await refreshTasks();
        }
    };

    const handleMarkAsDelete = async () => {
        await deleteFetch({
            method: 'DELETE',
            body: { id: task.id },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        await refreshTasks();

    };

    return (
        <Card sx={{
            mb: 2, p: 2,
            borderRadius: '12px',
            border: "1.5px solid",
            borderColor: `${task.color}`
        }}>
            <Typography variant="h6">{task.title}</Typography>
            <TagCategory description={task.category.name} color={task.category.color}></TagCategory>

            <Typography variant="body2">Descripción:</Typography>
            <Typography variant="body2">{task.description}</Typography>

            {task.status === TaskStatus.PENDING && (
                <Button onClick={handleMarkAsDone} variant="contained" color="primary">
                    Finalizar
                </Button>
            )}
            {task.status === TaskStatus.DONE && (
                <Button onClick={handleMarkAsDelete} variant="contained" color="primary">
                    Eliminar
                </Button>
            )}
        </Card>
    );
};

export default TaskItem;
