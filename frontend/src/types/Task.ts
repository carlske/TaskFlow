export enum TaskStatus {
  PENDING = 'pending',
  DONE = 'done',
}

export interface TaskFormProps {
  onSuccess?: () => void
}

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  category: string;
}
