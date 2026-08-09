# Phase 5: CRUD Operations

Practice DB: `school` collection: `students`

## MongoDB Data Types
- String, Number (Int32/Int64/Double/Decimal128), Boolean, Array, Object (embedded doc), ObjectId, Date (ISODate), Null, Binary, Timestamp
- **Type matters in queries:** `find({ age: "25" })` (string) won't match `age: 25` (number)

## Create
- `insertOne(doc)` → `{ acknowledged: true, insertedId }`
- `insertMany([doc1, doc2])` → `{ acknowledged: true, insertedIds: { '0': ..., '1': ... } }`
- `insert()` is deprecated — avoid

## Read
- `find(filter, projection)` — multiple docs
- `findOne(filter)` — first match
- **Comparison operators:** `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$nin`
- **Logical operators:** `$and` (implicit too: `{ a: 1, b: 2 }`), `$or`, `$not`, `$nor`
- **Output control:** `.limit(n)`, `.sort({ field: 1|-1 })`, `.skip(n)`
- **Projection:** `{ name: 1, age: 1, _id: 0 }` — 1 = include, 0 = exclude
- **Array queries:** `{ subjects: "MongoDB" }` (contains), `{ $all: ["a","b"] }` (contains both), `"subjects.0"` (positional), `$in`
- **Nested fields use dot notation:** `{ "address.city": "Kochi" }`

## Update
- `updateOne(filter, update)` — first match
- `updateMany(filter, update)` — all matches
- **Operators:**
  - `$set` — set/add a field
  - `$unset` — remove a field
  - `$inc` — increment by N (negative allowed)
  - `$push` — add to array (auto-creates array)
  - `$pull` — remove from array
- **Response fields:** `matchedCount` (matched filter), `modifiedCount` (actually changed), `upsertedCount`
- `replaceOne(filter, newDoc)` — replaces ENTIRE doc, keeps `_id`, old fields gone
- **Upsert:** `updateOne(filter, update, { upsert: true })` — insert if no match (returns `upsertedId`)
- `findOneAndUpdate(filter, update, { returnDocument: "after" })` — update + return (default returns OLD doc)

## Delete
- `deleteOne(filter)` — first match only; filter by unique field (`_id`, email)
- `deleteMany(filter)` — all matches; `deleteMany({})` wipes collection
- `findOneAndDelete(filter)` — delete + return the removed doc
- `drop()` — delete collection + indexes; `db.dropDatabase()` — nuke DB
- **Note:** `returnDocument` option is for findOneAndUpdate only, not needed on delete

## View Collection
- `db.createView("name", "source", [pipeline])` — read-only virtual collection
- No data stored; computed on the fly from source
- Cannot insert/update/delete through a view; no own indexes; can't be sharded
- Error seen: `Namespace school.activeStudents is a view, not a collection`

## Advanced Operations
- `insertMany(..., { ordered: false })` — keep going on error (unordered). Ordered (default) stops at first error.
- `bulkWrite([...])` — mixed ops: `insertOne`, `updateMany`, `deleteOne`
- `countDocuments(filter)` — count matching docs
- Chaining: `.find(filter).sort().limit().skip()`

## Practice Data (as of end of Phase 5)
- Nabhan (age 22, Calicut, status active)
- Arun Kumar (age 21, city Kochi — replaced from Arun, no status field)
- Meera (age 24, Node/React, active)
- Muhammed (age 24, favFoods, skills: ['SQL'], active)
- Neera (age 25), Ahmed (age 23) — from unordered bulk insert, no status
- Dev, Fathima, Jose — deleted
- View: `activeStudents` = 3 docs (Nabhan, Meera, Muhammed)
