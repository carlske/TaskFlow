import { createContext, useContext, useEffect, useState } from 'react';
import { CategoryService } from '@/features/categories/service/CategoryService';
import { CategoryContextType, CategoryForm } from '@/types/Category';

const CategoryContext = createContext<CategoryContextType | null>(null);

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) throw new Error('useCategory must be used within CategoryProvider');
  return context;
};

export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<CategoryForm[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);



  const refreshCategories = async () => {
    const fetched = await CategoryService.getAll();
    if (fetched) setCategories(fetched);
    setLoading(true)
    try {
      const fetched = await CategoryService.getAll();
      if (fetched) setCategories(fetched);
    } catch (err) {
      if (err instanceof Error) setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, loading, error, refreshCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
