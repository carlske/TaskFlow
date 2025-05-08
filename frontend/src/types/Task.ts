export enum TaskStatus {
  PENDING = 'pending',
  DONE = 'done',
}

export interface TaksHeadersProps {
  value: TaskStatus;
  onChange: (TaskStatus) => void;
}

export interface CategoryTask {
  id: string;
  name: string;
  color: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  status: 'pending' | 'done';
  color: string;
  description: string;
  createdAt: string;
  category: CategoryTask;
}


export interface TaskCreateForm {
  title: string;
  description: string;
  category: string;
}


export interface TaskUpdateForm {
  id: string;
}