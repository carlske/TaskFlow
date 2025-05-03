import { Card, Typography, Button } from '@mui/material';
import { useTask } from '../../../context/TaskContext';
import { Task, TaskStatus } from '../../../types/Task';
import useFetch from '../../../hooks/useFetch';
import { AppConfig } from '../../../config/AppConfig';

const TaskItem = ({ task }: { task: Task }) => {
    const { refreshTasks } = useTask();

    const { executeFetch: markDoneFetch } = useFetch<Task>(AppConfig.TASKS_DONE_URL);
    const { executeFetch: deleteFetch } = useFetch<Task>(AppConfig.TASKS_DELETE_URL);

    const handleMarkAsDone = async () => {
        const result = await markDoneFetch({
            method: 'PUT',
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
            mb: 2, p: 2, background: `${task.category.color}`,
            borderRadius: '12px',
        }}>
            <p
                style={{
                    backgroundColor: task.color,
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    display: 'inline-block',
                }}
            />
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2">Categoría: {task.category.name}</Typography>
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
