import java.util.ArrayList;
import java.util.Scanner;

public class LibraryManagement {

    // Book Class
    public static class Book {
        // Attributes
        String title, author, genre, publishDate;
        int edition;

        // Constructor
        public Book(String title, String author, String genre, int edition, String publishDate) {
            this.title = title;
            this.author = author;
            this.genre = genre;
            this.edition = edition;
            this.publishDate = publishDate;
        }

        // Display details
        public void displayDetails() {
            System.out.println("Name: " + title);
            System.out.println("Author: " + author);
            System.out.println("Genre: " + genre);
            System.out.println("Edition: " + edition);
            System.out.println("Publish Date: " + publishDate);
            System.out.println("--------------------------");
        }
    }

    // Library Class
    public static class Library {
        ArrayList<Book> books = new ArrayList<>();

        // Add book
        public void addBook(Book book) {
            books.add(book);
            System.out.println("Book added successfully!");
        }

        // Display all books
        public void displayAllBooks() {
            if (books.isEmpty()) {
                System.out.println("No books available in the library.");
            } else {
                for (int i = 0; i < books.size(); i++) {
                    System.out.println("Book Number " + (i + 1) + ":");
                    books.get(i).displayDetails();
                }
            }
        }

        // Search book by title
        public void searchBook(String title) {
            boolean found = false;
            for (int i = 0; i < books.size(); i++) {
                if (books.get(i).title.equalsIgnoreCase(title)) {
                    System.out.println("Book found at position " + (i + 1) + ":");
                    books.get(i).displayDetails();
                    found = true;
                }
            }
            if (!found) {
                System.out.println("Book not found.");
            }
        }
    }

    // Main Method
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Library library = new Library();
        char choice;

        do {
            System.out.println("\t---Welcome to our Library Management System---");
            System.out.println("1. Add a new book");
            System.out.println("2. Display all books");
            System.out.println("3. Search for a book by title");
            System.out.println("4. Exit program");
            System.out.print("Enter your choice: ");
            int operation = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (operation) {
                case 1:
                    System.out.println("Adding new book");
                    System.out.print("Enter title: ");
                    String title = scanner.nextLine();
                    System.out.print("Enter author: ");
                    String author = scanner.nextLine();
                    System.out.print("Enter genre: ");
                    String genre = scanner.nextLine();
                    System.out.print("Enter edition: ");
                    int edition = scanner.nextInt();
                    scanner.nextLine(); // Consume newline
                    System.out.print("Enter publish date: ");
                    String publishDate = scanner.nextLine();

                    Book newBook = new Book(title, author, genre, edition, publishDate);
                    library.addBook(newBook);
                    break;

                case 2:
                    System.out.println("Displaying all books:");
                    library.displayAllBooks();
                    break;

                case 3:
                    System.out.print("Enter the title of the book to search: ");
                    String searchTitle = scanner.nextLine();
                    library.searchBook(searchTitle);
                    break;

                case 4:
                    System.out.println("Exiting the program...");
                    choice = 'n';
                    continue;

                default:
                    System.out.println("Wrong input, please try again!");
                    break;
            }

            System.out.print("Do you want to continue? (y/n): ");
            choice = scanner.next().charAt(0);
            scanner.nextLine();

        } while (choice == 'y' || choice == 'Y');

        System.out.println("End of program!");
        scanner.close();
    }
}
