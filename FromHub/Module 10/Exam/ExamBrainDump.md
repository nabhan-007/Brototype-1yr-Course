# ExamBrainDump: Module - 10 (27/07/2026)

## Theory

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- Asked the pendings from the previous module (M9) — Node.js streams, router chaining, status codes, etc.

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What are the types of NoSQL databases?

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is the `CAP theorem` and which two of its guarantees does MongoDB satisfy?

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is the difference between `JSON` and `BSON`? Which one does MongoDB use and why?

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What are `Capped Collections`?

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- How do you do pattern matching using `regex`?

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What are `indexes`? What are the types of indexes and how does indexing work?

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is the difference between a `clustered` and `non-clustered` collection?

</div>

<hr style="border: 2px solid #888; border-radius: 6px">

## Practicals

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- Create a database named `review`

```shell
use review
```

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- Create a collection in it called `students`
- (I typed `insertOne` but was told `NO` — had to use `createCollection`, not `insertOne`)

```shell
db.createCollection("students")
```

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- Syntax to rename a collection — I didn't know this 🤷 (pending)

```shell
db.students.renameCollection("newName")
```

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- Insert the given data into the collection

```shell
db.students.insertMany([
  { id: 1, name: 'Alice', score: 85, class: 'A' },
  { id: 2, name: 'Bob', score: 92, class: 'B' },
  { id: 3, name: 'Charlie', score: 78, class: 'A' },
  { id: 4, name: 'David', score: 95, class: 'C' },
  { id: 5, name: 'Eva', score: 89, class: 'A' },
  { id: 6, name: 'Freddy', score: 90, class: 'C' }
])
```

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- Show only the names

```shell
db.students.find({}, { _id: 0, name: 1 })
```

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- Show all the names ending in the letter `a` — didn't know this 🤷 (pending)

```shell
db.students.find({ name: { $regex: /a$/i } })
```

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- Score greater than `85` in class `A` or `B`
- Trap: `$in` must go on the field, not at the top level

```shell
db.students.find({ score: { $gt: 85 }, class: { $in: ["A", "B"] } })
```

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- Decrement each student's mark by `2`

```shell
db.students.updateMany({}, { $inc: { score: -2 } })
```

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- Find the average of all the marks of class `A`
- Trap: the field in `$avg` must be a quoted string `"$score"`

```shell
db.students.aggregate([
  { $match: { class: "A" } },
  { $group: { _id: null, avgScore: { $avg: "$score" } } }
])
```

</div>

---

> In case of MongoDB anyone can have the brain dump of their practicals by just copying everything from their terminal before exiting from it.
