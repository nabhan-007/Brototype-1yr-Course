# Day 2 – Inheritance & Polymorphism (Theory)

---

## 1. What is Inheritance and Why is it Used?

**Inheritance** is an OOP feature that allows a **child class (subclass)** to acquire the properties and methods of a **parent class (superclass)**.

```java
class Animal {
    String name;
    void eat() { System.out.println(name + " is eating."); }
}

class Dog extends Animal {
    void bark() { System.out.println(name + " is barking."); }
}
```

`Dog` inherits `name` and `eat()` from `Animal` without rewriting them.

### Why is it Used?
- ✅ **Code Reusability** — Write once in the parent, reuse in all children.
- ✅ **Avoid Duplication** — No need to copy common logic across classes.
- ✅ **Logical Hierarchy** — Represents real-world "is-a" relationships (e.g., a `Manager` *is an* `Employee`).
- ✅ **Easier Maintenance** — Fix a bug in the parent and all children benefit.

> **Keyword used in Java:** `extends`

---

## 2. Types of Inheritance

### a) Single Inheritance
One child class inherits from **one parent class**.

```
Parent → Child
```

```java
class Employee { ... }
class Manager extends Employee { ... }
```

---

### b) Multilevel Inheritance
A class inherits from a child, which itself inherits from a parent — forming a **chain**.

```
Grandparent → Parent → Child
```

```java
class User { ... }
class Staff extends User { ... }
class Admin extends Staff { ... }
```

---

### c) Hierarchical Inheritance
**Multiple child classes** inherit from the **same parent class**.

```
        Parent
       /      \
  Child1     Child2
```

```java
class Account { ... }
class SavingsAccount extends Account { ... }
class CurrentAccount extends Account { ... }
```

---

### d) Hybrid Inheritance
A **combination** of two or more types of inheritance.

> ⚠️ Java does **not** support hybrid (or multiple) inheritance directly through classes to avoid ambiguity (the "Diamond Problem"). It can be achieved through **interfaces**.

---

## 3. Proper Differences Between Each Inheritance Type

| Type | Parent Classes | Child Classes | Chain? | Java Support |
|---|---|---|---|---|
| **Single** | 1 | 1 | No | ✅ Yes |
| **Multilevel** | 1 (per level) | 1 (per level) | Yes | ✅ Yes |
| **Hierarchical** | 1 | Many | No | ✅ Yes |
| **Hybrid** | Multiple | Multiple | Possible | ⚠️ Via interfaces only |

---

## 4. What is Polymorphism and its Importance?

**Polymorphism** means **"many forms"**. In OOP, it is the ability of a single method, object, or interface to behave differently in different contexts.

```java
// Same method name, different behavior
class Shape {
    void draw() { System.out.println("Drawing a shape"); }
}
class Circle extends Shape {
    void draw() { System.out.println("Drawing a circle"); } // Different behavior
}
```

### Why is it Important?
- ✅ **Flexibility** — One interface, multiple implementations.
- ✅ **Extensibility** — Add new classes without changing existing code.
- ✅ **Cleaner Code** — Reduces `if-else` chains by letting the object decide its behavior.

---

## 5. Compile-Time Polymorphism vs Runtime Polymorphism

| Feature | Compile-Time | Runtime |
|---|---|---|
| **Also Called** | Static polymorphism | Dynamic polymorphism |
| **Achieved By** | Method Overloading | Method Overriding |
| **Resolved At** | Compile time | Runtime (JVM decides) |
| **Inheritance Required?** | No | Yes |
| **Example** | `add(int, int)` vs `add(double, double)` | `Manager.calculateSalary()` overrides `Employee.calculateSalary()` |

---

## 6. Method Overloading

**Method Overloading** means defining **multiple methods with the same name** but **different parameters** (different number, type, or order of parameters) in the **same class**.

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}
```

- Java chooses the correct method at **compile time** based on the arguments.
- The **return type alone** cannot differentiate overloaded methods.

---

## 7. Method Overriding

**Method Overriding** means a **child class redefines a method** that already exists in its parent class with the **same name, same parameters, and same return type**.

```java
class Employee {
    void calculateSalary() {
        System.out.println("Base salary calculated.");
    }
}

class Manager extends Employee {
    @Override
    void calculateSalary() {
        System.out.println("Manager salary = Base + Bonus.");
    }
}
```

- The `@Override` annotation is optional but recommended — it tells the compiler you intend to override.
- The correct method is chosen at **runtime** based on the actual object type.

---

## 8. `super` Keyword and Its Use

The **`super`** keyword refers to the **parent class** of the current object. It is used to:

### a) Call the parent class constructor
```java
class Employee {
    String name;
    Employee(String name) {
        this.name = name;
    }
}

class Manager extends Employee {
    int teamSize;
    Manager(String name, int teamSize) {
        super(name);            // Calls Employee's constructor
        this.teamSize = teamSize;
    }
}
```

### b) Call a parent class method (especially after overriding it)
```java
class Manager extends Employee {
    @Override
    void calculateSalary() {
        super.calculateSalary();  // Calls Employee's version first
        System.out.println("Adding manager bonus.");
    }
}
```

### c) Access a parent class field (when shadowed by a child field)
```java
class Parent { int x = 10; }
class Child extends Parent {
    int x = 20;
    void show() {
        System.out.println(super.x); // 10 (parent's x)
        System.out.println(this.x);  // 20 (child's x)
    }
}
```

> **Key Rule:** `super()` must be the **first statement** in a constructor if used.

---

> **Remember:** Inheritance is about *sharing* structure, and Polymorphism is about *changing* behavior — together they make OOP powerful and flexible.
