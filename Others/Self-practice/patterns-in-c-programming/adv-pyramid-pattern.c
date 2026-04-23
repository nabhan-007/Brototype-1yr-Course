#include <stdio.h>

//         1
//       2 3 2
//     3 4 5 4 3
//   4 5 6 7 6 5 4
// 5 6 7 8 9 8 7 6 5

int main()
{
    int n, row, space, num;

    printf("Enter the number of rows: ");
    scanf("%d", &n);

    for (row = 1; row <= n; row++)
    {

        // 1. Print the spaces
        for (space = 1; space <= n - row; space++)
        {
            printf("  "); // double space for formatting
        }

        // 2. LEFT SIDE: Count UP to the peak
        for (num = row; num < 2 * row; num++)
        {
            printf("%d ", num);
        }

        // 3. RIGHT SIDE: Count DOWN from the peak
        for (num = (2 * row) - 2; num >= row; num--)
        {
            printf("%d ", num);
        }

        printf("\n");
    }
    return 0;
}
