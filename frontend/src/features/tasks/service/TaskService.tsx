import { TaskCreateForm, TaskUpdateForm } from "@/types/Task";
import { AppConfig } from "@/config/AppConfig";

export const TaskService = {

    create: async (body: TaskCreateForm) => {
        const response = await fetch(AppConfig.TASKS_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!response.ok) throw new Error('Error categories');
        return response.json();
    },

    delete: async (body: TaskUpdateForm) => {
        const response = await fetch(AppConfig.TASKS_URL, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (response.status !== 204) throw new Error('Error categories');
        
        return ({'upgraded': true});
    },

    markAsDone: async (body: TaskUpdateForm) => {
        const response = await fetch(AppConfig.TASKS_DONE_URL, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!response.ok) throw new Error('Error categories');
        return response.json();
    },

    getAll: async () => {
        const response = await fetch(AppConfig.TASKS_URL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) throw new Error('Error categories');
        return response.json();
    }
}

