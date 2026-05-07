# Notes

## JAVA

- It is a `high level language` (more readable to humans than low level laguages like `C`)

## Basics: OOP (Object Oriented Programming)

You can see `Classes` as moulds and `Objects` as what it creates.

The 2 components of `Class` are:

1. Properties (Variables)
2. Methods (functions)

- Note that each Objects has it's own memory

- Why not everything static? Because, then we will not get the seperate memory feature. Making any changes to a static item will change it for everyone.

## Constructors

- Same name as the class
- no return type
- runs when an object is created

## `this` keyword

- Used to get a global variable

## Inheritance

- For example: `class B extends A`.
- Here everything in `class A` will be available in `class B`.
- Base/parent class: `class A` and Sub/child class: `class B`.
- No `multiple inheritance` in JAVA to avoid confusions.

## Polymorphism

### Method Over-loading

- Loading a method
- We can have methods with no parameters, single parameter and multiple parameters.

### Method Over-riding

- Over-writing
- If the sub-class has a method with the same name then, the method in sub-class will over-write the method in base-class.
- So, is the method in the base class gone forever? No, that's where we can use the `super` keyword.
