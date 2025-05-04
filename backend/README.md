# Monorepo TaskFlow -  Backend

This repository is a **pnpm workspaces** monorepo that includes:

-  **Frontend**: React + Vite (`/frontend`)
-  **Backend**: Express + TypeScript + TypeORM + SQLite (`/backend`)
-  **Package Management**: pnpm
-  **Containers**: Docker (optional, for deployment)

---


## 🚀 Main Commands

### Backend (Express + TypeScript)

```bash
cd /backend
pnpm dev         # Start with Nodemon
pnpm build       # Compile TypeScript
pnpm test        # Run tests with Vitest
```

### TypeORM Migrations (Default categories)

```bash
pnpm migration:run                     
```

## 🧪 Testing

We use **Vitest** for unit and integration tests in the backend.

```bash
pnpm test
```

