# Q11 – Module 2 Theory: Array Assignment in C

## ❓ Question

Can you assign one array to another directly in C like this?

```c
int a[] = {1, 2, 3};
int b[] = {4, 5, 6};
a = b;
```

Explain **why or why not**, and write the **correct way** to copy an array in C
(show two methods).

---

## ✍️ Your Answer

No, you cannot assign one array to another because, the array is contiguos memory stuff. If you want to do so, then you have to use a loop.

---

## 📝 Examiner Remarks

**Score: 6/10**

**What you got right:**

- Correct that you cannot directly assign one array to another ✅
- Correct that a loop is needed ✅
- The "contiguous memory" explanation shows you understand *why* — good ✅

**What was missing:**

- The deeper reason: In C, an array name is a **constant pointer** to the first element. You cannot reassign a pointer that is `const`. That's the technical reason `a = b` fails.
- The question asked for **two methods** — you only gave one (loop). The second method is `memcpy()`:

```c
// Method 1: Loop
for (int i = 0; i < 3; i++) { a[i] = b[i]; }

// Method 2: memcpy
#include <string.h>
memcpy(a, b, sizeof(b));
```
