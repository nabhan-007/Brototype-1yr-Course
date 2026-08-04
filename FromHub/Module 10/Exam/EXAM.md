# 📘 Technical Notes

## ❗ Pending Questions & Tasks

- **Theory (T):**
  - Modify (rename) a collection — `renameCollection()` syntax
  - Pattern matching using regex (`$regex`)
  - How indexing works (index internals, B-tree)
  - Clustered vs non-clustered collection
- **Practical (P):**
  - Collection rename command
  - Regex-based queries

---

# 📊 Marks Overview

## 🧠 Theory

- Score: **6.5 / 10**
- Cut-off: 5
- Status: ✅ Passed

## 🛠 Practical

- Score: **6.5 / 10**
- Cut-off: 5
- Status: ✅ Passed

## 🏆 Full Domain 1

- Completed on: **Jul 27, 2026 12:24 PM** (1st attempt)
- Overall Score: **6.5 / 10**
- Status: ✅ Passed

> Scheduled: Jul 27, 2026 11:00 AM · Start: 11:05 AM · End: 11:35 AM
> Coordinator: Ajay Gopinath S P · Batch: BCK327

## 💬 Examiner Feedback

- Communication: Satisfactory.
- Pending topics: rename collection, regex pattern matching, how indexing works, clustered collection.

---

# 🗣️ Communication Skills Breakdown

_Note: Detailed numerical scores were not provided._

### ✅ Feedback

- Communication was Satisfactory — consistent with previous modules, no red flags.

---

# 🧠 Observations (Real Talk)

- **Bounced back after the M9 scare:** After M9's near-fail (5.3/10, three attempts), you returned to 6.5/10 — your M7/M8 baseline. The rebound shows the M9 grind paid off.
- **Perfectly balanced but mid-pack:** Theory 6.5 and Practical 6.5 are identical — safe, but there's no safety margin and no section that's genuinely strong yet.
- **MongoDB fundamentals are the new frontier:** The pending list (indexing, clustered collections) is all _how-it-works-under-the-hood_ territory. You can run the queries, but the internals still need study.
- **Everyday ops slipped:** `renameCollection()` and `$regex` pattern matching were called out as pendings — both are bread-and-butter MongoDB commands.
- **The exam played by the rules:** You were told to create the collection with `db.createCollection()` (not `insertOne`) and had to rename before inserting — the terminal dump in `1.js` captures the exact flow and the syntax traps (top-level `$in`, unquoted `$score`).

---

# 🚀 What You Should Do Next

- **Learn `renameCollection()`:** Know the syntax — `db.<oldName>.renameCollection("<newName>")` — and when it's valid (can't rename to an existing collection).
- **Master regex matching:** Study `$regex` patterns with flags (`i` for case-insensitive) and anchors (`^` start, `$` end), plus the alternative `{ $regex: /pattern/flags }` vs string form.
- **Understand indexes:** What they are, the types (single, compound, multikey, text), and _how indexing works_ internally (B-tree traversal, `explain()`).
- **Clustered vs non-clustered:** Learn MongoDB 5.0+ clustered collections (data stored in index order) vs the default non-clustered setup.
- **Revisit the shell traps:** The `$in` and `$avg: "$score"` mistakes in `1.js` are classic examiner traps — know why quoting and placement matter.
- **Push for 7+:** Both sections at 6.5 means the cut-off is only 1.5 marks away. Build the safety margin before the next domain.
