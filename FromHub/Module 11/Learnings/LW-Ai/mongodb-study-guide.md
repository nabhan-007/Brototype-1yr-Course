# MongoDB Study Guide — Module 11 Exam

> 50 topics compiled from 12 months of examiner questions across 10+ students.
> Format: 2-3 line answer + code example + doc URL.
> Priority: 🔴 High (asked 4-8x) | 🟡 Medium (2-3x) | 🟢 Low (1-2x)

---

## 🔴 High Priority (16 topics)

### 1. $facet (Aggregation Pipeline)

Runs **multiple sub-pipelines in parallel** on the same input documents. Each facet produces its own output bucket.

```js
db.products.aggregate([
  {
    $facet: {
      "byCategory": [
        { $group: { _id: "$category", count: { $sum: 1 } } }
      ],
      "priceStats": [
        { $group: {
          _id: null,
          avgPrice: { $avg: "$price" },
          maxPrice: { $max: "$price" },
          minPrice: { $min: "$price" }
        }}
      ],
      "expensiveProducts": [
        { $match: { price: { $gt: 100 } } },
        { $project: { name: 1, price: 1 } }
      ]
    }
  }
]);
```

**Output**: single document with arrays for each facet key.

Docs: https://www.mongodb.com/docs/manual/reference/operator/aggregation/facet/

---

### 2. $expr (Query Operator)

Lets you use **aggregation expressions** inside `find()` queries. Useful for comparing two fields in the same document.

```js
// Find products where price > stock
db.products.find({ $expr: { $gt: ["$price", "$stock"] } });

// With $let (variables)
db.products.find({
  $expr: {
    $gt: [
      { $multiply: ["$price", "$quantity"] },
      100
    ]
  }
});

// Compare fields in same document
db.employees.find({ $expr: { $gt: ["$salary", "$avgDeptSalary"] } });
```

**Key difference from regular query**: `$expr` lets you reference other fields in the same document.

Docs: https://www.mongodb.com/docs/manual/reference/operator/query/expr/

---

### 3. $out (Aggregation)

Writes aggregation results to a **new collection** (overwrites if exists).

```js
db.sales.aggregate([
  { $group: {
    _id: "$product",
    totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
  }},
  { $sort: { totalRevenue: -1 } },
  { $out: "productRevenue" }  // creates/overwrites this collection
]);
```

**vs $merge**: `$out` replaces entire collection. `$merge` can merge/insert/update into existing collection.

```js
// $merge (more flexible)
{ $merge: { into: "report", on: "_id", whenMatched: "replace" } }
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/aggregation/out/

---

### 4. $elemMatch

Matches documents where an **array field has at least one element** matching ALL specified conditions.

```js
// Find students where at least ONE score is between 80-90 AND >70
db.students.find({
  scores: {
    $elemMatch: {
      $gte: 80, $lte: 90,
      score: { $gt: 70 }
    }
  }
});

// Without $elemMatch (different semantics!)
db.students.find({ scores: { $gte: 80, $lte: 90 } });
// This matches if ANY element is >=80 AND ANY element is <=90 (not same element!)
```

**Key point**: `$elemMatch` ensures conditions apply to the **same element**.

Docs: https://www.mongodb.com/docs/manual/reference/operator/query/elemMatch/

---

### 5. $unwind (Aggregation)

Deconstructs an array field → outputs **one document per array element**. Other fields are copied.

```js
db.orders.aggregate([
  { $unwind: "$items" }
]);

// Input:  { _id: 1, items: ["a", "b", "c"] }
// Output: { _id: 1, items: "a" }
//         { _id: 1, items: "b" }
//         { _id: 1, items: "c" }

// With preserveNullAndEmptyArrays (keep docs with empty/missing arrays)
db.orders.aggregate([
  { $unwind: { path: "$items", preserveNullAndEmptyArrays: true } }
]);
```

**Common use**: normalize embedded arrays for further aggregation stages.

Docs: https://www.mongodb.com/docs/manual/reference/operator/aggregation/unwind/

---

### 6. Capped Collection

Fixed-size collection that maintains **insertion order** and automatically overwrites oldest docs when full.

```js
// Create capped collection
db.createCollection("logs", {
  capped: true,
  size: 1048576,   // 1 MB max size
  max: 500          // max 500 documents
});

// Verify capped
db.logs.isCapped(); // true

// Convert existing collection to capped
db.runCommand({ convertToCapped: "logs", size: 1048576 });

