// features/tasks/context/TaskContext.tsx
import { Task, TaskFilter, TaskGroup, TaskStatus } from '@/features/tasks/domain/task.types';
import {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  useEffect,
} from 'react';
import { TaskService } from '../service/TaskService';

interface TaskContextType {
  tasks: TaskGroup;
  filteredTasks: Task[];
  filter: TaskFilter;
  setFilter: (f: TaskFilter) => void;
  refreshTasks: () => Promise<void>;
  loading: boolean;
  error: Error | null;
}

const TaskContext = createContext<TaskContextType | null>(null);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTask must be used within TaskProvider');
  return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskGroup>({
    pending: [],
    done: [],
  });
  const [filter, setFilter] = useState<TaskFilter>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const refreshTasks = async () => {
    setLoading(true);
    try {
      const data: TaskGroup = await TaskService.getAll();
      setTasks(data);
    } catch (err) {
      if (err instanceof Error) setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  const filteredTasks = useMemo(() => {
    let list: Task[] = [];

    if (filter.status === TaskStatus.DONE) {
      list = tasks.done;
    }
    if (filter.status === TaskStatus.PENDING) {
      list = tasks.pending;
    }

    if (filter.status !== TaskStatus.PENDING
      && filter.status !== TaskStatus.DONE) {
      list = [...tasks.pending, ...tasks.done];
    }


    return list.filter((task: Task) => {
      const matchCategory = !filter.categoryId || task.categoryId === filter.categoryId;
      return matchCategory;
    });

  }, [tasks, filter]);

  return <TaskContext.Provider value={{
    tasks,
    filteredTasks,
    loading,
    error,
    refreshTasks,
    filter,
    setFilter,
  }}>{children}</TaskContext.Provider>;
};
