# Module Task 3: Object-Oriented Programming (OOP) Concept

**Total Topics:** 6

## DAY 1 – OOP Basics (Foundation)

### Theory

1. Difference between High-level and Low-level programming languages
2. What is OOPs
3. Why we use OOPs
4. Advantages of OOPs
5. What is a Class
6. What is an Object
7. Constructor and types of constructors (default, parameterized)
8. What is the purpose of the `this` keyword
9. Introduction to 4 Pillars of OOPs

### Practicals

* **Task 1:** Create a `User` class with properties (`name`, `age`, `place`, `email`, `phoneNumber`) and a method (`displayDetails()`).
* **Task 2:** Create an object using a default constructor and a parameterized constructor.
* **Task 3 (Independent):** Create the following 5 classes. Each must contain a minimum of 3 properties, at least 1 method, and object creation using a constructor.
  1. `Student` – `name`, `rollNo`, `course`
  2. `Employee` – `id`, `salary`, `department`
  3. `Product` – `name`, `price`, `category`
  4. `Movie` – `title`, `rating`, `duration`
  5. `BankAccount` – `accNo`, `holderName`, `balance`

---

## DAY 2 – Inheritance & Polymorphism

### Theory

1. What is Inheritance and why it is used
2. Types of inheritance: Single, Multilevel, Hierarchical, Hybrid
3. Proper differences between each inheritance type
4. What is Polymorphism and its importance
5. Compile-time polymorphism vs Runtime polymorphism
6. Method Overloading
7. Method Overriding
8. `super` keyword and its use

### Practicals

* **Task 1 (Guided):** Parent (`Person`: name, age) → Child (`Student`: rollNo, course). Understand how properties are passed.
* **Task 2 (Types of Inheritance):**
  * Single: `Employee` → `Manager`
  * Multilevel: `User` → `Staff` → `Admin`
  * Hierarchical: `Account` → `SavingsAccount`, `Account` → `CurrentAccount`
* **Task 3 (Polymorphism):**
  * Method Overloading: `calculateFee(int amount)` vs `calculateFee(int amount, int discount)`
  * Method Overriding: `Employee.calculateSalary()` overridden in `Manager.calculateSalary()`. Access parent method using `super`.

---

## DAY 3 – Abstraction & Encapsulation

### Theory

1. What is Abstraction and its benefits
2. Difference between abstract class, normal class and interface
3. Difference between abstract method and concrete method
4. How abstract methods are used
5. What is Encapsulation and its benefits
6. What are Access Modifiers (public, private, protected, default)
7. Getter and Setter methods and their purpose

### Practicals

* **Task 1 (Abstraction):** Create abstract class `Course` with abstract method `calculateFee()`. Implement in subclasses `OnlineCourse` and `OfflineCourse`.
* **Task 2 (Encapsulation):** Create `BankAccount` class with private fields (`accountNumber`, `balance`), a getter for balance, and a deposit method with validation.
* **Task 3 (Access Modifiers):** Create a class to test private (not accessible outside), public (accessible everywhere), and protected (accessible in child) variables.
* **Task 4 (Getter/Setter):** Create `Student` class with private `marks`. `setMarks()` validates marks ≤ 100, `getMarks()` returns marks.

---

## DAY 4 – Exception Handling & Keywords

### Theory

1. What is an Exception
2. Difference between Exception and Error
3. What is Exception Handling and why it is important
4. Try–Catch block and how it works
5. Finally block and its purpose
6. Throw keyword and its usage
7. Keywords: `this`, `super`, `final`, `static`, `abstract`
8. What are non-access modifiers

### Practicals

* **Task 1:** Write programs to show compile-time error and runtime exception.
* **Task 2:** Division by zero exception using try-catch.
* **Task 3:** Use finally block to print: "Program execution completed".
* **Task 4:** Create custom exception: If age < 0 → throw exception "Invalid age".
* **Task 5 (Keywords):** Demonstrate `this` (differentiate local/instance), `super` (call parent constructor), `static` (shared variable), and `final` (constant value).

---

## DAY 5 – Revision & Strengthening

### Theory Revision

* Class, Object, Constructor
* Access & Non-access modifiers
* Exception handling

### Practicals

* **Task 1:** Create a class that includes private variables, constructor, getter/setter, static variable, and final variable.
* **Task 2:** Create a program using Inheritance, Method overriding, and Try-catch-finally blocks.

---

## DAY 6 – Mastering 4 Pillars of OOPs

### Focus Areas

1. Encapsulation
2. Inheritance
3. Polymorphism
4. Abstraction

### Practicals (1 Task per Pillar)

* **Encapsulation:** `ATM` class (private balance, `deposit()`, `withdraw()` with validation).
* **Inheritance:** `Employee` → `Developer` → `TeamLead`.
* **Polymorphism:** `ReportGenerator` class with `generate(int id)` and `generate(int id, String format)`. Override `generate()` in `PDFReportGenerator`.
* **Abstraction:** Abstract class `PaymentMethod` with abstract method `pay(double amount)`. Implement in `UPIPayment` and `CardPayment`.
