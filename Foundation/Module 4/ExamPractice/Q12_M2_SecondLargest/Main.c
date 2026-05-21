/*
 * ============================================================
 * EXAM PRACTICE - Question 12: C Arrays - Second Largest (Module 2)
 * ============================================================
 *
 * TASK:
 *   Write a C program to find the SECOND LARGEST number in an array.
 *   The array may contain duplicates — duplicates do NOT count as
 *   a new "second largest" (e.g., if largest is 45 and it appears
 *   twice, the second largest is the next unique smaller value).
 *
 *   Example Input: {12, 45, 7, 45, 23, 1}
 *   Example Output: Second Largest = 23
 *
 * CONCEPTS TESTED:
 *   - Array traversal
 *   - Tracking largest and second largest in a single pass
 *   - Handling duplicates
 * ============================================================
 */

#include <stdio.h>
#include <limits.h>

int main()
{
    int arr[] = {12, 45, 7, 45, 23, 1};
    int size = sizeof(arr) / sizeof(arr[0]);

    int largest = INT_MIN, secLargest = INT_MIN;
    for (int i = 0; i < size; i++)
    {
        if (largest < arr[i])
        {
            secLargest = largest;
            largest = arr[i];
        }
        else if (largest > arr[i] && secLargest < arr[i])
        {
            secLargest = arr[i];
        }
    }

    printf("%d ", secLargest);

    return 0;
}


// ==========================================
// EXAMINER REMARKS:
// Score: 10/10
//
// Flawless single-pass algorithm. Using INT_MIN as the initial value for both
// largest and secLargest is the professional way to handle this.
// The condition (largest > arr[i] && secLargest < arr[i]) correctly handles
// duplicates — if arr[i] == largest, neither branch fires, so duplicates are ignored.
// ==========================================
