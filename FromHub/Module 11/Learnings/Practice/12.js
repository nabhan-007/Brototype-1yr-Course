const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 3, a: 1, d: 4 };

function isShallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // 1. If key counts don't match, return false immediately (catches extra 'd')
  if (keys1.length !== keys2.length) {
    return false;
  }

  // 2. Verify all keys and values match
  for (let key of keys1) {
    if (!Object.hasOwn(obj2, key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(isShallowEqual(obj1, obj2)); // false
