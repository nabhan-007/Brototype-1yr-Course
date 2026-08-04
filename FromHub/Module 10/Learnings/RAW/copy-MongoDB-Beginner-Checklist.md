# Module 10 — MongoDB & Databases Checklist

> **Total Topics:** 14+ | **Level:** Complete Beginner
> Follow the phases in order. Each phase builds on the previous.

---

## Phase 1: Foundation — What & Why

> _Before touching any code, understand what databases are and why they exist._

- [ ] **Watch Task Explanation Video**
  - [ ] Refer to the provided task explanation video

- [ ] **What is a Database (DB)?**
  - [ ] Definition — an organized collection of structured data
  - [ ] Why applications need databases (persistence, retrieval, scaling)
  - [ ] Real-world examples (e-commerce, social media, banking)

- [ ] **SQL vs NoSQL — Key Differences**
  - [ ] SQL = relational (tables, rows, fixed schema)
  - [ ] NoSQL = non-relational (flexible models, dynamic schema)
  - [ ] Compare on: Structure, Scalability, Flexibility, Performance
  - [ ] When to use which

- [ ] **Why MongoDB?**
  - [ ] Document-oriented (stores JSON-like data)
  - [ ] Schema-flexible — no rigid table structure needed
  - [ ] Horizontal scaling via sharding (add more cheap servers)
  - [ ] **Vertical vs Horizontal Scaling** — vertical = bigger server (SQL), horizontal = more servers (NoSQL)
  - [ ] Rich query language and indexing
  - [ ] Large community and ecosystem

---

## Phase 2: NoSQL Deep Dive

> _Understand the theory behind NoSQL before writing queries._

- [ ] **Types of NoSQL Databases**
  - [ ] Key-Value stores (Redis, DynamoDB)
  - [ ] Document databases (MongoDB, CouchDB)
  - [ ] Column-Family stores (Cassandra, HBase)
  - [ ] Graph databases (Neo4j, ArangoDB)
  - [ ] Know which type MongoDB falls under (Document)

- [ ] **ACID vs BASE Properties**
  - [ ] ACID: Atomicity, Consistency, Isolation, Durability (SQL)
  - [ ] BASE: Basically Available, Soft state, Eventual consistency (NoSQL)
  - [ ] Trade-offs between strong consistency vs availability

- [ ] **CAP Theorem**
  - [ ] Consistency — every read gets the latest write
  - [ ] Availability — every request gets a response
  - [ ] Partition Tolerance — system works despite network failures
  - [ ] You can only pick 2 out of 3 (CP, AP, or CA)
  - [ ] MongoDB chooses **CP** (consistency + partition tolerance)

- [ ] **Benefits of NoSQL**
  - [ ] Horizontal scalability (add more servers)
  - [ ] Schema flexibility (no migration headaches)
  - [ ] High availability (built-in replication)
  - [ ] Handles unstructured/semi-structured data

- [ ] **Transactions in MongoDB**
  - [ ] Multi-document ACID transactions (supported since v4.0)
  - [ ] When to use transactions vs when to avoid them
  - [ ] Transactions span multiple documents/collections
  - [ ] Trade-off: transactions add overhead — don't use for everything

---

## Phase 3: MongoDB Setup

> _Get MongoDB running on your machine._

- [ ] **Installation**
  - [ ] Download MongoDB Community Edition
  - [ ] Install on your OS (Windows / Mac / Linux)
  - [ ] Verify installation with `mongod --version`

- [ ] **Start & Stop MongoDB**
  - [ ] Start the MongoDB server process (`mongod`)
  - [ ] Connect to it using MongoDB Shell (`mongosh`)
  - [ ] Stop the server properly (Ctrl+C or `db.shutdownServer()`)
  - [ ] Understand default port: **27017**
  - [ ] Service management is OS-specific: Windows → `Start/Stop-Service MongoDB` (admin); macOS → `brew services start/stop mongodb-community`; Linux → `systemctl start/stop mongod`

- [ ] **MongoDB Shell (mongosh) Basics**
  - [ ] Connect to a database — `mongosh` (local) or full string (Atlas)
  - [ ] Switch databases (`use databaseName`)
  - [ ] Show all databases (`show dbs`)
  - [ ] Show collections (`show collections`)
  - [ ] Basic insert and find commands (preview of CRUD)

---

## Phase 4: MongoDB Architecture

