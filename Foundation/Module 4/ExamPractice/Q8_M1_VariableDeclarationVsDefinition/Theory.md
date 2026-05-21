# Q8 – Module 1 Theory: Variable Declaration vs Definition

## ❓ Question

What exactly is the difference between a **variable declaration** and a **variable definition** in C?
Are they always the same thing? Give an example of each.

---

## ✍️ Your Answer

Variable declaration is just reserving memory for the variable but it is still empty/garbage value. Until the variable is defined, then, what ever in it is replaced with the defined data.


---

## 📝 Examiner Remarks

**Score: 6/10**

**What you got right:**
- The core intuition is correct — declaration reserves space, definition assigns a value.

**What was missing / inaccurate:**
- The term "reserving memory" is used for both declaration AND definition — you needed to be more precise.
- A **declaration** tells the compiler "this variable exists, with this name and type." Memory *may or may not* be allocated yet (e.g., `extern int x;` in C declares without allocating).
- A **definition** both declares the variable AND allocates memory for it.
- In C, `int x;` is actually **both** a declaration and a definition at the same time (declaration + memory allocated + garbage value).
- `extern int x;` is a **pure declaration** — no memory allocated, just telling the compiler it exists somewhere else.
- You also did not provide examples as the question asked.

**Key answer you should remember:**
```
Declaration → tells compiler the name & type (no memory necessarily)
Definition  → allocates memory (in C, int x; is both simultaneously)
extern int x; → declaration only (no memory, defined elsewhere)
```
