# Module 10 — MongoDB & Databases Checklist

> **Total Topics:** 14+ | **Level:** Complete Beginner
> Follow the phases in order. Each phase builds on the previous.

---

## Phase 1: Foundation — What & Why

> _Before touching any code, understand what databases are and why they exist._

- [x] **Watch Task Explanation Video**
  - [x] Refer to the provided task explanation video

- [x] **What is a Database (DB)?**
  - [x] Definition — an organized collection of structured data
  - [x] Why applications need databases (persistence, retrieval, scaling)
  - [x] Real-world examples (e-commerce, social media, banking)

- [x] **SQL vs NoSQL — Key Differences**
  - [x] SQL = relational (tables, rows, fixed schema)
  - [x] NoSQL = non-relational (flexible models, dynamic schema)
  - [x] Compare on: Structure, Scalability, Flexibility, Performance
  - [x] When to use which

- [x] **Why MongoDB?**
  - [x] Document-oriented (stores JSON-like data)
  - [x] Schema-flexible — no rigid table structure needed
  - [x] Horizontal scaling via sharding (add more cheap servers)
  - [x] **Vertical vs Horizontal Scaling** — vertical = bigger server (SQL), horizontal = more servers (NoSQL)
  - [x] Rich query language and indexing
  - [x] Large community and ecosystem

---

## Phase 2: NoSQL Deep Dive

> _Understand the theory behind NoSQL before writing queries._

- [x] **Types of NoSQL Databases**
  - [x] Key-Value stores (Redis, DynamoDB)
  - [x] Document databases (MongoDB, CouchDB)
  - [x] Column-Family stores (Cassandra, HBase)
  - [x] Graph databases (Neo4j, ArangoDB)
  - [x] Know which type MongoDB falls under (Document)

- [x] **ACID vs BASE Properties**
  - [x] ACID: Atomicity, Consistency, Isolation, Durability (SQL)
  - [x] BASE: Basically Available, Soft state, Eventual consistency (NoSQL)
  - [x] Trade-offs between strong consistency vs availability

- [x] **CAP Theorem**
  - [x] Consistency — every read gets the latest write
  - [x] Availability — every request gets a response
  - [x] Partition Tolerance — system works despite network failures
  - [x] You can only pick 2 out of 3 (CP, AP, or CA)
  - [x] MongoDB chooses **CP** (consistency + partition tolerance)

- [x] **Benefits of NoSQL**
  - [x] Horizontal scalability (add more servers)
  - [x] Schema flexibility (no migration headaches)
  - [x] High availability (built-in replication)
  - [x] Handles unstructured/semi-structured data

- [x] **Transactions in MongoDB**
  - [x] Multi-document ACID transactions (supported since v4.0)
  - [x] When to use transactions vs when to avoid them
  - [x] Transactions span multiple documents/collections
  - [x] Trade-off: transactions add overhead — don't use for everything

---

## Phase 3: MongoDB Setup

> _Get MongoDB running on your machine._

- [x] **Installation**
  - [x] Download MongoDB Community Edition
  - [x] Install on your OS (Windows / Mac / Linux)
  - [x] Verify installation with `mongod --version`

- [x] **Start & Stop MongoDB**
  - [x] Start the MongoDB server process (`mongod`) — runs as Windows service (auto)
  - [x] Connect to it using MongoDB Shell (`mongosh`)
  - [x] Stop the server properly (Ctrl+C or `db.shutdownServer()`)
  - [x] Understand default port: **27017**
  - [x] Service management is OS-specific: Windows → `Start/Stop-Service MongoDB` (admin); macOS → `brew services start/stop mongodb-community`; Linux → `systemctl start/stop mongod`

- [x] **MongoDB Shell (mongosh) Basics**
  - [x] Connect to a database — `mongosh` (local) or full string (Atlas)
  - [x] Switch databases (`use databaseName`)
  - [x] Show all databases (`show dbs`)
  - [x] Show collections (`show collections`)
  - [x] Basic insert and find commands (preview of CRUD)

---

## Phase 4: MongoDB Architecture

> _Understand how MongoDB stores and manages data internally._

- [x] **Core Concepts**
  - [x] **Document** — a single record (JSON-like key-value pairs)
  - [x] **Collection** — a group of documents (like a table)
  - [x] **Database** — a group of collections
  - [x] Hierarchy: Database → Collection → Document → Field
  - [x] **ObjectId Structure** — 12 bytes: 4-byte timestamp + 5-byte machine/process ID + 3-byte counter (auto-generated `_id`)

