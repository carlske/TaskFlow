import { Typography } from '@mui/material';
import TaskItem from '../TaskItem/TaskItem';
import { useTask } from '../../../context/TaskContext';
import { useEffect } from 'react';
import { TaskStatus } from '../../../types/Task';

const TaskList = ({ status }: { status: TaskStatus }) => {

  const { filteredTasks, setFilter, loading } = useTask();

  useEffect(() => {
    setFilter({ status: status});
  }, [status]);

  if (loading) return <p>Cargando tareas...</p>;

  if (filteredTasks.length === 0)
    return <Typography>No hay tareas {status === 'pending' ? 'activas' : 'finalizadas'}.</Typography>;

  return (
    <section style={{ padding: '1em' }}>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </section>
  );
};

export default TaskList;
