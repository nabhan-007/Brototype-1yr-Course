# Phase 6: Aggregation Framework

## The Pipeline Concept
- Documents pass through stages sequentially; each stage transforms and passes to next.
- Syntax: `db.collection.aggregate([{stage1}, {stage2}, ...])`

## Key Stages
| Stage | Purpose | SQL equivalent |
|---|---|---|
| `$match` | Filter documents | WHERE |
| `$group` | Group + compute | GROUP BY |
| `$sort` | Order results | ORDER BY |
| `$project` | Shape output (select/compute) | SELECT |
| `$limit` / `$skip` | Pagination | LIMIT/OFFSET |
| `$unwind` | Flatten arrays into docs | UNNEST |
| `$lookup` | Join another collection | JOIN |
| `$addFields` | Add computed fields | computed column |

## Key Rules
- `$match` FIRST — fewer docs flow through later stages (faster)
- `$group` REQUIRES `_id` — the field being grouped by
- Field references use `"$fieldName"` (leading `$` = take field value)
- Non-grouped, non-accumulated fields are LOST after `$group`
- `$lookup` = LEFT OUTER JOIN; result attached as array in `as` field; no match → empty array
- `$addFields` keeps all original fields; `$project` reshapes (can lose fields)

## Accumulators
- `$sum: 1` → count | `$sum: "$field"` → total
- `$avg`, `$min`, `$max` on fields
- `$push: "$field"` → collect into array

## Common Patterns
- Count per group: `[{ $group: { _id: "$status", count: { $sum: 1 } } }]`
- Avg per field: `[{ $group: { _id: "$city", avgAge: { $avg: "$age" } } }]`
- Flatten + count (skill frequency):
  `[{ $unwind: "$skills" }, { $group: { _id: "$skills", count: { $sum: 1 } } }, { $sort: { count: -1 } }]`
- Pagination: `[{ $match: ... }, { $sort: { age: -1 } }, { $limit: 2 }]`
- Computed field: `[{ $addFields: { birthYear: { $subtract: [2026, "$age"] } } }]`

## find() vs aggregate()
- `find()` — simple queries (filter + projection)
- `aggregate()` — grouping, joins, computing, multi-step pipelines

## PENDING PRACTICE (user deferred — do later in mongosh)
1. `$match` all active students
2. `$group` count per status
3. `$group` avg age per city
4. `$unwind` skills + count per skill
5. Multi-stage: match active → sort age desc → limit 2
6. `$project` name + isAdult (age >= 18 via `$gte`)
