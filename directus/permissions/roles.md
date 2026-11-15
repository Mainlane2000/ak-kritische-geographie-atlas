# Rollen- und Rechtekonzept

- **Public:** ausschließlich `status=published` lesen, keine Schreibrechte.
- **Contributor:** öffentliche Inhalte lesen, eigene Beiträge/Entwürfe einreichen.
- **Editor:** alle redaktionellen Inhalte bearbeiten, Review vorbereiten.
- **Publisher:** Inhalte freigeben und veröffentlichen.
- **Administrator:** technische Administration und Rollenverwaltung.

Regeln: Public darf keine Entwürfe, internen Notizen oder unveröffentlichten Geometrien lesen. Public darf Contributions nur erstellen. Nur Publisher darf `status` auf `published` setzen und `published_at` befüllen. Admin-Token niemals im Browser oder in `NEXT_PUBLIC_*`-Variablen verwenden. Diese Datei beschreibt das Konzept; Directus-Policies müssen in der Instanz eingerichtet und getestet werden.
