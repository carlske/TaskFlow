
export enum TaskStatus {
    PENDING = 'pending',
    DONE = 'done',
}

export interface Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    categoryId: string;
    createdAt: string;
}

export interface CreateTaskDto {
    title: string;
    description?: string;
    categoryId: string;
}

export interface TaskGroup {
    pending: Task[];
    done: Task[];
}

export interface TaskFilter {
    status?: TaskStatus;
    categoryId?: string;
}
