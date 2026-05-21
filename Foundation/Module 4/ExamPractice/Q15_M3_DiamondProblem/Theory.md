# Q15 – Module 3 Theory: The Diamond Problem

## ❓ Question

1. What is the **Diamond Problem** in Java?
2. Why does Java **not allow** a class to extend multiple classes?
3. How does Java **solve** the diamond problem using interfaces?

Give a short example to illustrate your answer.

---

## ✍️ Your Answer

1. The diamond problem in Java is the multiple inheritace to a child class.
2. To avoid confusions caused by same method names that might be present in the parent classes.
3. In interfaces, Java will force you to over-ride the conflicting method and will let you choose which one you need using `super`.

---

## 📝 Examiner Remarks

**Score: 8/10**

**What you got right:**

- Diamond problem is about multiple inheritance ambiguity ✅
- Java avoids it by not allowing multiple class inheritance ✅
- Interfaces force you to override the conflicting method ✅

**What was slightly off:**

- Your definition of the Diamond Problem was incomplete. The full definition:
  > "When a class inherits from two parent classes that both inherit from the same grandparent class, and both parents override the same method — the child doesn't know which version to use. This creates ambiguity shaped like a diamond (A → B, A → C, B+C → D)."
- For interfaces: you said "use `super` to choose which one" — more precisely:
  `InterfaceA.super.method()` or `InterfaceB.super.method()` is the syntax.
- No example provided as the question asked. Always include examples in an exam!

**Quick example to memorize:**

```java
interface A { default void hello() { System.out.println("A"); } }
interface B { default void hello() { System.out.println("B"); } }
class C implements A, B {
    public void hello() { A.super.hello(); } // You choose explicitly
}
```
