export class AppConfig {
    static readonly API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

    // Endpoints (Categories)
    static readonly CATEGORIES_URL = `${AppConfig.API_BASE_URL}/categories`;

    // Endpoints (Task)
    static readonly TASKS_STATUS_URL = `${AppConfig.API_BASE_URL}/tasks/status`;
    static readonly TASKS_URL = `${AppConfig.API_BASE_URL}/tasks`;
    static readonly TASKS_DONE_URL = `${AppConfig.API_BASE_URL}/tasks/done`;
    static readonly TASKS_DELETE_URL = `${AppConfig.API_BASE_URL}/tasks/delete`;
}