// Query in insertion order only (no reverse sort on capped collections)
db.logs.find().sort({ $natural: 1 });
```

**Use cases**: logging, event streams, recent data buffers.

Docs: https://www.mongodb.com/docs/manual/core/capped-collections/

---

### 7. $inc / $push / $addToSet

**$inc**: increment a numeric field.
```js
db.users.updateOne({ name: "Ali" }, { $inc: { age: 5 } });      // age += 5
db.users.updateMany({}, { $inc: { marks: -5 } });                // reduce all by 5
db.users.updateOne({ name: "Ali" }, { $inc: { loginCount: 1 } }); // increment by 1
```

**$push**: add element to array.
```js
db.users.updateOne({ name: "Ali" }, { $push: { hobbies: "reading" } });
// Push multiple: { $push: { hobbies: { $each: ["gaming", "cooking"] } } }
```

**$addToSet**: add element only if it doesn't already exist.
```js
db.users.updateOne({ name: "Ali" }, { $addToSet: { hobbies: "reading" } });
// If "reading" already exists → no change. If not → added.
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/update/inc/

---

### 8. Sharding

Distributes data across multiple servers (shards) for horizontal scaling.

| Term | Description |
|------|-------------|
| **Shard** | A replica set that stores a subset of data |
| **Shard key** | Field used to determine which shard gets the data |
| **Config server** | Stores metadata (chunk distribution map) |
| **Mongos** | Router that directs queries to correct shard |
| **Chunk** | Range of shard key values stored on one shard |

```js
// Enable sharding
sh.enableSharding("mydb");

// Shard a collection (hashed key distributes evenly)
sh.shardCollection("mydb.users", { email: "hashed" });

// Or ranged sharding
sh.shardCollection("mydb.logs", { timestamp: 1 });
```

**Advantages**: handles more data/traffic than one server, horizontal scaling.
**Disadvantages**: complexity, cross-shard queries slow, operational overhead.

Docs: https://www.mongodb.com/docs/manual/sharding/

---

### 9. Indexing (Types, Compound, TTL, etc.)

Indexes speed up reads, slow down writes.

```js
// Single field index
db.users.createIndex({ email: 1 });       // ascending
db.users.createIndex({ email: -1 });      // descending

// Compound index (multiple fields)
db.users.createIndex({ lastName: 1, firstName: 1 });

// Multikey index (automatically created for array fields)
db.users.createIndex({ hobbies: 1 });

// Unique index
db.users.createIndex({ email: 1 }, { unique: true });

// TTL index (auto-delete after time)
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });

// Text index (full-text search)
db.articles.createIndex({ content: "text" });

// Geospatial index
db.places.createIndex({ location: "2dsphere" });

// Hashed index (for sharding)
db.users.createIndex({ email: "hashed" });

// Partial index (only index documents matching filter)
db.users.createIndex({ email: 1 }, { partialFilterExpression: { active: true } });

// Get all indexes
db.users.getIndexes();

// Drop index
db.users.dropIndex({ email: 1 });

// Drop all
db.users.dropIndexes();
```

**Drawbacks of indexing**: uses storage, slows write operations (index must update on insert/update/delete), too many indexes hurt performance.

Docs: https://www.mongodb.com/docs/manual/indexes/

---

### 10. Aggregation Pipeline (Practical)

```js
db.products.aggregate([
  // Stage 1: filter
  { $match: { category: "electronics" } },

  // Stage 2: group
  { $group: {
    _id: "$brand",
    avgPrice: { $avg: "$price" },
    totalSold: { $sum: "$quantity" },
    products: { $push: "$name" }
  }},

  // Stage 3: sort
  { $sort: { avgPrice: -1 } },

  // Stage 4: project (select fields)
  { $project: { brand: "$_id", avgPrice: 1, totalSold: 1, _id: 0 } },

  // Stage 5: limit
  { $limit: 5 }
]);
```

**Common stages**: `$match`, `$group`, `$sort`, `$project`, `$unwind`, `$limit`, `$skip`, `$addFields`, `$lookup`, `$facet`, `$out`, `$merge`, `$count`, `$first`, `$last`, `$min`, `$max`, `$push`.

Docs: https://www.mongodb.com/docs/manual/core/aggregation-pipeline/

---

### 11. Journaling

Write-ahead log that ensures **durability**. Before data is written to disk, it's written to the journal. If the server crashes, MongoDB replays the journal to recover.

```js
// Enable journaling (enabled by default)
// mongod --journal

// Check journal status
db.serverStatus().journal

// Commit interval (ms)
// Default: 100ms — journal commits every 100ms
// --journalCommitInterval=100

// Write concern with journal
db.users.insertOne(
  { name: "Ali" },
  { writeConcern: { w: 1, j: true } }  // j:true = wait for journal commit
);
```

