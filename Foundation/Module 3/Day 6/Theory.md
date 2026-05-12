# Day 6 – Mastering the 4 Pillars of OOP (Theory)

> Day 6 is a **deep-dive and mastery** session on the 4 core pillars of OOP. This file covers each pillar in detail with real-world analogies and practical Java examples.

---

## Pillar 1 — 🔒 Encapsulation

### Definition

**Encapsulation** is the bundling of data (fields) and methods into a single unit (class), while **restricting direct access** to the data from outside using access modifiers.

### Real-World Analogy

An **ATM machine** — you can deposit or withdraw money, but you cannot directly touch the internal cash vault. Access is controlled through a defined interface (buttons/card).

### How it's Achieved

- Make fields `private`.
- Provide `public` getter/setter methods with validation logic.

```java
class ATM {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: ₹" + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: ₹" + amount);
        } else {
            System.out.println("Insufficient balance or invalid amount.");
        }
    }
}
```

### Key Benefits

- ✅ Data protection — no accidental corruption.
- ✅ Validation logic in setters.
- ✅ Internal changes don't break external code.

---

## Pillar 2 — 🧬 Inheritance

### Definition

**Inheritance** allows a child class to **acquire properties and methods** of a parent class, enabling code reuse and a logical class hierarchy.

### Real-World Analogy

A **Developer is an Employee**. They share common traits (name, salary) but have specialized roles (tech stack, team). You don't rewrite "employee basics" for every role.

### How it's Achieved

Using the `extends` keyword.

```java
class Employee {
    String name;
    double salary;

    void work() {
        System.out.println(name + " is working.");
    }
}

class Developer extends Employee {
    String techStack;

    void code() {
        System.out.println(name + " is coding in " + techStack);
    }
}

class TeamLead extends Developer {
    int teamSize;

    void lead() {
        System.out.println(name + " is leading a team of " + teamSize);
    }
}
```

### Types Recap

| Type | Description |
|---|---|
| **Single** | One child, one parent |
| **Multilevel** | Chain: A → B → C |
| **Hierarchical** | One parent, many children |
| **Hybrid** | Combination — via interfaces in Java |

---

## Pillar 3 — 🎭 Polymorphism

### Definition

**Polymorphism** ("many forms") allows the **same method name** to behave differently depending on the context — either at compile time (overloading) or runtime (overriding).

### Real-World Analogy

A **printer** can `print(document)`, `print(photo)`, or `print(webpage)`. Same action name, different behavior based on input.

### Compile-Time Polymorphism — Method Overloading

```java
class ReportGenerator {
    void generate(int id) {
        System.out.println("Generating report for ID: " + id);
    }

    void generate(int id, String format) {
        System.out.println("Generating " + format + " report for ID: " + id);
    }
}
```

Java picks the right method at **compile time** based on arguments.

### Runtime Polymorphism — Method Overriding

```java
class ReportGenerator {
    void generate(int id) {
        System.out.println("Generic report for ID: " + id);
    }
}

class PDFReportGenerator extends ReportGenerator {
    @Override
    void generate(int id) {
        System.out.println("PDF report for ID: " + id);
    }
}

// Runtime decision
ReportGenerator rg = new PDFReportGenerator();
rg.generate(101);  // Output: PDF report for ID: 101
```

The JVM decides which method to call **at runtime** based on the actual object type.

---

## Pillar 4 — 🎭 Abstraction

### Definition

**Abstraction** is the process of **hiding complex implementation details** and exposing only the essential interface. Users interact with *what* something does, not *how* it does it.

### Real-World Analogy

**Payment apps** — When you pay via UPI or card, you just tap "Pay". You don't know the underlying bank communication, encryption, and routing happening behind the scenes.

### How it's Achieved

#### Using Abstract Classes

```java
abstract class PaymentMethod {
    String holderName;

    abstract void pay(double amount);  // Contract — subclass must implement

    void showHolder() {
        System.out.println("Holder: " + holderName);
    }
}

class UPIPayment extends PaymentMethod {
    @Override
    void pay(double amount) {
        System.out.println("Paid ₹" + amount + " via UPI.");
    }
}

class CardPayment extends PaymentMethod {
    @Override
    void pay(double amount) {
        System.out.println("Paid ₹" + amount + " via Card.");
    }
}
```

#### Using Interfaces (100% Abstraction)

```java
interface Flyable {
    void fly();  // All methods implicitly abstract
}

class Bird implements Flyable {
    public void fly() { System.out.println("Bird flaps wings."); }
}

class Airplane implements Flyable {
    public void fly() { System.out.println("Airplane uses engines."); }
}
```

---

## The 4 Pillars — Master Summary

| Pillar | Core Idea | Keyword/Tool | Real-World Analogy |
|---|---|---|---|
| **Encapsulation** | Hide data, expose interface | `private` + getters/setters | ATM — you can't touch the vault |
| **Inheritance** | Reuse parent class members | `extends` | Developer is-an Employee |
| **Polymorphism** | One name, many behaviors | Overloading / Overriding | Printer prints docs, photos, pages |
| **Abstraction** | Hide implementation complexity | `abstract` / `interface` | UPI Pay — you just tap, not configure |

---

> **Final Thought:** The 4 pillars are not independent tools — they work together. Encapsulation protects. Inheritance shares. Polymorphism adapts. Abstraction simplifies. Together, they form the foundation of robust, scalable software design.
