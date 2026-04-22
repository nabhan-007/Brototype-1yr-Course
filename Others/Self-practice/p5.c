#include <stdio.h>

int main()
{
    char name[50];
    int birthYear, currentYear, age;

    printf("Enter your name: ");
    scanf(" %[^\n]", name); // reads full name (with spaces)

    printf("Enter your birth year: ");
    scanf("%d", &birthYear);

    printf("Enter current year: ");
    scanf("%d", &currentYear);

    age = currentYear - birthYear;

    printf("%s, you're %d year(s) old\n", name, age);

    return 0;
}