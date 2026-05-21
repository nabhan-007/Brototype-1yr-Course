/*
 * ============================================================
 * EXAM PRACTICE - Question 13: C Arrays - Out of Bounds (Module 2)
 * ============================================================
 *
 * TASK:
 *   1. Predict what happens when you run this code. Is there a
 *      compile error, runtime error, or does it print something?
 *
 *      #include <stdio.h>
 *      int main() {
 *          int arr[] = {10, 20, 30, 40, 50};
 *          printf("%d", arr[5]);
 *          return 0;
 *      }
 *
 *   2. What is this situation called?
 *   3. Does Java handle out-of-bounds the same way as C? Explain the difference.
 *
 * Write your answers in comments below, then write a SAFE version
 * of the loop that checks bounds before accessing the element.
 *
 * CONCEPTS TESTED:
 *   - Array bounds in C vs Java
 *   - Undefined behavior in C
 *   - IndexOutOfBoundsException in Java
 * ============================================================
 */

#include <stdio.h>

int main()
{
    int arr[] = {10, 20, 30, 40, 50};

    // Your answer to Q1:
    // will print garbage value

    // Your answer to Q2 (what is this called?):
    // it's the program going out of the bounds of array

    // Your answer to Q3 (C vs Java):
    // In case of java it will show out-of-bounds error but in C no such errors will be shown

    // Safe version:
    int size = sizeof(arr) / sizeof(arr[0]);
    int targetIndex = 5;
    if (targetIndex < size)
    {
        printf("%d ", arr[targetIndex]);
    }
    else
    {
        printf("Array out-of-bounds!!");
    }

    return 0;
}


// ==========================================
// EXAMINER REMARKS:
// Score: 9/10
//
// Q1 (Predict output): CORRECT ✅ — it prints a garbage value (undefined behavior in C).
// Q2 (What is it called?): Partially correct. The proper term is "Undefined Behavior" in C,
//     or more specifically "Array Out-of-Bounds Access / Buffer Overread".
// Q3 (C vs Java): CORRECT ✅ — Java throws a runtime ArrayIndexOutOfBoundsException;
//     C has no such protection and just reads whatever is in that memory location.
// Safe version: PERFECT ✅ — clean bounds check before accessing the index.
//
// Only minor deduction: not using the exact term "Undefined Behavior" for Q2.
// ==========================================
