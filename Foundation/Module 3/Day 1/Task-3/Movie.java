public class Movie {
    String title, duration;
    double rating;

    Movie() {
        this.title = "Not Provided";
        this.duration = "Not Provided";
        this.rating = 0;
    }

    Movie(String title, String duration, double rating) {
        this.title = title;
        this.duration = duration;
        this.rating = rating;
    }

    void displayDetails() {
        System.out.println("\n--- Movie Details ---");
        System.out.println("Title: " + this.title);
        System.out.println("Duration: " + this.duration);
        System.out.println("Rating: " + this.rating);
        System.out.println("---------------------\n");
    }
}
