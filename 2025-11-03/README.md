# Deno Project

This is a simple Deno project with a basic HTTP server.

## Requirements

## Requirements

- Deno installed on your system (https://deno.land/#installation)

## Running the project

To start the server:
```bash
deno task start
```

For development with watch mode:
```bash
deno task dev
```

The server will run on http://localhost:8000

---

## Prisma (this folder)

The Prisma schema for this project is in `schema.prisma`.

**Quick commands (run from `2025-11-03` or provide `--schema`):**

```powershell
# Validate schema
npx prisma validate --schema .\schema.prisma

# Generate client
npx prisma generate --schema .\schema.prisma

# Run migrations (if you use migrations)
npx prisma migrate dev --schema .\schema.prisma --name init

# Open Prisma Studio
npx prisma studio --schema .\schema.prisma
```

**.env / DATABASE_URL**
- The project reads environment variables from the repository root `.env` by default. The repo is configured to use `DATABASE_URL="file:./2025-11-03/dev.db"` in the root `.env` so the schema resolves to a local SQLite file inside this folder.
- Avoid having multiple `.env` files with the same variables (Prisma will complain about conflicts). If you need a local override, update the single `.env` at the repository root.

**Generator / Client**
- The Prisma client is generated to the `client` folder (as set in `schema.prisma`).
- The schema uses `runtime = "deno"` — the generated client targets Deno. If you change runtime, re-run `npx prisma generate`.

**Troubleshooting**
- `Error: There is a conflict between env var` → check for duplicate `.env` files and consolidate `DATABASE_URL` into one file (prefer repo root).
- `could not find schema.prisma` → either run commands from this folder or pass `--schema <path>`.

If you want, I can also add a tiny example script showing how to import/use the generated Deno client.