import { useTask } from '@/features/tasks/context/TaskContext';
import { useEffect } from 'react';
import { TaskStatus } from '@/types/Task';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ status }: { status: TaskStatus }) => {

  const { filteredTasks, setFilter, loading } = useTask();

  useEffect(() => {
    setFilter({ status: status});
  }, [status]);

  return <section style={{ padding: '1em' }}>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </section>;
};

export default TaskList;
