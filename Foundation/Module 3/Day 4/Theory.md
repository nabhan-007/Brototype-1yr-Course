# Day 4 – Exception Handling & Keywords (Theory)

---

## 1. What is an Exception?

An **exception** is an **unexpected event** that occurs during the **execution** of a program and disrupts its normal flow.

```java
int result = 10 / 0;  // ArithmeticException — division by zero
```

Java represents exceptions as **objects** of classes that extend `Throwable`. When an exceptional condition occurs, an exception object is **thrown** and the program looks for code to **handle** it.

---

## 2. Difference Between Exception and Error

| Feature | Exception | Error |
|---|---|---|
| **Definition** | Unexpected condition that a program *can* handle | Serious problem that a program *cannot* recover from |
| **Cause** | Invalid logic, bad input, network issues | JVM issues — out of memory, stack overflow |
| **Handleable?** | ✅ Yes — using `try-catch` | ❌ No — should not be caught |
| **Examples** | `NullPointerException`, `ArithmeticException`, `IOException` | `OutOfMemoryError`, `StackOverflowError` |
| **Class Hierarchy** | Extends `Exception` | Extends `Error` |

> Both `Exception` and `Error` extend `Throwable`, but only exceptions are meant to be handled.

---

## 3. What is Exception Handling and Why is it Important?

**Exception Handling** is the mechanism to **detect, handle, and recover** from exceptions so the program can continue running instead of crashing.

### Why is it Important?

- ✅ **Prevents crashes** — Program keeps running even after encountering an error.
- ✅ **Meaningful error messages** — Users see friendly messages, not raw stack traces.
- ✅ **Resource cleanup** — Ensures files, connections, etc. are properly closed even if errors occur.
- ✅ **Separates error logic** — Keeps normal code clean; error handling is in dedicated blocks.
- ✅ **Improves reliability** — Makes software more robust and production-ready.

---

## 4. Try–Catch Block and How it Works

A **try-catch** block lets you test a piece of code for exceptions and handle them gracefully.

### Syntax

```java
try {
    // Code that might throw an exception
} catch (ExceptionType e) {
    // Code to handle the exception
}
```

### How it Works

1. Code inside the `try` block executes normally.
2. If an exception occurs, execution **jumps immediately** to the matching `catch` block.
3. The `catch` block handles the exception.
4. Program continues after the try-catch block.

```java
try {
    int result = 10 / 0;  // Throws ArithmeticException
    System.out.println(result); // This line is skipped
} catch (ArithmeticException e) {
    System.out.println("Error: Cannot divide by zero!");
}
// Program continues here
System.out.println("Program is still running.");
```

**Output:**

```
Error: Cannot divide by zero!
Program is still running.
```

> You can have **multiple catch blocks** to handle different exception types.

---

## 5. Finally Block and its Purpose

The **`finally`** block contains code that **always executes**, whether or not an exception occurred or was caught.

```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Exception caught!");
} finally {
    System.out.println("Program execution completed.");  // Always runs
}
```

### Purpose of `finally`

- ✅ **Guaranteed cleanup** — Closing files, database connections, or streams.
- ✅ **Certainty** — You know this block will always run, no matter what.
- It runs even if the `catch` block throws another exception.
- It runs even if there's a `return` statement in `try` or `catch`.

---

## 6. `throw` Keyword and its Usage

The **`throw`** keyword is used to **manually throw an exception** from your code.

### Syntax

```java
throw new ExceptionType("Error message");
```

### Use Case — Custom Validation

```java
void validateAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Invalid age: Age cannot be negative.");
    }
    System.out.println("Age is valid: " + age);
}
```

> **`throw` vs `throws`:**
>
> - `throw` — Used inside a method to **actually throw** an exception.
> - `throws` — Used in the method signature to **declare** that a method might throw an exception.

```java
void riskyMethod() throws IOException {  // declares it may throw
    throw new IOException("File not found");  // actually throws it
}
```

---

## 7. Important Java Keywords

### a) `this`

Refers to the **current object** — used to distinguish instance variables from local parameters.

```java
class Student {
    String name;
    Student(String name) {
        this.name = name;  // this.name = field, name = parameter
    }
}
```

---

### b) `super`

Refers to the **parent class** — used to call parent constructors or methods.

```java
class Manager extends Employee {
    Manager(String name) {
        super(name);  // Calls Employee's constructor
    }

    void showSalary() {
        super.calculateSalary();  // Calls Employee's method
        System.out.println("+ Bonus");
    }
}
```

---

### c) `final`

Used to make something **unchangeable or non-overridable**.

| Applied To | Effect |
|---|---|
| **Variable** | Becomes a constant — value cannot be changed |
| **Method** | Cannot be overridden by a subclass |
| **Class** | Cannot be extended (no subclass allowed) |

```java
final double PI = 3.14159;  // Constant
PI = 3.0;  // ❌ Compile error
```

---

### d) `static`

Makes a field or method belong to the **class itself**, not to any individual object. All objects share the same static member.

```java
class Counter {
    static int count = 0;  // Shared across all objects

    Counter() {
        count++;
    }
}

Counter c1 = new Counter(); // count = 1
Counter c2 = new Counter(); // count = 2
System.out.println(Counter.count); // Output: 2
```

> `static` members are accessed using the **class name**, not an object reference.

---

### e) `abstract`

Used to declare a class or method that is **incomplete** and must be implemented by subclasses.

```java
abstract class Shape {
    abstract double area();  // No implementation — subclass must provide it
}

class Circle extends Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }

    @Override
    double area() { return Math.PI * radius * radius; }
}
```

- An `abstract` class **cannot be instantiated**.
- A class with at least one `abstract` method **must** be declared `abstract`.

---

## 8. What are Non-Access Modifiers?

**Non-access modifiers** control the **behavior** of classes, methods, and variables — not their visibility.

| Modifier | Applicable To | Effect |
|---|---|---|
| `static` | Fields, Methods, Blocks | Belongs to the class, not an instance |
| `final` | Classes, Methods, Variables | Prevents modification/override/extension |
| `abstract` | Classes, Methods | Declares incomplete blueprint — must be implemented |
| `synchronized` | Methods, Blocks | Allows only one thread at a time (thread safety) |
| `transient` | Fields | Excludes field from serialization |
| `volatile` | Fields | Ensures field is read from main memory (multi-threading) |

> **Access modifiers** (`public`, `private`, `protected`, `default`) control *who* can access something.
> **Non-access modifiers** control *how* something behaves.

---

> **Remember:** Exception handling makes your program resilient. Keywords like `this`, `super`, `static`, `final`, and `abstract` are tools that control identity, inheritance, sharing, immutability, and abstraction.
