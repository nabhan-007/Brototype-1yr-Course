#include <stdio.h>

int main()

{
    // Not a good approach. Use `ASCII Value` technique from now on
    char alphabets[] = {
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};
    int letter_index = 0;
    for (int i = 1; i <= 5; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            printf("%c ", alphabets[letter_index]);
            letter_index += 1;
        }
        printf("\n");
    }
}