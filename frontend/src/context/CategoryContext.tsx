import { createContext, useContext, useEffect, useState } from 'react';
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

  const { data, loading, error, executeFetch } = useFetch<Category[]>(AppConfig.CATEGORIES_URL);

  const refreshCategories = async () => {
    try {
      executeFetch()
    } catch (e) {
      console.error('Error refreshing categories:', e);
    }
  };

  useEffect(() => {
    refreshCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{  loading, error, data, refreshCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

