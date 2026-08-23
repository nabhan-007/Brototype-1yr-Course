# Phase 7: Schema Design & Indexes

## Schema Design Basics
- Dynamic schema: docs in same collection can have different fields
- MongoDB = flexible, no migrations; SQL = rigid, enforced schema
- No foreign keys — relationships handled via embedding or referencing

## Embedding vs Referencing
| Factor | Embed | Reference |
|---|---|---|
| Relationship | 1-to-few | 1-to-many / many-to-many |
| Access pattern | Read together | Read separately |
| Data growth | Small, bounded | Large, unbounded |
| Advantage | Single read, no JOINs | No duplication, no 16MB bloat |
| Disadvantage | 16MB doc limit risk | Requires $lookup (slower) |

## Indexes
- Speed up read queries by avoiding COLLSCAN
- `createIndex({ field: 1 })` — ascending; `{ field: -1 }` — descending
- Default `_id` index exists on every collection (always unique)

### Index Types
- **Single-field** — one field
- **Compound** — multiple fields (works LEFT TO RIGHT — can't skip first field)
- **Text** — full-text search
- **Geospatial** — location queries

### Compound Index Rule
- `{ city: 1, age: -1 }` → works for `city` alone, or `city + age`
- Does NOT work for `age` alone (skips first field)

### Clustered vs Non-Clustered
- RDBMS: clustered = data in index order (one per table); non-clustered = separate structure
- MongoDB: Clustered Collections (v6.0+) store data in `_id` order on disk

### Best Practices
- Index frequently queried fields
- Don't over-index (slows writes)
- Use `explain("executionStats")` to verify (IXSCAN = good, COLLSCAN = bad)
- **Covered query** = answered entirely from index, no doc fetch needed (fastest)

## Quiz: 8.5/10
- Q3 wrong: compound index left-to-right rule
- Q10 wrong: 50 addresses per employee = reference, not embed (too many for embedding)
