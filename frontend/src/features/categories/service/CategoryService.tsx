import { AppConfig } from "@/config/AppConfig";
import { CreateCategoryProps } from "@/types/Category";

export const CategoryService = {

    getAll: async () => {
        const response = await fetch(AppConfig.CATEGORIES_URL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) throw new Error('Error categories');
        return response.json();
    },

    create: async (category: CreateCategoryProps) => {
        const response = await fetch(AppConfig.CATEGORIES_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(category)
        });

        if (!response.ok) throw new Error('Error categories');
        return response.json();
    }

}




