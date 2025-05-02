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
```

### Frontend (React)

```bash
cd apps/frontend
pnpm dev         # Start the React dev server
```

### Backend (Express + TypeScript)

```bash
cd apps/backend
pnpm dev         # Start with Nodemon
pnpm build       # Compile TypeScript
pnpm test        # Run tests with Vitest
```

### TypeORM Migrations

```bash
pnpm migration:run                       # Run migrations
pnpm migration:generate -n YourMigrationName
pnpm migration:create src/migration/NewMigration
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
  - "apps/*"
  - "packages/*"
```

## 📄 Environment Variables

Add `.env` files in the respective apps:

```env
# apps/backend/.env
PORT=3000
DATABASE_URL=sqlite://db.sqlite
```

## 🐳 Docker (optional)

If you use Docker for local services:

```bash
docker-compose up -d
```
