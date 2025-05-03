import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    useMemo,
  } from 'react';
  import { Task } from '../types/Task';
  import useFetch from '../hooks/useFetch';
  import { AppConfig } from '../config/AppConfig';
  
  type TaskGroup = {
    done: Task[];
    pending: Task[];
  };
  
  interface TaskFilter {
    status?: 'pending' | 'done';
    categoryId?: string;
  }
  
  interface TaskContextType {
    tasks: TaskGroup;
    filteredTasks: Task[];
    loading: boolean;
    error: Error | null;
    refreshTasks: () => Promise<void>;
    filter: TaskFilter;
    setFilter: (filter: TaskFilter) => void;
  }
  
  const TaskContext = createContext<TaskContextType | null>(null);
  
  export const useTask = () => {
    const ctx = useContext(TaskContext);
    if (!ctx) throw new Error('useTask must be used within TaskProvider');
    return ctx;
  };
  
  export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<TaskGroup>({ done: [], pending: [] });
    const [filter, setFilter] = useState<TaskFilter>({});
    const { loading, error, executeFetch } = useFetch<TaskGroup>(AppConfig.TASKS_URL);
  
    const refreshTasks = async () => {
      const fetched = await executeFetch();
      if (fetched) setTasks(fetched);
    };
  
    useEffect(() => {
      refreshTasks();
    }, []);
  
    const filteredTasks = useMemo(() => {
      let list: Task[] = [];

  
      if (filter.status === 'done') {
        list = tasks.done;
      } else if (filter.status === 'pending') {
        list = tasks.pending;
      } else {
        list = [...tasks.pending, ...tasks.done];
      }

  
      return list.filter((task) => {
        const matchCategory = !filter.categoryId || task.category.id === filter.categoryId;
        return matchCategory;
      });
      
    }, [tasks, filter]);
  
    return (
      <TaskContext.Provider
        value={{
          tasks,
          filteredTasks,
          loading,
          error,
          refreshTasks,
          filter,
          setFilter,
        }}
      >
        {children}
      </TaskContext.Provider>
    );
  };
  