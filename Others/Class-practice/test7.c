#include <stdio.h>

int main()
{
    int mark;

    printf("Enter the Mark: ");
    scanf("%d", &mark);

    if (mark < 0 || mark > 100)
    {
        printf("Invalid Marks!!");
    }
    else if (mark < 50)
    {
        printf("Failed");
    }
    else if (mark < 60)
    {
        printf("Grade: C");
    }
    else if (mark <= 80)
    {
        printf("Grade: B");
    }
    else if (mark <= 90)
    {
        printf("Grade: A");
    }
    else if (mark < 100)
    {
        printf("Grade: A+");
    }

    return 0;
}