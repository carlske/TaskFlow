import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    useMemo,
} from 'react';
import { Task, TaskStatus } from '../types/Task';
import useFetch from '../hooks/useFetch';
import { AppConfig } from '../config/AppConfig';
import { TaskContextType, TaskFilter, TaskGroup } from '../types/context';


const TaskContext = createContext<TaskContextType | null>(null);

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error('useTask must be used within TaskProvider');
    return context;
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
