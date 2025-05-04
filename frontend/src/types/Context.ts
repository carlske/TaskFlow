import { Task } from "./Task";


export type TaskGroup = {
    done: Task[];
    pending: Task[];
};

export interface TaskFilter {
    status?: 'pending' | 'done';
    categoryId?: string;
}

export interface TaskContextType {
    tasks: TaskGroup;
    filteredTasks: Task[];
    loading: boolean;
    error: Error | null;
    refreshTasks: () => Promise<void>;
    filter: TaskFilter;
    setFilter: (filter: TaskFilter) => void;
}