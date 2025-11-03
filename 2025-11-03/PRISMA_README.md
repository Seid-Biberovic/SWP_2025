Datei: `schema.prisma` (im selben Ordner)

Kurzbeschreibung

- Dieses Prisma-Schema verwendet SQLite und legt eine lokale Datenbank `dev.db` im Ordner `2025-11-03` an.
- Enthalten sind zwei Beispiel-Modelle: `User` und `Post`.

Schnellstart (Windows PowerShell)

1. Lokale Installation (falls noch nicht installiert):

```powershell
npm init -y
npm install prisma --save-dev
npm install @prisma/client
npx prisma --version
```

2. Prisma initialisieren (falls noch nicht geschehen):

```powershell
npx prisma init --datasource-provider sqlite
```

Achtung: `npx prisma init` erstellt eine `schema.prisma` im Projektstamm; in diesem Fall verwenden wir bereits die bereitgestellte `schema.prisma` im Ordner `2025-11-03`.

3. Migration ausführen (erzeugt `dev.db`):

```powershell
# Stelle sicher, dass du im Ordner mit schema.prisma bist
cd .\2025-11-03
npx prisma migrate dev --name init
```

4. Prisma Client generieren (falls nicht automatisch durch migrate passiert):

```powershell
npx prisma generate
```

5. Kurzer Test (Node/TS):

Erstelle eine kleine Datei `test.js` oder `test.ts`, importiere `@prisma/client` und prüfe, ob du einen User anlegen kannst.

Hinweis

- Wenn du Deno verwendest, ist die Integration mit Prisma Client nicht out-of-the-box. Du kannst die DB (SQLite) mit Prisma lokal verwalten und dann mit Deno über eine passende DB-Bibliothek (z.B. `deno-sqlite`) darauf zugreifen, oder Prisma Client in einem Node-Teil deines Projekts nutzen.
- Diese README erklärt nur das lokale Setup; sichere Migrationen/Production-Einstellungen sind hier nicht abgedeckt.
