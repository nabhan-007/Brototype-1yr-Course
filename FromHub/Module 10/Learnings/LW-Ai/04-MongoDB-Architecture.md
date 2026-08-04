# Phase 4: MongoDB Architecture

## Core Concepts

- **Database** → **Collection** → **Document** → **Field**
- Document = BSON record, flexible fields
- Collection = group of documents (like SQL table but no fixed schema)

## JSON vs BSON

| JSON           | BSON                                           |
| -------------- | ---------------------------------------------- |
| Text format    | Binary format                                  |
| Human-readable | Machine-readable (faster)                      |
| Limited types  | Extended types (Date, ObjectId, Decimal, etc.) |

## ObjectId (12 bytes)

- 4 bytes: Timestamp (creation time)
- 5 bytes: Machine ID (3) + Process ID (2) — unique per server
- 3 bytes: Counter — prevents duplicates
- Sorting by `_id` ≈ sorting by creation time

## Storage & Data Flow

- **WiredTiger** = default storage engine (document-level concurrency, compression)
- **Read path:** Query → Index check → IXSCAN (fast) or COLLSCAN (slow) → Fetch data
- **Write path:** Journal → Cache (RAM) → Flush to disk (~60s)
- **Journaling:** Crash recovery — replays on restart
- **Working set:** Data + indexes that fit in RAM — determines query speed

## Specialized Features

- **Capped Collections:** Fixed-size collection — when full, oldest docs auto-deleted. Good for logs, chat, feeds.
  ```javascript
  db.createCollection("logs", { capped: true, size: 1048576, max: 1000 });
  ```
- **Oplog (Operation Log):** Capped collection in `local` db. Records every write; secondaries read it to replicate from primary.
- **TTL Indexes:** Auto-delete docs after a time period. Good for sessions, temp codes.
  ```javascript
  db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
  ```
- **GridFS:** For files > 16MB. Splits into chunks (255KB default), stored in `fs.files` (metadata) + `fs.chunks` (binary data).

## Replication & Replica Sets

- **Replication** = copying data across multiple servers for redundancy & fault tolerance.
- **Replica Set** = 3+ MongoDB servers holding the same data.
- **Primary** (1): accepts ALL writes, replicates to secondaries.
- **Secondary** (1+): copies from primary, read-only by default, can become primary on failover.
- **Arbiter** (optional): votes in elections only, stores no data.
- **Failover:** Primary dies → secondaries detect via heartbeat (every 2s) → election → new primary. Needs **majority** (>50%) of votes. Old primary self-heals into secondary.
- **Rule:** Odd number of servers. 3-node tolerates 1 failure, 5-node tolerates 2.

## Sharding & Shard Keys

- **Sharding** = distributing data across multiple servers when data exceeds one server's capacity.
- **3 Components:**
  - **Shard** — stores a subset of data (each shard is itself a replica set)
  - **mongos** — router; directs client queries to the right shard
  - **Config Server** — metadata: which shard holds which data range
- **Shard Key** — the field used to distribute documents across shards.
  ```javascript
  sh.enableSharding("myDB");
  sh.shardCollection("myDB.users", { userId: 1 });
  ```
- **Good shard key = High cardinality + Even distribution + Query isolation.** Bad key → hot shard, and key can't be changed later (needs reshard).
