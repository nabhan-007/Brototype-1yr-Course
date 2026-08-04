const db = {};
/*

test> use review

review> db.createCollection("students")
{ ok: 1 }
review> show collections
students
review> db.students.insertMany([ { id: 1, name: 'Alice', score: 85, class: 'A' }, { id: 2, namname: 'Bob', score: 92, class: 'B' }, { id: 3, name: 'Charlie', score: 78, class: 'A' }, { id: 4, name: 'David', score: 95, class: 'C' }, { id: 5, name: 'Eva', score: 89, class: 'A' }, { iid: 6, name: 'Freddy', score: 90, class: 'C' }, ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6a66efc12593a6b03a260be5'),
    '1': ObjectId('6a66efc12593a6b03a260be6'),
    '2': ObjectId('6a66efc12593a6b03a260be7'),
    '3': ObjectId('6a66efc12593a6b03a260be8'),
    '4': ObjectId('6a66efc12593a6b03a260be9'),
    '5': ObjectId('6a66efc12593a6b03a260bea')
  }
}
review> db.students.find()
[
  {
    _id: ObjectId('6a66efc12593a6b03a260be5'),
    id: 1,
    name: 'Alice',
    score: 85,
    class: 'A'
  },
  {
    _id: ObjectId('6a66efc12593a6b03a260be6'),
    id: 2,
    name: 'Bob',
    score: 92,
    class: 'B'
  },
  {
    _id: ObjectId('6a66efc12593a6b03a260be7'),
    id: 3,
    name: 'Charlie',
    score: 78,
    class: 'A'
  },
  {
    _id: ObjectId('6a66efc12593a6b03a260be8'),
    id: 4,
    name: 'David',
    score: 95,
    class: 'C'
  },
  {
    _id: ObjectId('6a66efc12593a6b03a260be9'),
    id: 5,
    name: 'Eva',
    score: 89,
    class: 'A'
  },
  {

review> db.students.find({ score: { $gt: 85 }, $in: { class: ["A", "B" } })
Uncaught:
SyntaxError: Unexpected token, expected "," (1:63)

> 1 | db.students.find({ score: { $gt: 85 }, $in: { class: ["A", "B" } })
    |                                                                ^
  2 |

review> db.students.find({ score: { $gt: 85 }, $in: { class: ["A", "B"] } })
MongoServerError[BadValue]: unknown top level operator: $in. If you have a field name that starts with a '$' symbol, consider using $getField or $setField.
review> db.students.find({ score: { $gt: 85 }, class: { $in: ["A", "B"] } })
[
  {

review> db.students.aggregate([ $group: { _id: null, avgScore: { $avg: $score } } ])
Uncaught:
SyntaxError: Unexpected token, expected "," (1:30)

> 1 | db.students.aggregate([ $group: { _id: null, avgScore: { $avg: $score } } ])
    |                               ^
  2 |

review> db.students.aggregate([ {$group: { _id: null, avgScore: { $avg: $score } }} ])
ReferenceError: $score is not defined
review> db.students.aggregate([ {$group: { _id: null, avgScore: { $avg: "$score" } }} ])
[ { _id: null, avgScore: 86.16666666666667 } ]
review> db.students.aggregate([ { $match: { class: "A" } }, {$group: { _id: null, avgScore: { $avg: "$score" } }} ])
[ { _id: null, avgScore: 82 } ]
review> exit

 */