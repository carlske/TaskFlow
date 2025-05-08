export interface CategoryForm {
  id: string;
  name: string;
  color?: string;
}

export interface CreateCategoryProps {
  name: string;
  color?: string;
}

export interface CategoryContextType {
  categories: CategoryForm[] | null;
  loading: boolean;
  error: Error | null;
  refreshCategories: () => Promise<void>;
}

export interface CategotyFormSuccess {
  onSuccess: (result: { added: boolean }) => void;
}

export type CategoryFormSuccessHandler = (info: { added: boolean }) => void;


