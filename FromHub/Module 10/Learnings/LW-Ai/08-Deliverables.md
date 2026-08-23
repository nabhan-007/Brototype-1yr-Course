# Phase 8: Deliverables

## Backups & Restore
- `mongodump` — exports to BSON files (binary snapshot)
  - `mongodump --db myDatabase` — entire db
  - `mongodump --db myDatabase --collection students` — specific collection
  - `mongodump --db myDatabase --out C:\backups\` — custom output path
- `mongorestore` — restores from BSON files
  - `mongorestore --db myDatabase C:\backups\myDatabase`
- `mongodump`/`mongorestore` use BSON, not JSON

## Backup Strategies
- Regular scheduled backups via cron/task scheduler
- Replication = live backup (secondaries hold copies)
- Atlas automated snapshots (free tier: continuous backups)
- Replication ≠ backup: replicas also execute accidental deletes

## Completed
- [x] Assignment: Basic exercise MongoDB.pdf
- [x] Video presentation (uploaded)
