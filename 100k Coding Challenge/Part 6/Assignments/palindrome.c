#include <stdio.h>

int main(void) {
    char word[100], reversed[100];
    int i, length=0, flag=0;

    printf("Enter the word: ");
    scanf("%s", word);

    for (i=0; word[i]!='\0'; i++) {
        length++;
    }

    for (i=0; i<length; i++) {
        reversed[i] = word[length-1-i];
    }

    for (i=0; i<length; i++) {
        if (word[i]!=reversed[i]) {
            printf("Not a Palindrome!!");
            flag = 1;
            break;
        }
    }

    if (flag==0) {
        printf("%s is Palindrome", word);
    }
    return 0;
}