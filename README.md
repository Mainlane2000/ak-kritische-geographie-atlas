# AK Kritische Geographie Köln – Atlas

Monorepo-Starter für eine offene Forschungs- und Wissensplattform.

**Stack:** Next.js, React, TypeScript, MapLibre GL JS, Directus, PostgreSQL + PostGIS, pnpm workspaces.

## Start lokal
```bash
cp .env.example .env
docker compose up -d db directus
pnpm install
pnpm --filter @ak-atlas/web dev
```
Web: http://localhost:3000 · Directus: http://localhost:8055

Migration:
```bash
docker compose exec -T db psql -U atlas -d atlas < database/migrations/001_initial_schema.sql
```

## Enthalten
- `database/migrations/001_initial_schema.sql`: PostGIS-Datenmodell mit räumlichem Index
- `directus/`: Collection-Mapping und Rollen-/Rechtekonzept
- `packages/contracts/`: typisierte API-Verträge
- `apps/web/`: Next.js-App mit erster MapLibre-Karte
- `docs/`: Architektur, API, ADRs, Roadmap und Produktionscheckliste

**Reifegrad:** ausführbares Grundgerüst, kein fertiges Produktionssystem. Directus-Snapshot/Permissions, echte PostGIS-API-Abfragen, Login, Geometrie-Editor, Importworker, Tests und Hosting-Konfiguration sind nächste Schritte. Demo-Punkte sind Platzhalter.