- [x] **JSON vs BSON**
  - [x] JSON = human-readable text format
  - [x] BSON = binary-encoded, faster for MongoDB to parse
  - [x] BSON supports more data types (Date, ObjectId, Binary, etc.)

- [x] **Storage & Data Flow**
  - [x] Storage engines (WiredTiger — the default)
  - [x] Read path: query → index check → fetch from disk/cache
  - [x] Write path: write to journal → write to cache → flush to disk
  - [x] Journaling — crash recovery mechanism
  - [x] Working set — the data + indexes that fit in RAM

- [x] **Specialized Features**
  - [x] **Capped Collections** — fixed-size, auto-removes old docs
  - [x] **Oplog** — operation log for replication
  - [x] **TTL Indexes** — auto-delete docs after a time period
  - [x] **GridFS** — storing large files (images, videos) by splitting into chunks

- [x] **Replication & Replica Sets**
  - [x] What is replication — copying data across servers for redundancy
  - [x] **Primary** — accepts all writes, replicates to secondaries
  - [x] **Secondary** — read-only copies, can become primary on failover
  - [x] **Arbiter** — votes in elections but doesn't store data (lightweight)
  - [x] **Failover** — if primary goes down, secondaries elect a new primary
  - [x] Automatic failover and self-healing

- [x] **Sharding & Shard Keys**
  - [x] What is sharding — splitting data across multiple servers
  - [x] **Shard Key** — the field MongoDB uses to distribute data
  - [x] How to choose a shard key — high cardinality, evenly distributed
  - [x] When sharding is needed — data exceeds single server capacity
  - [x] **mongos** — router that directs queries to the right shard

---

## Phase 5: CRUD Operations

> _The bread and butter — Create, Read, Update, Delete._

- [x] **MongoDB Data Types**
  - [x] String, Number (Int32, Int64, Double, Decimal128)
  - [x] Boolean, Array, Object (embedded doc)
  - [x] ObjectId, Date, Null, Binary Data
  - [x] Timestamp, Regular Expression

- [x] **Create (Insert)**
  - [x] `insertOne()` — insert a single document
  - [x] `insertMany()` — insert multiple documents at once

- [x] **Read (Query)**
  - [x] `find()` — get multiple documents
  - [x] `findOne()` — get a single document
  - [x] Filtering with query operators (`$gt`, `$lt`, `$in`, `$ne`, etc.)
  - [x] Projection — select specific fields
  - [x] `limit()`, `sort()`, `skip()` — control results
  - [x] **View Collection** — read-only virtual collection based on an aggregation pipeline

- [x] **Update**
  - [x] `updateOne()` — update a single document
  - [x] `updateMany()` — update multiple documents
  - [x] Update operators: `$set`, `$unset`, `$inc`, `$push`, `$pull`
  - [x] `replaceOne()` — replace entire document
  - [x] **Upsert** — `updateOne({ filter }, { $set: { data } }, { upsert: true })` — update if exists, insert if not

- [x] **Delete**
  - [x] `deleteOne()` — delete a single document
  - [x] `deleteMany()` — delete multiple documents
  - [x] `findOneAndDelete()` — delete and return the doc

- [x] **Advanced Operations**
  - [x] Bulk inserts (ordered vs unordered)
  - [x] Updating multiple documents with conditions
  - [x] Complex querying, filtering, and limiting results

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
  - [ ] Finish all practice problems from the assignment document (`Module 10\Assignments\Basic exercise MongoDB.pdf`)

- [ ] **Backups & Restore**
  - [ ] `mongodump` — export database/collection to BSON files
  - [ ] `mongorestore` — import BSON files back into MongoDB
  - [ ] Backup strategies — regular scheduled backups, replication as redundancy
  - [ ] Atlas backups — automated cloud backups (snapshots)

- [x] **Prepare & Record Video Presentation**
  - [x] Summarize learnings: databases, SQL vs NoSQL, MongoDB concepts
  - [x] Record and upload as unlisted YouTube video
  - [x] Share the link

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
| ORDER BY | `sort()`                            |
| LIMIT    | `limit()` / `skip()`               |
| GROUP BY | `$group` stage                     |
| JOIN     | `$lookup` stage                    |
| INDEX    | `createIndex()`                    |
| COUNT    | `$count` / `countDocuments()`      |

---

> **Tip:** Check off items as you go. If you get stuck on a topic, watch a tutorial, then come back. Progress > perfection.
