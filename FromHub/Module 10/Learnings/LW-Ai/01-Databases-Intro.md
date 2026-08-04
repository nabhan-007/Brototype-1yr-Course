# Phase 1: Foundation — Databases & MongoDB Intro

## What is a Database?

- **Definition:** Organized collection of structured data that can be easily accessed, managed, and updated
- **Why needed:** Persistence, fast retrieval, multi-user, scaling, security
- **Real-world:** Amazon (products/orders), Instagram (users/posts), banking (transactions)

## SQL vs NoSQL

| Aspect      | SQL                              | NoSQL                                  |
| ----------- | -------------------------------- | -------------------------------------- |
| Structure   | Tables, rows, columns            | Documents, key-values, graphs, columns |
| Schema      | Fixed — define before inserting  | Dynamic — fields can vary per record   |
| Scalability | Vertical (buy bigger server)     | Horizontal (add more cheap servers)    |
| Flexibility | Low — ALTER TABLE for new fields | High — just use new field              |
| Consistency | Strong (ACID)                    | Eventual (BASE)                        |
| Best for    | Banking, ERP, structured data    | Social media, IoT, big data, real-time |

## 4 Types of NoSQL Databases

1. **Document** — MongoDB, CouchDB (JSON-like docs)
2. **Key-Value** — Redis, DynamoDB (key → value)
3. **Column-Family** — Cassandra, HBase (rows with many columns)
4. **Graph** — Neo4j, ArangoDB (nodes + relationships)

## Why MongoDB?

- Document-oriented (JSON/BSON) — natural for JavaScript developers
- Schema-flexible — no migrations needed
- Horizontal scaling via sharding — cheap, unlimited growth
- Rich query language — filters, sorting, aggregation, joins
- Large community, free tier (Atlas), used by eBay/Uber/Adobe
