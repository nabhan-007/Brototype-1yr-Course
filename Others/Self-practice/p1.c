void messUp(int *x)
{
    *x = 99;
}

// void messUp(int x)
// {
//     x = 99;
// }

int main()
{
    int original = 5;

    // messUp(original);
    // printf("%d", original);

    messUp(&original);
    printf("%d", original);
}