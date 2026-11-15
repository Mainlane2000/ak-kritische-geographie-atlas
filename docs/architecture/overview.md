# Architektur

Next.js stellt Website und serverseitige `/api/v1`-Schicht bereit. MapLibre rendert räumliche Daten. Directus verwaltet redaktionelle Inhalte, Nutzer und Freigaben. PostgreSQL/PostGIS speichert Inhalte und Geometrien. Worker übernehmen später Datenimporte, Validierung, Geokodierung und Cache-Neuaufbau. S3-kompatibler EU-Object-Storage hält Medien und Importdateien.

Datenfluss: Redaktion → Directus → PostgreSQL/PostGIS. Browser → Next.js API → geprüfte Abfragen. Import-Worker → Validierung/Provenienz → Datenbank/Object Storage. Keine privilegierten Datenbank- oder Directus-Zugangsdaten im Browser.

MVP: GeoJSON und Bounding-Box-Abfragen; später MVT/Vector Tiles. PostGIS GiST-Index und `ST_Intersects` nutzen. Hosting managed in EU-Region: Next.js-App, Directus-Container/Cloud, Managed PostgreSQL mit PostGIS, Object Storage, CDN, Backups, Staging/Production, Secret Management und Monitoring.