**Why it matters**: prevents data loss on crash. Ensures acknowledged writes are truly durable.

Docs: https://www.mongodb.com/docs/manual/core/journaling/

---

### 12. Transactions (When to Use)

**ACID transactions** across multiple documents/collections.

```js
const session = client.startSession();
try {
  session.startTransaction();
  await accounts.updateOne({ _id: from }, { $inc: { balance: -100 } }, { session });
  await accounts.updateOne({ _id: to }, { $inc: { balance: 100 } }, { session });
  await session.commitTransaction();
} catch (err) {
  await session.abortTransaction();
} finally {
  session.endSession();
}
```

**When to use**: multi-document operations that must be atomic (bank transfers, inventory updates).
**When NOT to use**: single document operations (atomic by default), high-throughput writes (performance cost).

**Requires**: replica set or sharded cluster (standalone doesn't support transactions).

Docs: https://www.mongodb.com/docs/manual/core/transactions/

---

### 13. CAP Theorem / Partition Tolerance

A distributed system can guarantee only **two of three**:

| | Description |
|---|---|
| **C**onsistency | Every read gets the latest write |
| **A**vailability | Every request gets a response |
| **P**artition Tolerance | System works despite network splits |

**MongoDB chooses AP** (eventual consistency) by default, but can tune for CP:

```js
// Read concern for consistency
db.users.find().readConcern("majority");

// Write concern for durability
db.users.insertOne({ name: "Ali" }, { writeConcern: { w: "majority" } });
```

**Partition tolerance** = system continues operating even when network partitions occur between nodes. In distributed systems, you MUST have partition tolerance (network WILL fail), so the real choice is CP vs AP.

Docs: https://www.mongodb.com/docs/manual/core/data-consistency-single-document/

---

### 14. Embedding vs Referencing / Denormalization

| | Embedding | Referencing |
|---|---|---|
| **Structure** | Nested document | ObjectId reference |
| **Query** | Single query | Requires `$lookup` or 2 queries |
| **Update** | Single update | Multiple updates |
| **Size** | 16MB doc limit | No limit |
| **Duplication** | Data duplicated in every parent | No duplication |

```js
// Embedding
{
  name: "Ali",
  address: { city: "Riyadh", zip: "12345" }
}

// Referencing
{
  name: "Ali",
  addressId: ObjectId("64a...")  // reference to addresses collection
}

// Lookup (join)
db.users.aggregate([
  { $lookup: {
    from: "addresses",
    localField: "addressId",
    foreignField: "_id",
    as: "address"
  }}
]);
```

**Denormalization**: embedding duplicates data but avoids joins. Trade-off: data redundancy vs query performance.

**When to embed**: 1:1 or 1:few relationships, small subdocuments, data accessed together.
**When to reference**: many:many, large subdocuments, independent access, data growth.

Docs: https://www.mongodb.com/docs/manual/core/data-model-design/

---

### 15. BSON (Advantages over JSON)

**BSON** (Binary JSON) is MongoDB's internal storage format.

| | JSON | BSON |
|---|---|---|
| **Format** | Text | Binary |
| **Types** | String, Number, Bool, Array, Object, null | All JSON + Date, ObjectId, Int32, Int64, Decimal128, Binary, RegExp |
| **Size** | Larger (text) | Smaller (compact binary) |
| **Traversal** | Parse entire doc | Scan byte-by-byte (efficient for finding fields) |
| **Update** | Parse → modify → serialize | Update in-place (for some operations) |

```js
// BSON types in MongoDB
ISODate("2024-01-01")     // Date
ObjectId("64a...")         // 12-byte unique ID
NumberInt(42)              // 32-bit integer
NumberLong(100000000)      // 64-bit integer
Decimal128("19.99")        // precise decimal (money)
BinData(0, "base64data")   // binary data
```

Docs: https://www.mongodb.com/docs/manual/reference/bson-types/

---

### 16. Covered Query

An index-only query — MongoDB can answer it entirely from the index without reading documents.

```js
// Create compound index
db.users.createIndex({ email: 1, name: 1 });

// Covered query: all fields are in the index
db.users.find({ email: "ali@test.com" }, { email: 1, name: 1, _id: 0 });
// Explanation:
// - Filter: email (in index) ✓
// - Projection: email, name (in index) ✓
// - _id: 0 excludes the default _id ✓
// Result: index-only scan, very fast

// NOT covered (includes field not in index):
db.users.find({ email: "ali@test.com" }, { email: 1, phone: 1, _id: 0 });
// phone is NOT in index → must fetch full documents

// Check with explain()
db.users.find({ email: "ali@test.com" }, { email: 1, name: 1, _id: 0 })
  .explain("executionStats");
// "totalDocsExamined": 0 → covered query
```

Docs: https://www.mongodb.com/docs/manual/core/query-plans/

---

## 🟡 Medium Priority (18 topics)

### 17. $lookup (Left Outer Join)

```js
db.orders.aggregate([
  { $lookup: {
    from: "products",        // collection to join
    localField: "productId", // field in orders
    foreignField: "_id",     // field in products
    as: "productDetails"     // output array name
  }}
]);

// Result: each order gets a "productDetails" array with matching products

// With pipeline (advanced filtering during join)
db.orders.aggregate([
  { $lookup: {
    from: "products",
    let: { pid: "$productId" },
    pipeline: [
      { $match: { $expr: { $eq: ["$_id", "$$pid"] } } },
      { $project: { name: 1, price: 1 } }
    ],
    as: "productDetails"
  }}
]);
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/

---

### 18. $set vs $push vs $addToSet

| | `$set` | `$push` | `$addToSet` |
|---|---|---|---|
| **Target** | Any field | Array field only | Array field only |
| **Action** | Set/replace value | Add element (allow dupes) | Add element (no dupes) |
| **Use case** | Update name, email | Append to list | Add unique item |

```js
db.users.updateOne({ name: "Ali" }, { $set: { email: "new@test.com" } });
db.users.updateOne({ name: "Ali" }, { $push: { tags: "admin" } });
db.users.updateOne({ name: "Ali" }, { $addToSet: { tags: "admin" } });
// If "admin" already in tags → $push adds another, $addToSet does nothing
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/update/set/

---

### 19. $all / $exists

**$all**: array contains ALL specified values.
```js
db.products.find({ colors: { $all: ["red", "blue"] } });
// Matches docs where colors array contains BOTH red AND blue
```

**$exists**: field exists (or doesn't) in the document.
```js
db.users.find({ phone: { $exists: true } });   // has phone field
db.users.find({ phone: { $exists: false } });  // no phone field

// Count documents with a field
db.users.countDocuments({ phone: { $exists: true } });
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/query/all/

---

### 20. $bulkWrite

Perform multiple write operations in a single command (more efficient than individual operations).

```js
db.users.bulkWrite([
  { insertOne: { document: { name: "New", email: "new@test.com" } } },
  { updateOne: { filter: { name: "Ali" }, update: { $set: { email: "updated@test.com" } } } },
  { deleteOne: { filter: { name: "Old" } } },
  { replaceOne: { filter: { name: "Replace" }, replacement: { name: "New", email: "r@test.com" } } }
]);
```

Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.bulkWrite/

---

### 21. $setUnion / Set Operators

```js
// $setUnion: union of arrays (all unique elements from both)
db学生们.aggregate([
  { $project: {
    allHobbies: { $setUnion: ["$hobbies1", "$hobbies2"] }
  }}
]);

// $setIntersection: common elements
// $setDifference: elements in A but not in B
// $setEquals: check if arrays have same elements
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/aggregation/setUnion/

---

### 22. $fill (Aggregation)

Fills null/missing values in sorted data.

```js
db.sensorData.aggregate([
  { $sort: { timestamp: 1 } },
  { $fill: {
    output: {
      temperature: { method: "linear" },  // linear interpolation
      humidity: { value: 50 }             // fill with constant
    }
  }}
]);
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/aggregation/fill/

---

### 23. $group (Aggregation)

```js
db.orders.aggregate([
  { $group: {
    _id: "$customerId",
    totalOrders: { $sum: 1 },
    totalAmount: { $sum: "$amount" },
    avgAmount: { $avg: "$amount" },
    maxAmount: { $max: "$amount" },
    minAmount: { $min: "$amount" },
    firstOrder: { $first: "$date" },
    lastOrder: { $last: "$date" },
    uniqueProducts: { $addToSet: "$product" }
  }}
]);
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/

---

### 24. Views

Virtual collections backed by an aggregation pipeline. No data stored — computed on read.

```js
// Create view
db.createView("activeUsers", "users", [
  { $match: { status: "active" } },
  { $project: { name: 1, email: 1 } }
]);

// Query like a regular collection
db.activeUsers.find({ name: "Ali" });

// Drop view
db.activeUsers.drop();
```

**Use cases**: access control (hide sensitive fields), simplified querying, data presentation.

Docs: https://www.mongodb.com/docs/manual/core/views/

---

### 25. Geospatial Index

Index for location-based queries.

```js
// Create 2dsphere index
db.places.createIndex({ location: "2dsphere" });

// Find places within 1000m of a point
db.places.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [73.85, 18.52] },
      $maxDistance: 1000
    }
  }
});

// Find places within a polygon
db.places.find({
  location: {
    $geoWithin: {
      $polygon: [[73.8,18.5], [73.9,18.5], [73.9,18.6], [73.8,18.6]]
    }
  }
});
```

Docs: https://www.mongodb.com/docs/manual/core/geospatial-indexes/

---

### 26. Data Modeling & Anti-patterns

**Anti-patterns to avoid:**
1. **Unbounded arrays** — arrays that grow indefinitely (use references instead)
2. **Duplicate data without sync** — copy data across collections without updates
3. **Massive documents** — 16MB limit; use references for large content
4. **Over-normalization** — too many joins defeats MongoDB's document model
5. **No indexing strategy** — unindexed queries on large collections

```js
// BAD: Unbounded array
{
  name: "User",
  orders: [/* could grow to millions */]
}

// GOOD: Reference
{
  name: "User",
  orderIds: [ObjectId("..."), ObjectId("...")]  // or better, query orders collection
}
```

Docs: https://www.mongodb.com/docs/manual/core/data-model-design-introduction/

---

### 27. Read Concern / Write Concern

**Read Concern**: level of isolation for reads.
```js
db.users.find().readConcern("local");     // default: returns latest data on shard
db.users.find().readConcern("majority");  // only data confirmed by majority
db.users.find().readConcern("linearizable"); // strongest: reflects all successful writes
```

**Write Concern**: acknowledgment level for writes.
```js
db.users.insertOne({ name: "Ali" }, {
  writeConcern: {
    w: "majority",     // wait for majority of nodes
    j: true,           // wait for journal commit
    wtimeout: 5000     // timeout after 5s
  }
});
```

Docs: https://www.mongodb.com/docs/manual/reference/read-concern/

---

### 28. Upsert

Insert if document doesn't exist, update if it does.

```js
// upsert: true creates document if no match
db.users.updateOne(
  { email: "new@test.com" },
  { $set: { name: "New User", email: "new@test.com" } },
  { upsert: true }
);

// If no document matches → inserts { name: "New User", email: "new@test.com" }
// If matches → updates as normal
```

Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/

---

### 29. Clustered Collection / Clustered Index

**Clustered collection**: stores documents in sort order of the clustered key (like a clustered index in SQL).

```js
// Create clustered collection (MongoDB 5.3+)
db.createCollection("events", {
  clusteredIndex: {
    key: { _id: 1 },
    unique: true
  }
});

// Benefits: faster reads, smaller storage (no separate _id index needed)
```

**Clustered index** (SQL concept): index that sorts data on disk by the indexed key.

Docs: https://www.mongodb.com/docs/manual/core/clustered-indexes/

---

### 30. Removing / Modifying Indexes

```js
// Drop specific index
db.users.dropIndex({ email: 1 });

// Drop all indexes (except _id)
db.users.dropIndexes();

// Rename collection
db.oldName.renameCollection("newName");

// Modify collection options
db.runCommand({
  collMod: "users",
  validationLevel: "moderate",
  validator: { $jsonSchema: { /* schema */ } }
});
```

Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.dropIndex/

---

### 31. ODM / Mongoose

**ODM** (Object Document Mapper): maps objects to MongoDB documents (like ORM for SQL).

```js
const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0, max: 150 },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

// Add methods
userSchema.methods.greet = function() { return `Hi, ${this.name}`; };

// Static methods
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

// Virtual fields
userSchema.virtual('info').get(function() { return `${this.name} (${this.age})`; });

const User = mongoose.model('User', userSchema);
```

**Advantages**: validation, type casting, hooks/middleware, business logic in model.

Docs: https://mongoosejs.com/

---

### 32. Config Server

Stores metadata about shard cluster (chunk locations, shard分布).

```js
// In production: 3 config servers (replica set)
// mongos routers query config servers to find which shard has data

// Connect to config server
mongosh --configdb configRS/config1:27019,config2:27019,config3:27019

// View sharding status
sh.status();
```

Docs: https://www.mongodb.com/docs/manual/reference/configdb/

---

### 33. How Indexing Slows Down Writes

Every write (insert/update/delete) must also update **all relevant indexes**.

```js
// If collection has 10 indexes, an insert updates 10 B-tree structures
db.users.createIndex({ email: 1 });
db.users.createIndex({ name: 1 });
db.users.createIndex({ age: 1 });
// ... 10 total

// Insert now:
db.users.insertOne({ name: "Ali", email: "ali@test.com", age: 25 });
// 1 doc inserted + 10 index updates = slower than 0 indexes
```

**Optimization**:
- Remove unused indexes (`db.users.getIndexes()` → check with `db.users.aggregate([{$indexStats:{}}])`)
- Use compound indexes instead of multiple single-field indexes
- Use partial indexes for infrequent queries

Docs: https://www.mongodb.com/docs/manual/core/index-types/

---

### 34. Compound Index vs Multikey Index

| | Compound Index | Multikey Index |
|---|---|---|
| **Fields** | Multiple fields | Single array field |
| **Created** | `createIndex({a:1, b:1})` | Auto when indexing array field |
| **Query** | Can use prefix of fields | Can use any element in array |

```js
// Compound
db.users.createIndex({ lastName: 1, firstName: 1 });
// Supports: {lastName:"X"}, {lastName:"X", firstName:"Y"}
// Does NOT support: {firstName:"Y"} (not prefix)

// Multikey (automatic)
db.users.createIndex({ hobbies: 1 });
// hobbies: ["reading", "gaming"] → indexed as two entries
```

Docs: https://www.mongodb.com/docs/manual/core/index-multikey/

---

### 35. Update vs $set

```js
// $set: modifies specific fields, leaves rest unchanged
db.users.updateOne({ name: "Ali" }, { $set: { email: "new@test.com" } });
// Only email changes, other fields preserved

// Replace (no $set): replaces ENTIRE document (except _id)
db.users.updateOne(
  { name: "Ali" },
  { name: "Ali", email: "new@test.com" }  // must include ALL fields
);
// Missing fields are removed!
```

**Rule**: always use `$set` unless you intentionally want to replace the whole document.

Docs: https://www.mongodb.com/docs/manual/reference/operator/update/set/

---

### 36. Replace Array Elements

```js
// Replace entire array
db.users.updateOne({ name: "Ali" }, { $set: { hobbies: ["new1", "new2"] } });

// Update specific element by position
db.users.updateOne(
  { name: "Ali" },
  { $set: { "hobbies.0": "updated_first_hobby" } }
);

// Replace element matching condition
db.users.updateOne(
  { name: "Ali", "hobbies": "old" },
  { $set: { "hobbies.$": "new" } }  // $ = matched position
);
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/update/positional/

---

### 37. Single Purpose Aggregation

Simple operations directly on a collection (not the full pipeline).

```js
// countDocuments
db.users.countDocuments({ status: "active" });

// distinct
db.users.distinct("email");

// estimatedDocumentCount (fast, uses metadata)
db.users.estimatedDocumentCount();

// findOne (not aggregation but common)
db.users.findOne({ email: "ali@test.com" });
```

**vs pipeline**: single purpose is faster for simple operations. Use pipeline for complex transformations.

Docs: https://www.mongodb.com/docs/manual/core/aggregation-pipeline/#aggregation-pipeline-versus-single-purpose-aggregation-operations

---

## 🟢 Lower Priority (13 topics)

### 38. Scaling / Types of Scaling

| | Vertical (Scale Up) | Horizontal (Scale Out) |
|---|---|---|
| **What** | Add more CPU/RAM to one server | Add more servers |
| **MongoDB** | Upgrade hardware | Sharding |
| **Pros** | Simple, no code changes | Handles more data/traffic |
| **Cons** | Hardware limits, single point of failure | Complexity, data distribution |

MongoDB supports both. Sharding is the primary horizontal scaling mechanism.

Docs: https://www.mongodb.com/docs/manual/sharding/

---

### 39. Namespace

Format: `<database>.<collection>` — uniquely identifies a collection.

```js
// Use a collection
use mydb;                    // switch database
db.users.find();             // namespace: mydb.users

// All collections in database
db.getCollectionNames();     // ["users", "orders", "logs"]
```

Docs: https://www.mongodb.com/docs/manual/reference/glossary/#term-namespace

---

### 40. Oplog (Operation Log)

A capped collection that records all data-modifying operations. Used for **replication** and **change streams**.

```js
// View oplog
use local;
db.oplog.rs.find().sort({ $natural: -1 }).limit(5);

// Oplog entry structure:
// { ts: Timestamp, op: "i"|"u"|"d", ns: "db.collection", o: { ... } }
// i = insert, u = update, d = delete
```

Docs: https://www.mongodb.com/docs/manual/core/replica-set-oplog/

---

### 41. GridFS

Stores files larger than 16MB by splitting into **chunks**.

```js
const { GridFSBucket } = require('mongodb');
const bucket = new GridFSBucket(db);

// Upload
const uploadStream = bucket.openUploadStream('large-video.mp4');
fs.createReadStream('./video.mp4').pipe(uploadStream);

// Download
const downloadStream = bucket.openDownloadStreamByName('large-video.mp4');
downloadStream.pipe(fs.createWriteStream('./downloaded.mp4'));
```

**Collections created**: `fs.files` (metadata), `fs.chunks` (file data).

Docs: https://www.mongodb.com/docs/manual/core/gridfs/

---

### 42. Oplog / Rename Collection / Basic Regex

**Rename collection:**
```js
db.oldName.renameCollection("newName");
```

**Basic regex queries:**
```js
// Case-insensitive regex
db.users.find({ name: /ali/i });

// Starts with
db.users.find({ name: /^Ali/ });

// Contains
db.users.find({ email: /test/ });

// MongoDB regex (not JavaScript regex)
db.users.find({ name: { $regex: "ali", $options: "i" } });
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/query/regex/

---

### 43. Embedded Document Operations

```js
// Query nested fields
db.users.find({ "address.city": "Riyadh" });

// Update nested field
db.users.updateOne({ name: "Ali" }, { $set: { "address.city": "Jeddah" } });

// Add field to embedded document
db.users.updateOne({ name: "Ali" }, { $set: { "address.zip": "12345" } });

// Array of embedded docs
db.orders.updateOne(
  { _id: orderId, "items.product": "phone" },
  { $set: { "items.$.quantity": 5 } }  // $ = matched array position
);
```

Docs: https://www.mongodb.com/docs/manual/core/document/

---

### 44. Pattern Matching with Vowels / Regex Practical

```js
// Documents with vowel patterns
db.users.find({ name: { $regex: /^[aeiou]/i } }); // starts with vowel
db.users.find({ name: { $regex: /[aeiou]{3}/i } }); // 3 consecutive vowels

// Fruits beginning with "A" (case insensitive)
db.fruits.find({ name: { $regex: /^A/i } });

// Match specific patterns
db.users.find({ phone: { $regex: /^\+966/ } }); // Saudi numbers
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/query/regex/

---

### 45. Drawbacks of Indexing

1. **Storage overhead**: each index uses disk space
2. **Write performance**: every insert/update/delete must update indexes
3. **Memory usage**: indexes should fit in RAM for best performance
4. **Index pollution**: too many unused indexes slow everything down
5. **Not useful for**: small collections, frequent writes with rare reads

```js
// Check index usage
db.users.aggregate([{ $indexStats: {} }]);

// Remove unused index
db.users.dropIndex("fieldName_1");
```

Docs: https://www.mongodb.com/docs/manual/applications/indexes/

---

### 46. Adding Fields Where Not Existing / $exists Update

```js
// Add field with $setOnInsert (only on insert, not update)
db.users.updateOne(
  { email: "ali@test.com" },
  { $setOnInsert: { createdAt: new Date(), role: "user" } },
  { upsert: true }
);

// Add default field to all docs missing it
db.users.updateMany(
  { role: { $exists: false } },
  { $set: { role: "user" } }
);
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/update/setOnInsert/

---

### 47. Increase/Decrease Field Values

```js
// Increase all users' age by 5
db.users.updateMany({}, { $inc: { age: 5 } });

// Decrease price of all fruits by 0.5
db.fruits.updateMany({}, { $inc: { price: -0.5 } });

// 10% salary increment for all employees
db.employees.updateMany({}, [
  { $set: { salary: { $multiply: ["$salary", 1.1] } } }
]);

// Conditional update: reduce salary only if developer knows html AND css
db.employees.updateMany(
  { skills: { $all: ["html", "css"] }, role: "developer" },
  { $inc: { salary: -500 } }
);
```

Docs: https://www.mongodb.com/docs/manual/reference/operator/update/inc/

---

## Bonus: Common Aggregation Practicals

### Find highest priced product
```js
db.products.aggregate([
  { $sort: { price: -1 } },
  { $limit: 1 }
]);

// Or with $group
db.products.aggregate([
  { $group: { _id: null, maxPrice: { $max: "$price" }, product: { $first: "$$ROOT" } } }
]);
```

### Find offer price of every product
```js
db.products.aggregate([
  { $addFields: {
    offerPrice: { $multiply: ["$price", 0.9] }  // 10% discount
  }},
  { $project: { name: 1, price: 1, offerPrice: 1 } }
]);
```

### Average age of each department
```js
db.employees.aggregate([
  { $group: { _id: "$department", avgAge: { $avg: "$age" } } },
  { $sort: { avgAge: -1 } }
]);
```

### Find max salaried employee
```js
db.employees.aggregate([
  { $sort: { salary: -1 } },
  { $limit: 1 }
]);
```

### Reduce marks of all by 5
```js
db.students.updateMany({}, { $inc: { marks: -5 } });
```

### Find sum of age
```js
db.users.aggregate([
  { $group: { _id: null, totalAge: { $sum: "$age" } } }
]);
```

### Cheapest vitamin C fruit
```js
db.fruits.aggregate([
  { $match: { vitamins: "C" } },
  { $sort: { price: 1 } },
  { $limit: 1 }
]);
```

### Reduce price by 2 for Green fruits
```js
db.fruits.updateMany({ color: "green" }, { $inc: { price: -2 } });
```

### Unique colors (array field)
```js
db.fruits.aggregate([
  { $unwind: "$colors" },
  { $group: { _id: "$colors" } },
  { $sort: { _id: 1 } }
]);
// Or simpler:
db.fruits.distinct("colors");
```

### Average price of Red and Green fruits
```js
db.fruits.aggregate([
  { $match: { color: { $in: ["red", "green"] } } },
  { $group: { _id: null, avgPrice: { $avg: "$price" } } }
]);
```

### Fruits with price less than 2 or greater than 5
```js
db.fruits.find({ $or: [{ price: { $lt: 2 } }, { price: { $gt: 5 } }] });
```

### Number of documents with a specific field ($exists)
```js
db.users.countDocuments({ phone: { $exists: true } });
```

### Rename collection
```js
db.oldName.renameCollection("newName");
```

### Get all available indices
```js
db.users.getIndexes();
```

### Find highest age
```js
db.users.aggregate([{ $group: { _id: null, maxAge: { $max: "$age" } } }]);
// Or: db.users.find().sort({ age: -1 }).limit(1);
```

---

### 48. BASE (vs ACID)

**BASE** is the model NoSQL databases (like MongoDB) follow, as opposed to ACID (relational databases):

- **B**asic **A**vailability: system guarantees availability (every request gets a response, even if it's a timeout or error)
- **S**oft state: state may change over time even without input (due to replication lag, eventual consistency)
- **E**ventual consistency: given enough time without new updates, all replicas will converge to the same value

```
ACID (SQL)          BASE (NoSQL)
Atomicity       →   Basic Availability
Consistency     →   Eventual Consistency
Isolation       →   Soft State
Durability      →   (still guaranteed via journaling)
```

**Terms to mention**: Basic Availability, Soft state, Eventual consistency, contrast with ACID, eventual consistency means replicas converge (not instant).

Docs: https://www.mongodb.com/docs/manual/core/write-concern-concern-majority/

---

### 49. mongodump / MongoDB Utility Commands

Command-line tools for backup, restore, import, export:

```bash
# mongodump: binary backup of entire database
mongodump --db authUsers --out ./backup/

# mongorestore: restore from binary backup
mongorestore --db authUsers ./backup/authUsers/

# mongoexport: export as JSON or CSV
mongoexport --db authUsers --collection users --out users.json --type=json

# mongoimport: import JSON or CSV
mongoimport --db authUsers --collection users --file users.json

# mongostat: real-time server stats (like top for MongoDB)
mongostat

# mongotop: tracks time spent per collection
mongotop
```

| Tool | Purpose | Format |
|------|---------|--------|
| `mongodump` | Backup (binary) | BSON |
| `mongorestore` | Restore from backup | BSON |
| `mongoexport` | Export data | JSON / CSV |
| `mongoimport` | Import data | JSON / CSV |
| `mongostat` | Live server stats | Terminal output |
| `mongotop` | Collection-level timing | Terminal output |

**Note**: These are **shell utilities** (not aggregation operators). They run in the terminal, not inside MongoDB queries.

Docs: https://www.mongodb.com/docs/database-tools/

---

### 50. Partial Index

A partial index only indexes documents that match a **filter expression**. Smaller index = faster queries + less storage + less write overhead.

```js
// Only index users who have a phone number
db.users.createIndex(
  { phone: 1 },
  { partialFilterExpression: { phone: { $exists: true } } }
);

// Only index active premium users
db.users.createIndex(
  { email: 1 },
  { partialFilterExpression: { status: "active", plan: "premium" } }
);

// Only index documents where age > 18
db.users.createIndex(
  { age: 1 },
  { partialFilterExpression: { age: { $gt: 18 } } }
);
```

**When to use**: You only query a subset of documents (e.g., only active users, only users with phone). Partial index skips documents that never match your queries.

**Terms to mention**: partialFilterExpression, smaller index size, reduced write overhead, only indexes documents matching filter.

Docs: https://www.mongodb.com/docs/manual/core/index-partial/

---

*Generated from 12 months of examiner questions. For full docs, visit https://www.mongodb.com/docs/manual/*
