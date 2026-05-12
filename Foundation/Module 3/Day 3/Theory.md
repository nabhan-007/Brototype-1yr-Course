# Day 3 – Abstraction & Encapsulation (Theory)

---

## 1. What is Abstraction and its Benefits?

**Abstraction** is the OOP principle of **hiding the complex internal implementation** and exposing only the essential features to the user.

Think of a TV remote — you press a button to change the channel. You don't need to know how the signal is transmitted internally. The complexity is hidden; only the necessary interface is shown.

In Java, abstraction is achieved using:

- **Abstract classes** (`abstract` keyword)
- **Interfaces** (`interface` keyword)

```java
abstract class PaymentMethod {
    abstract void pay(double amount); // No implementation — just the contract
}

class UPIPayment extends PaymentMethod {
    void pay(double amount) {
        System.out.println("Paid ₹" + amount + " via UPI.");
    }
}
```

### Benefits of Abstraction

- ✅ Reduces complexity — users interact with a simple interface.
- ✅ Increases security — internal details are hidden.
- ✅ Promotes loose coupling — components depend on interfaces, not implementations.
- ✅ Makes large systems easier to manage and extend.

---

## 2. Difference Between Abstract Class, Normal Class, and Interface

| Feature | Normal Class | Abstract Class | Interface |
|---|---|---|---|
| **Instantiation** | ✅ Can create objects | ❌ Cannot create objects | ❌ Cannot create objects |
| **Methods** | Only concrete methods | Both abstract & concrete | Only abstract (Java 7) / can have `default` & `static` (Java 8+) |
| **Constructor** | ✅ Has constructor | ✅ Has constructor | ❌ No constructor |
| **Fields** | Any type | Any type | `public static final` only |
| **Inheritance keyword** | `extends` | `extends` | `implements` |
| **Multiple Inheritance** | ❌ No | ❌ No | ✅ Yes (a class can implement many interfaces) |
| **Use Case** | Regular objects | Partial blueprint | Pure contract/blueprint |

```java
// Normal Class
class Dog { void bark() { System.out.println("Woof!"); } }

// Abstract Class
abstract class Animal { abstract void makeSound(); }

// Interface
interface Flyable { void fly(); }
```

---

## 3. Difference Between Abstract Method and Concrete Method

| Feature | Abstract Method | Concrete Method |
|---|---|---|
| **Definition** | Declared but not implemented | Declared and fully implemented |
| **Body** | No body (`{ }`) | Has a body with logic |
| **Keyword** | Must use `abstract` | No special keyword |
| **Where** | Only in abstract classes or interfaces | In any class |
| **Child Responsibility** | Child **must** override it | Child *may* override it (optional) |

```java
abstract class Course {
    abstract void calculateFee();   // Abstract — no body

    void displayName() {            // Concrete — has body
        System.out.println("Course details displayed.");
    }
}
```

---

## 4. How Abstract Methods are Used

Abstract methods define a **contract** — any non-abstract subclass **must** provide an implementation.

```java
abstract class Course {
    String courseName;
    abstract void calculateFee();  // Contract: subclass must implement this
}

class OnlineCourse extends Course {
    @Override
    void calculateFee() {
        System.out.println("Online fee: ₹5000");
    }
}

class OfflineCourse extends Course {
    @Override
    void calculateFee() {
        System.out.println("Offline fee: ₹15000");
    }
}

// Usage
Course c1 = new OnlineCourse();
c1.calculateFee(); // Output: Online fee: ₹5000

Course c2 = new OfflineCourse();
c2.calculateFee(); // Output: Offline fee: ₹15000
```

> If a subclass does not implement all abstract methods, it must itself be declared `abstract`.

---

## 5. What is Encapsulation and its Benefits?

**Encapsulation** is the OOP principle of **bundling data (fields) and the methods that operate on that data inside a single class**, while **restricting direct access** to the fields from outside.

It is achieved by:

1. Making fields `private`.
2. Providing `public` getter and setter methods to read and modify the data.

```java
class BankAccount {
    private double balance;  // Hidden from outside

    public double getBalance() {      // Controlled read access
        return balance;
    }

    public void deposit(double amount) {   // Controlled write access
        if (amount > 0) {
            balance += amount;
        }
    }
}
```

### Benefits of Encapsulation

- ✅ **Data Protection** — Fields can't be directly modified from outside.
- ✅ **Validation** — Setters can validate data before assigning (e.g., no negative balance).
- ✅ **Flexibility** — Internal implementation can change without affecting external code.
- ✅ **Maintainability** — Clear boundaries between what's internal and what's public.

---

## 6. Access Modifiers

Access modifiers define the **visibility and accessibility** of classes, fields, and methods.

| Modifier | Same Class | Same Package | Subclass (other package) | Everywhere |
|---|---|---|---|---|
| `private` | ✅ | ❌ | ❌ | ❌ |
| `default` *(no keyword)* | ✅ | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| `public` | ✅ | ✅ | ✅ | ✅ |

```java
class Example {
    private int a = 1;      // Only accessible inside this class
    int b = 2;              // Accessible within the same package (default)
    protected int c = 3;   // Accessible in subclasses and same package
    public int d = 4;      // Accessible everywhere
}
```

> **Rule of Thumb:** Always use the **most restrictive** modifier possible. Default to `private` for fields.

---

## 7. Getter and Setter Methods and Their Purpose

**Getters** and **Setters** are `public` methods used to **read** and **write** `private` fields respectively.

### Getter

Returns the value of a private field.

```java
public String getName() {
    return this.name;
}
```

### Setter

Sets/updates the value of a private field, often with validation.

```java
public void setMarks(int marks) {
    if (marks >= 0 && marks <= 100) {
        this.marks = marks;
    } else {
        System.out.println("Invalid marks! Must be between 0 and 100.");
    }
}
```

### Full Example

```java
class Student {
    private int marks;

    public void setMarks(int marks) {
        if (marks <= 100) {
            this.marks = marks;
        } else {
            System.out.println("Invalid marks.");
        }
    }

    public int getMarks() {
        return this.marks;
    }
}
```

### Purpose

- **Getters** provide **read-only** controlled access to private data.
- **Setters** provide **write** access with optional **validation logic**.
- Together, they enforce **encapsulation** while keeping data accessible in a controlled way.

---

> **Remember:** Abstraction hides *how* something works. Encapsulation hides *what data* an object holds. Both protect complexity — just at different levels.
