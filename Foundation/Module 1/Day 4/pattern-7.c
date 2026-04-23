#include <stdio.h>

/*
 * * * * * * * * * * * * *
 **
 * * * * * * * * * * *
 **
 * * * * * * * * *
 **
 * * * * * * *
 **
 * * * * *
 **
 * * *
 **
 *
 */

int main()
{
    int print_two_star = 0;
    for (int i = 1; i <= 13; i++)
    {
        for (int j = 1; j <= (14 - i); j++)
        {
            if (i % 2 == 0)
            {
                if (print_two_star)
                {
                    printf("** ");
                    print_two_star = 0;
                }
            }
            else
            {
                printf("* ");
                print_two_star = 1;
            }
        }
        printf("\n");
    }
}