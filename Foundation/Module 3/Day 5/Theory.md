# Day 5 – Revision & Strengthening (Theory)

> This day is focused on **revision** of core concepts covered in Days 1–4. Use this as a quick-reference cheat sheet.

---

## 1. Class & Object — Revision

A **class** is a blueprint; an **object** is the real instance built from it.

```java
class BankAccount {
    String holderName;
    double balance;
    void deposit(double amount) { balance += amount; }
}

BankAccount acc = new BankAccount();  // Object
acc.holderName = "Raj";
acc.deposit(5000);
```

---

## 2. Constructor — Revision

Auto-called when an object is created with `new`. Initializes the object's fields.

```java
Student() { this.name = "Unknown"; }                     // Default
Student(String name, int marks) { this.name = name; }   // Parameterized
```

---

## 3. Access Modifiers — Revision

| Modifier | Same Class | Same Package | Subclass | Everywhere |
|---|---|---|---|---|
| `private` | ✅ | ❌ | ❌ | ❌ |
| `default` | ✅ | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| `public` | ✅ | ✅ | ✅ | ✅ |

---

## 4. Non-Access Modifiers — Revision

| Modifier | Effect |
|---|---|
| `static` | Shared across all objects — belongs to the class |
| `final` | Variable = constant; method = no override; class = no extension |
| `abstract` | Incomplete — must be implemented by a subclass |

```java
class Config {
    static final String APP_NAME = "MyApp";  // Shared constant
}
```

---

## 5. Exception Handling — Revision

```java
try {
    // Risky code
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("Program execution completed.");
}
```

| Keyword | Purpose |
|---|---|
| `try` | Wraps code that might throw an exception |
| `catch` | Handles a specific exception type |
| `finally` | Always executes — cleanup code |
| `throw` | Manually throws an exception |
| `throws` | Declares a method can throw an exception |

---

## 6. Key Concept Summary

| Concept | One-Line Definition |
|---|---|
| **Class** | Blueprint for creating objects |
| **Object** | Real instance of a class |
| **Constructor** | Auto-called method that initializes an object |
| **`this`** | Refers to the current object |
| **`super`** | Refers to the parent class |
| **`static`** | Belongs to the class, shared by all objects |
| **`final`** | Constant / non-overridable / non-extendable |
| **`abstract`** | Incomplete — must be implemented by subclass |
| **Encapsulation** | Hide data with `private` + getters/setters |
| **Inheritance** | Child class inherits parent class members |
| **Polymorphism** | Same method name, different behavior |
| **Abstraction** | Hide implementation, expose only interface |
| **Exception** | Unexpected runtime event that disrupts flow |
| **try-catch-finally** | Mechanism to handle and recover from exceptions |

---

> **Revision Tip:** Don't just memorize — write small programs for each concept. The practicals for today will reinforce all of these.
