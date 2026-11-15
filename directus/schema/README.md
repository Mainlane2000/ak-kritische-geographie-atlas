# Directus-Schema-Mapping

Die SQL-Migration definiert die relationale Kernstruktur. Directus wird auf dieselbe PostgreSQL-Datenbank gesetzt. Collections: `atlas_items`, `topics`, `item_topics`, `spatial_features`, `relations`, `sources`, `item_sources`, `map_layers`, `map_views`, `contributions`, `datasets`.

Wichtige Felder: `atlas_items.item_type` = place/project/event/publication/actor/concept; `status` = draft/review/published/archived; JSON-Felder `body`, `config`, `filters`, `payload`, `metadata`. `spatial_features.geom` ist PostGIS `geometry(Geometry,4326)`. Directus ist kein vollwertiges GIS; Geometrie-Editing über eigenen geschützten Endpoint oder GIS-Integration lösen.

Nach Konfiguration in einer Entwicklungsinstanz Snapshot erzeugen und versionieren:
```bash
npx directus schema snapshot ./directus/schema/snapshot.yaml
npx directus schema apply ./directus/schema/snapshot.yaml
```
Snapshot vor Übernahme in Zielumgebungen gegen die eingesetzte Directus-Version prüfen.
