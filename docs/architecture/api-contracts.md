# API-Verträge `/api/v1`

Erfolg: `{data, meta?}`. Fehler: `{error:{code,message,details?}}`. GeoJSON-Koordinaten: `[longitude, latitude]`, EPSG:4326.

| Methode | Pfad | Zweck |
|---|---|---|
| GET | `/map/features?bbox=west,south,east,north` | veröffentlichte räumliche Features |
| GET | `/items/{slug}` | Eintragsdetail |
| GET | `/topics` | Themenvokabular |
| GET | `/relations/{id}` | Relation und Endpunkte |
| GET | `/network?item={id}&depth=2` | Netzwerkansicht |
| GET | `/search?q=...` | Volltextsuche |
| GET | `/map/styles` | freigegebene Stile |
| GET | `/map/layers` | freigegebene Layer |
| POST | `/contributions` | öffentliche Einreichung |

Map-Feature enthält `id`, `slug`, `title`, `summary`, `itemType`, `topics`, `geometry`. BBox validieren (vier endliche Zahlen, WGS84-Grenzen, west<east, south<north), Limit und Rate-Limits setzen. Öffentliche Responses müssen serverseitig nur veröffentlichte Datensätze enthalten. Fehlercodes stabil halten: `VALIDATION_ERROR`, `NOT_FOUND`, `RATE_LIMITED`, `INTERNAL_ERROR`.
