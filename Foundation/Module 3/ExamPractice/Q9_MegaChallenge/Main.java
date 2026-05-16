/*
 * ============================================================
 * EXAM PRACTICE - Question 9: MEGA CHALLENGE
 *                 (All 4 Pillars of OOP + Exception Handling)
 * ============================================================
 *
 * TASK:
 *   Build a mini Library Management System combining ALL concepts
 *   from Module 3.
 *
 *   ----------------------------------------------------------
 *   1. ENCAPSULATION — class `Book`:
 *      Private fields: title (String), author (String),
 *                      price (double), isAvailable (boolean)
 *      Parameterized constructor → sets isAvailable = true by default
 *      Getters for all fields.
 *      setPrice(double price) → validate price > 0, else print "Invalid price!"
 *      displayBook() → prints all book details + availability status
 *   ----------------------------------------------------------
 *   2. ABSTRACTION — abstract class `LibraryMember`:
 *      Properties: memberId (int), memberName (String)
 *      Parameterized constructor
 *      Abstract method: getMemberType()  → returns String
 *      Concrete method: displayMember()  → prints id, name, member type
 *   ----------------------------------------------------------
 *   3. INHERITANCE — classes extending `LibraryMember`:
 *      Class `RegularMember` extends `LibraryMember`:
 *        - Implement getMemberType() → returns "Regular Member"
 *        - maxBooksAllowed = 3 (static final int)
 *
 *      Class `PremiumMember` extends `LibraryMember`:
 *        - Implement getMemberType() → returns "Premium Member"
 *        - maxBooksAllowed = 10 (static final int)
 *   ----------------------------------------------------------
 *   4. POLYMORPHISM — class `Library`:
 *      Properties: libraryName (String)
 *      Overloaded method `issueBook`:
 *        - issueBook(Book book) →
 *            prints "Issuing [title] to a walk-in customer."
 *        - issueBook(Book book, LibraryMember member) →
 *            prints "Issuing [title] to [memberName] ([memberType])."
 *            Sets book availability to false (add setAvailable() to Book).
 *   ----------------------------------------------------------
 *   5. EXCEPTION HANDLING — Custom Exception `BookNotAvailableException`:
 *      In issueBook(Book, LibraryMember):
 *        - If the book is NOT available → throw BookNotAvailableException
 *          with message: "[title] is currently not available."
 *      The method signature must declare `throws BookNotAvailableException`.
 *   ----------------------------------------------------------
 *   6. STATIC — class `Library`:
 *      static int totalBooksIssued = 0
 *      Increment it every time a book is successfully issued.
 *      static method: getTotalBooksIssued() → returns the count.
 *   ----------------------------------------------------------
 *
 *   In main():
 *     1. Create 2 Book objects.
 *     2. Create a RegularMember and a PremiumMember.
 *     3. Create a Library object.
 *     4. Issue book1 to RegularMember (success case).
 *     5. Try to issue book1 again to PremiumMember →
 *        catch BookNotAvailableException and print the error.
 *     6. Issue book2 using the single-argument overload (walk-in).
 *     7. Print total books issued using Library.getTotalBooksIssued().
 *     8. Display details of both members and both books.
 *
 * CONCEPTS TESTED:
 *   - All 4 pillars of OOP together
 *   - Custom exceptions + throws + try-catch
 *   - Overloaded methods (polymorphism)
 *   - Abstract classes + concrete subclasses
 *   - Static variables for tracking shared state
 *   - Full real-world simulation
 * ============================================================
 */

public class Main {
    public static void main(String[] args) {
        // Write your solution below

    }
}
