# Notes

## JAVA

- It is a `high level language` (more readable to humans than low level languages like `C`)

### Data Types in Java

1. Primitive(stores values): byte, short, int, long, float, double, char, boolean
2. Non-Primitive(store references or memory addresses rather than actual values): String, Arrays, Classes, Interfaces, Objects

### Variables

Variables are containers to store data in memory. Each variable has a name, type and value. It is the basic unit of storage in a program. Java has 4 types of variables:

1. Local Variables: Declared inside a method, constructor, or block. Accessible only within that block.
2. Instance Variables: Declared inside a class but outside any method. Each object of the class has its own copy.
3. Static Variables: Declared with the static keyword inside a class. Shared by all objects of the class.
4. Final Variables: Declared with final keyword. Value cannot be changed once assigned

### Keywords in Java

Keywords are reserved words in Java that have a predefined meaning. They cannot be used as variable names, class names or identifiers.

## Basics: OOP (Object Oriented Programming)

You can see `Classes` as moulds and `Objects` as what it creates.

The 2 components of `Class` are:

1. Properties (Variables)
2. Methods (functions)

- Note that each object has its own memory.

- Why not everything static? Because then we lose the separate memory feature. Changing a static field changes it for everyone.

## Constructors

- Same name as the class
- No return type
- Called automatically when an object is created with the `new` keyword

## `this` keyword

- Used to refer to the current object's fields — helpful when a parameter name is the same as an instance variable

## Inheritance

- For example: `class B extends A`.
- Here everything in `class A` will be available in `class B`.
- Base/parent class: `class A` and Sub/child class: `class B`.
- No `multiple inheritance` in JAVA to avoid confusions.

## Polymorphism

### Method Overloading

- Same method name, but different parameters (no params, one param, multiple params, etc.)

### Method Overriding

- When a sub-class has a method with the same name, it overwrites the one from the base class.
- Is the base class method gone forever? No — use the `super` keyword to access it.
