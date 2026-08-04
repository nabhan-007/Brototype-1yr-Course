# Phase 2: NoSQL Deep Dive

## 4 Types of NoSQL Databases

1. **Document** — MongoDB, CouchDB (JSON-like docs)
2. **Key-Value** — Redis, DynamoDB (key → value)
3. **Column-Family** — Cassandra, HBase (rows with many columns)
4. **Graph** — Neo4j, ArangoDB (nodes + relationships)

## ACID vs BASE

- **ACID** (SQL): Atomicity, Consistency, Isolation, Durability
- **BASE** (NoSQL): Basically Available, Soft state, Eventual consistency
- Trade-off: ACID = strong consistency (slower), BASE = availability (faster)

## CAP Theorem

- **C**onsistency — every read gets latest data
- **A**vailability — every request gets a response
- **P**artition Tolerance — system works despite network failures
- Choose only **2 of 3**. MongoDB = **CP** (Consistency + Partition Tolerance)

## Benefits of NoSQL

- Horizontal scalability (add more servers)
- Schema flexibility (no migrations)
- High availability (built-in replication)
- Handles unstructured data

## Transactions (since MongoDB 4.0)

- Multi-document ACID transactions across collections
- All-or-nothing: if one op fails, all roll back
- Overhead — only use when atomicity across documents is needed
