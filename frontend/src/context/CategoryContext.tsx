import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Category, CategoryContextType } from '../types/Category';
import useFetch from '../hooks/useFetch';
import { AppConfig } from '../config/AppConfig';

const CategoryContext = createContext<CategoryContextType | null>(null);

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) throw new Error('useCategory must be used within CategoryProvider');
  return context;
};

export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { loading, error, executeFetch } = useFetch<Category[]>(AppConfig.CATEGORIES_URL);

  const refreshCategories = async () => {
    const fetched = await executeFetch();
    if (fetched) setCategories(fetched);
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
