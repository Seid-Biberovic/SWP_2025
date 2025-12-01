# SWP_2025 — Project Workspace

This repository contains multiple small projects and Prisma schema files used for the course.

Quick commands (run from repository root):

```powershell
# generate prisma client for the schema in 2025-11-03
npx prisma generate --schema=2025-11-03/schema.prisma

# run Node-based seed script
npm run seed:node

# run Deno-based seed script (requires Deno)
npm run seed:deno

# run Deno tests
npm run test:deno
```

Notes:
- Environment variables are read from the root `.env` file. Keep secrets out of the repo.
- The Prisma client for the Deno runtime is generated into `2025-11-03/client`.

If you want I can also:
- run `npm install` (for Node devDependencies)
- run the seed script and show sample DB rows
- add a small Deno example that imports the generated client
