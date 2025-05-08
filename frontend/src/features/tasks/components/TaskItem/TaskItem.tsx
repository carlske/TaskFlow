import { Card, Typography, Button } from '@mui/material';
import { useTask } from '@/features/tasks/context/TaskContext';
import { Task, TaskStatus } from '@/types/Task';
import TagCategory from '@/shared/components/TagCategory/TagCategory';
import { TaskService } from '@/features/tasks/service/TaskService';


interface TaskItemProps {
    task: Partial<Task>;
}
const TaskItem = ({ task }: TaskItemProps) => {
    const { refreshTasks } = useTask();

    const handleMarkAsDone = async () => {
        try {
            const response = await TaskService.markAsDone({ id: task.id })
            if (response) {
                await refreshTasks();
            }
        } catch (e: any) {
            console.error(e)
        }
    }

    const handleMarkAsDelete = async () => {
        try {
            if (!task.id) return;
            const response = await TaskService.delete({ id: task.id })

            if (response) {
                await refreshTasks();
            }
        } catch (e: any) {
            console.error(e)
        }
    }

    return (
        <Card sx={{
            mb: 2, p: 2,
            borderRadius: '12px',
            border: "1.5px solid",
            borderColor: `${task.color}`
        }}>
            <Typography variant="h6">{task.title}</Typography>
            {task.category && (
                <TagCategory
                    description={task.category.name}
                    color={task.category.color}
                />
            )}
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
