export interface Category {
  id: number;
  name: string;
  color?: string;
}

export interface CreateCategory {
  name: string;
  color?: string;
}

export interface CategoryContextType {
  data: Category[] | null;
  loading: boolean;
  error: Error | null;
  refreshCategories: () => Promise<void>;
}