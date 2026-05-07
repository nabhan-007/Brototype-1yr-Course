public class Product {
    String name, category;
    double price;

    Product() {
        this.name = "Not Provided";
        this.category = "Not Provided";
        this.price = 0;
    }

    Product(String name, String category, double price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }

    void displayDetails() {
        System.out.println("\n--- Product Details ---");
        System.out.println("Name: " + this.name);
        System.out.println("Category: " + this.category);
        System.out.println("Price: " + this.price);
        System.out.println("-----------------------\n");
    }
}
