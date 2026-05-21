/*
 * ============================================================
 * EXAM PRACTICE - Question 10: C const Keyword (Module 1)
 * ============================================================
 *
 * TASK:
 *   Predict the EXACT output of this program and explain WHY.
 *
 *   #include <stdio.h>
 *   int main() {
 *       const int x = 10;
 *       x = 20;
 *       printf("%d", x);
 *       return 0;
 *   }
 *
 *   THEN: Fix the program so it compiles successfully and prints 20.
 *
 * CONCEPTS TESTED:
 *   - The `const` keyword and its restrictions
 *   - Compile-time vs runtime errors
 * ============================================================
 */

#include <stdio.h>

int main()
{
    // `const` variable are read-only. So, the output is `10` if compiled else, it will show error
    int x = 10;
    x = 20;
    printf("%d", x);

    return 0;
}


// ==========================================
// EXAMINER REMARKS:
// Score: 8/10
//
// Your prediction is CORRECT — the original code will NOT compile and will
// show a compile-time error (not a runtime error). The const keyword makes
// the variable read-only, so x = 20 is a compile-time violation.
//
// Your fix is also CORRECT — removing 'const' allows x to be reassigned to 20.
//
// Small deduction: You said "output is 10 if compiled" — this is slightly
// misleading. The code WILL NOT compile at all. There is no output because
// the compiler rejects the program before it can run. The fix (removing const)
// is the right approach.
// ==========================================
