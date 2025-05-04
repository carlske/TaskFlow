# Monorepo TaskFlow - Frontend & Backend

This repository is a **pnpm workspaces** monorepo that includes:

-  **Frontend**: React + Vite (`apps/frontend`)
-  **Backend**: Express + TypeScript + TypeORM + SQLite (`apps/backend`)
-  **Package Management**: pnpm
-  **Containers**: Docker (optional, for deployment)

---


## 🚀 Main Commands

### From the root

```bash
pnpm install     # Install all dependencies
pnpm dev         # run frontend and backend
pnpm --filter backend migration:run # install default categories 
```

### Frontend (React)

```bash
cd /frontend
pnpm dev         # Start the React dev server
```

### Backend (Express + TypeScript)

```bash
cd /backend
pnpm dev         # Start with Nodemon
pnpm build       # Compile TypeScript
pnpm test        # Run tests with Vitest
```

### TypeORM Migrations

```bash
pnpm migration:run     # load default categories
```

## 🧪 Testing

We use **Vitest** for unit and integration tests in the backend.

```bash
pnpm test
```

## 🛠️ Workspaces Configuration

```yaml
# pnpm-workspace.yaml
packages:
  - "backend/*"
  - "frontend/*"
```