> _Understand how MongoDB stores and manages data internally._

- [ ] **Core Concepts**
  - [ ] **Document** — a single record (JSON-like key-value pairs)
  - [ ] **Collection** — a group of documents (like a table)
  - [ ] **Database** — a group of collections
  - [ ] Hierarchy: Database → Collection → Document → Field
  - [ ] **ObjectId Structure** — 12 bytes: 4-byte timestamp + 5-byte machine/process ID + 3-byte counter (auto-generated `_id`)

- [ ] **JSON vs BSON**
  - [ ] JSON = human-readable text format
  - [ ] BSON = binary-encoded, faster for MongoDB to parse
  - [ ] BSON supports more data types (Date, ObjectId, Binary, etc.)

- [ ] **Storage & Data Flow**
  - [ ] Storage engines (WiredTiger — the default)
  - [ ] Read path: query → index check → fetch from disk/cache
  - [ ] Write path: write to journal → write to cache → flush to disk
  - [ ] Journaling — crash recovery mechanism
  - [ ] Working set — the data + indexes that fit in RAM

- [ ] **Specialized Features**
  - [ ] **Capped Collections** — fixed-size, auto-removes old docs
  - [ ] **Oplog** — operation log for replication
  - [ ] **TTL Indexes** — auto-delete docs after a time period
  - [ ] **GridFS** — storing large files (images, videos) by splitting into chunks

- [ ] **Replication & Replica Sets**
  - [ ] What is replication — copying data across servers for redundancy
  - [ ] **Primary** — accepts all writes, replicates to secondaries
  - [ ] **Secondary** — read-only copies, can become primary on failover
  - [ ] **Arbiter** — votes in elections but doesn't store data (lightweight)
  - [ ] **Failover** — if primary goes down, secondaries elect a new primary
  - [ ] Automatic failover and self-healing

- [ ] **Sharding & Shard Keys**
  - [ ] What is sharding — splitting data across multiple servers
  - [ ] **Shard Key** — the field MongoDB uses to distribute data
  - [ ] How to choose a shard key — high cardinality, evenly distributed
  - [ ] When sharding is needed — data exceeds single server capacity
  - [ ] **mongos** — router that directs queries to the right shard

---

## Phase 5: CRUD Operations

> _The bread and butter — Create, Read, Update, Delete._

- [ ] **MongoDB Data Types**
  - [ ] String, Number (Int32, Int64, Double, Decimal128)
  - [ ] Boolean, Array, Object (embedded doc)
  - [ ] ObjectId, Date, Null, Binary Data
  - [ ] Timestamp, Regular Expression

- [ ] **Create (Insert)**
  - [ ] `insertOne()` — insert a single document
  - [ ] `insertMany()` — insert multiple documents at once

- [ ] **Read (Query)**
  - [ ] `find()` — get multiple documents
  - [ ] `findOne()` — get a single document
  - [ ] Filtering with query operators (`$gt`, `$lt`, `$in`, `$ne`, etc.)
  - [ ] Projection — select specific fields
  - [ ] `limit()`, `sort()`, `skip()` — control results
  - [ ] **View Collection** — read-only virtual collection based on an aggregation pipeline

- [ ] **Update**
  - [ ] `updateOne()` — update a single document
  - [ ] `updateMany()` — update multiple documents
  - [ ] Update operators: `$set`, `$unset`, `$inc`, `$push`, `$pull`
  - [ ] `replaceOne()` — replace entire document
  - [ ] **Upsert** — `updateOne({ email: "x@y.com" }, { $set: { name: "New" } }, { upsert: true })` — update if exists, insert if not

- [ ] **Delete**
  - [ ] `deleteOne()` — delete a single document
  - [ ] `deleteMany()` — delete multiple documents
  - [ ] `findOneAndDelete()` — delete and return the doc

- [ ] **Advanced Operations**
  - [ ] Bulk inserts (ordered vs unordered)
  - [ ] Updating multiple documents with conditions
  - [ ] Complex querying, filtering, and limiting results

---

## Phase 6: Aggregation Framework

> _Think of it like SQL's GROUP BY, but way more powerful._

- [ ] **What is Aggregation?**
  - [ ] Pipeline concept — documents pass through stages sequentially
  - [ ] Each stage transforms the data and passes it to the next

