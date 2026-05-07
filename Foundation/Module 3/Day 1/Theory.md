# Day 1 – OOP Basics (Theory)

---

## 1. Difference Between High-Level and Low-Level Programming Languages

| Feature | High-Level Language | Low-Level Language |
|---|---|---|
| **Readability** | Easy to read and write (close to English) | Difficult to read (machine/assembly code) |
| **Abstraction** | Highly abstracted from hardware | Little to no abstraction |
| **Portability** | Portable across different systems | Platform-dependent |
| **Execution Speed** | Slower (needs compilation/interpretation) | Faster (directly understood by machine) |
| **Memory Management** | Managed by the language/runtime | Manually managed by the programmer |
| **Examples** | Java, Python, C++, JavaScript | Assembly Language, Machine Code (Binary) |

> **Summary:** High-level languages are designed for humans — they are easy to write and understand. Low-level languages are designed for machines — they give direct control over hardware but are hard to work with.

---

## 2. What is OOP (Object-Oriented Programming)?

**OOP (Object-Oriented Programming)** is a programming paradigm that organizes software design around **objects** rather than functions and logic.

An object is a real-world entity that has:
- **Properties (fields/attributes)** — what it *has* (e.g., a car has color, speed)
- **Behaviors (methods)** — what it *does* (e.g., a car can drive, brake)

In OOP, we model our programs by creating **classes** (blueprints) and **objects** (instances of those blueprints).

> **Example:** A `User` class is a blueprint. `user1` and `user2` are objects created from that blueprint.

---

## 3. Why We Use OOP

We use OOP because it helps us:

- **Model real-world problems** — Programs mirror real-world entities (e.g., `BankAccount`, `Student`, `Employee`).
- **Organize large codebases** — Code is split into manageable, self-contained classes instead of one big block.
- **Avoid repetition (DRY)** — Shared logic is written once in a class and reused via objects.
- **Collaborate easily** — Different team members can work on different classes independently.
- **Maintain and scale code** — Changes in one class don't break unrelated parts of the program.

---

## 4. Advantages of OOP

1. **Modularity** — Each class is a self-contained module. Easier to debug and test individually.
2. **Reusability** — Classes can be reused across projects or extended via inheritance.
3. **Scalability** — Easy to add new features by adding new classes without touching existing code.
4. **Data Security** — Encapsulation hides internal data from outside access (using `private`).
5. **Maintainability** — Clean structure makes code easier to read, update, and fix.
6. **Flexibility** — Polymorphism allows the same method to behave differently in different contexts.

---

## 5. What is a Class?

A **class** is a **blueprint or template** for creating objects. It defines:
- What **properties** (fields) an object will have.
- What **behaviors** (methods) an object can perform.

A class itself does **not** occupy memory — only objects created from it do.

```java
// Blueprint (Class)
public class User {
    String name;
    int age;

    void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}
```

> **Analogy:** A class is like an architectural blueprint of a house. The blueprint is not the house — it just describes how the house should be built.

---

## 6. What is an Object?

An **object** is a **real instance** of a class. When you create an object, memory is allocated and the object gets its own copy of the class's properties.

```java
// Creating objects from the User class
User user1 = new User();
user1.name = "Arjun";
user1.age = 21;
user1.displayDetails();
```

- `user1` is an **object** of the `User` class.
- `new User()` allocates memory and creates the object.
- Each object has its own independent data.

> **Analogy:** If the class is a house blueprint, the object is the actual house built from it. You can build many houses from the same blueprint — each is independent.

---

## 7. Constructor and Types of Constructors

A **constructor** is a special method that is **automatically called when an object is created**. It is used to initialize the object's properties.

### Rules of a Constructor:
- It has the **same name as the class**.
- It has **no return type** (not even `void`).
- It is called automatically with the `new` keyword.

### Types of Constructors

#### a) Default Constructor
A constructor with **no parameters**. Used to assign default/initial values to fields.

```java
User() {
    this.name = "Unknown";
    this.age = 0;
    this.email = "Not Provided";
}

// Usage
User user1 = new User(); // name = "Unknown", age = 0
```

#### b) Parameterized Constructor
A constructor that **accepts arguments** to initialize fields with custom values.

```java
User(String name, int age, String email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

// Usage
User user2 = new User("Arjun", 21, "arjun@email.com");
```

> Both constructors can exist in the same class — Java picks the right one based on what arguments you pass (**constructor overloading**).

---

## 8. What is the Purpose of the `this` Keyword?

The **`this`** keyword is a reference to the **current object** — the object on which the method or constructor is being called.

### Main Uses:

#### a) Distinguish instance variables from local parameters (most common use)
When a constructor parameter has the **same name** as a field, `this` clarifies which is which.

```java
Student(String name, int rollNo) {
    this.name = name;   // this.name = instance variable, name = parameter
    this.rollNo = rollNo;
}
```

Without `this`, the compiler would get confused — both `name` on the left and right would refer to the local parameter, and the field would never be set.

#### b) Call another constructor in the same class
```java
Student() {
    this("Unknown", 0); // Calls the parameterized constructor
}
```

#### c) Pass the current object as an argument to a method
```java
void register(Database db) {
    db.save(this); // passes the current Student object
}
```

> **Key Rule:** `this` always refers to the object currently being worked with.

---

## 9. Introduction to the 4 Pillars of OOP

OOP is built on four core principles, often called the **4 Pillars**:

### 1. 🔒 Encapsulation
**Bundling data (fields) and methods together inside a class, and restricting direct outside access.**

- Fields are made `private`.
- Access is provided through `public` getter and setter methods.
- Protects data from accidental modification.

```java
private double balance; // hidden
public double getBalance() { return balance; } // controlled access
```

### 2. 🧬 Inheritance
**A child class acquires the properties and behaviors of a parent class.**

- Promotes **code reuse** — no need to rewrite common logic.
- Uses the `extends` keyword in Java.

```java
class Employee { String name; }
class Manager extends Employee { int teamSize; } // Manager inherits name
```

### 3. 🎭 Polymorphism
**The ability of one method or object to take many forms.**

- **Compile-time (Method Overloading):** Same method name, different parameters.
- **Runtime (Method Overriding):** Child class redefines a parent class method.

```java
void calculateFee(int amount) { ... }
void calculateFee(int amount, int discount) { ... } // Overloading
```

### 4. 🎭 Abstraction
**Hiding complex implementation details and showing only what is necessary.**

- Achieved using `abstract` classes and `interfaces`.
- Users interact with a simple interface without knowing the internal logic.

```java
abstract class PaymentMethod {
    abstract void pay(double amount); // No implementation — just the contract
}
```

---

> **Remember:** The 4 pillars work **together** — Encapsulation protects data, Inheritance shares it, Polymorphism shapes behavior, and Abstraction simplifies complexity.
