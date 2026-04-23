#include <stdio.h>

int main()

{
    for (int i = 1; i <= 12; i++)
    {
        // `j==1` is printing one star for us so, we should only print the remaining 3. Hence,
        int max_count = 3;

        for (int j = 1; j <= 6; j++)
        {
            if (j == 1 || i == 12)
            {
                printf("* ");
            }
            if (j == 2 && i == 2)
            {
                printf("* ");
            }
            if (i == 6)
            {
                if (max_count >= 1)
                {
                    printf("* ");
                    max_count -= 1;
                }
            }
        }
        printf("\n");
    }
}