- [ ] **Key Aggregation Stages**
  - [ ] `$match` — filter documents (like WHERE)
  - [ ] `$group` — group by a field (like GROUP BY)
  - [ ] `$sort` — sort results
  - [ ] `$project` — reshape documents (select/compute fields)
  - [ ] `$limit` / `$skip` — pagination
  - [ ] `$unwind` — flatten arrays into individual docs
  - [ ] `$lookup` — join with another collection (like SQL JOIN)
  - [ ] `$addFields` — add computed fields

- [ ] **Practical Aggregation Operations**
  - [ ] Filtering data with `$match`
  - [ ] Grouping documents and counting
  - [ ] Sorting results ascending/descending
  - [ ] Calculating totals, averages, min, max with `$sum`, `$avg`, `$min`, `$max`
  - [ ] Joining collections with `$lookup`
  - [ ] Generating reports from data (multi-stage pipelines)

---

## Phase 7: Schema Design & Indexes

> _Design your data right, and queries fly. Design it wrong, and they crawl._

- [ ] **Schema Design Basics**
  - [ ] Dynamic schema — documents in same collection can have different fields
  - [ ] MongoDB vs RDBMS modeling differences
  - [ ] No foreign keys — relationships are handled differently

- [ ] **Embedding vs Referencing**
  - [ ] **Embedding** — store related data inside the same document
    - [ ] Use when: data is accessed together, 1-to-few relationships
  - [ ] **Referencing** — store an ID pointing to another collection
    - [ ] Use when: 1-to-many/many-to-many, data grows independently
  - [ ] Know when to use each approach

- [ ] **Indexes — What & Why**
  - [ ] Indexes speed up read queries (like a book's index)
  - [ ] Without indexes → MongoDB scans every document (COLLSCAN)
  - [ ] With indexes → MongoDB jumps to the right spot (IXSCAN)

- [ ] **Index Types**
  - [ ] **Single-field** — index on one field
  - [ ] **Compound** — index on multiple fields
  - [ ] **Text** — full-text search index
  - [ ] **Geospatial** — index for location-based queries
  - [ ] **Clustered vs Non-Clustered Indexes (RDBMS concept)** — clustered = data stored in index order (faster reads, one per table); non-clustered = separate structure pointing to rows. In MongoDB, analogous to **Clustered Collections** (stored in `_id` order, v6.0+) vs regular secondary indexes

- [ ] **Index Best Practices**
  - [ ] Create indexes on frequently queried fields
  - [ ] Don't over-index — slows down writes
  - [ ] Use `explain()` to check if index is being used
  - [ ] Review and optimize slow queries
  - [ ] **Covered Query** — query that can be fully answered using only the index (no need to touch the actual documents). Check with `explain()`

---

## Phase 8: Deliverables

> _Wrap up and submit._

- [ ] **Complete all MongoDB basics assignments**
  - [ ] Finish all practice problems from the provided assignment document

- [ ] **Backups & Restore**
  - [ ] `mongodump` — export database/collection to BSON files
  - [ ] `mongorestore` — import BSON files back into MongoDB
  - [ ] Backup strategies — regular scheduled backups, replication as redundancy
  - [ ] Atlas backups — automated cloud backups (snapshots)

- [ ] **Prepare & Record Video Presentation**
  - [ ] Summarize learnings: databases, SQL vs NoSQL, MongoDB concepts
  - [ ] Record and upload as unlisted YouTube video
  - [ ] Share the link

---

## Quick Reference Cheat Sheet

| Concept  | MongoDB Equivalent                 |
| -------- | ---------------------------------- |
| Database | `use mydb` / `show dbs`            |
| Table    | Collection                         |
| Row      | Document                           |
| Column   | Field                              |
| INSERT   | `insertOne()` / `insertMany()`     |
| SELECT   | `find()` / `findOne()`             |
| UPDATE   | `updateOne()` / `updateMany()`     |
| DELETE   | `deleteOne()` / `deleteMany()`     |
| WHERE    | Query filters (`{ field: value }`) |
| ORDER BY | `sort()`                           |
| LIMIT    | `limit()` / `skip()`               |
| GROUP BY | `$group` stage                     |
| JOIN     | `$lookup` stage                    |
| INDEX    | `createIndex()`                    |
| COUNT    | `$count` / `countDocuments()`      |

---

> **Tip:** Check off items as you go. If you get stuck on a topic, watch a tutorial, then come back. Progress > perfection.
