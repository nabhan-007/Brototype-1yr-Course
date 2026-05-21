/*
 * ============================================================
 * EXAM PRACTICE - Question 2: C Arrays Core Logic
 * ============================================================
 *
 * TASK:
 *   Write a C program to find the frequency of each unique element
 *   in an array.
 *   Example Input: {2, 5, 2, 8, 5, 2, 9}
 *   Example Output:
 *     2 occurs 3 times
 *     5 occurs 2 times
 *     8 occurs 1 times
 *     9 occurs 1 times
 *
 * CONCEPTS TESTED:
 *   - Array traversal
 *   - Frequency counting using nested loops or a frequency array
 *   - Skipping already counted elements
 * ============================================================
 */

#include <stdio.h>

int main()
{
    int arr[] = {2, 5, 2, 8, 5, 2, 9};
    int size = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < size; i++)
    {
        int isVisited = 0;
        for (int j = 0; j < i; j++)
        {
            if (arr[i] == arr[j])
            {
                isVisited = 1;
            }
        }
        if (isVisited)
        {
            continue;
        }

        int count = 0;
        for (int j = 0; j < size; j++)
        {
            if (arr[i] == arr[j])
            {
                count++;
            }
        }
        printf("%d - %d time(s)\n", arr[i], count);
    }

    return 0;
}


// ==========================================
// EXAMINER REMARKS:
// Score: 10/10
// Feedback: Excellent logic for skipping already visited elements to avoid duplicate frequency counts.
// ==========================================
