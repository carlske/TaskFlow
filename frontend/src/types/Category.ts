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
  categories: Category[] | null;
  loading: boolean;
  error: Error | null;
  refreshCategories: () => Promise<void>;
}

export interface CategotyFormSuccess {
  onSuccess: (result: { added: boolean }) => void;
}

export type CategoryFormSuccessHandler = (info: { added: boolean }) => void;
