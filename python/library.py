class LibBooks:
    def __init__(self, name, author, genre, edition, publish_date):
        self.name = name
        self.author = author
        self.genre = genre
        self.edition = edition
        self.publish_date = publish_date

class Info:
    def __init__(self):
        self.books = []
        self.book_numbers = 0

    def add_book(self, book):
        self.books.append(book)
        self.book_numbers += 1

    def display_books(self):
        for i, book in enumerate(self.books, start=1):
            print(f"Book number {i}:\n"
                  f"Name: {book.name}\n"
                  f"Author: {book.author}\n"
                  f"Genre: {book.genre}\n"
                  f"Edition: {book.edition}\n"
                  f"Publish date: {book.publish_date}\n"
                  "--------------------------")

    def search_book(self, name):
        found = False
        for i, book in enumerate(self.books, start=1):
            if book.name == name:
                print(f"Book found at position {i}:\n"
                      f"Name: {book.name}\n"
                      f"Author: {book.author}\n"
                      f"Genre: {book.genre}\n"
                      f"Edition: {book.edition}\n"
                      f"Publish date: {book.publish_date}")
                found = True
        if not found:
            print("Book not found.")

    def save_to_file(self):
        with open("book_list.txt", "a") as file:
            for book in self.books:
                file.write(f"--------------------------\n"
                           f"{book.name}\n"
                           f"{book.author}\n"
                           f"{book.genre}\n"
                           f"{book.edition}\n"
                           f"{book.publish_date}\n")

def clear():
    import os
    os.system('cls' if os.name == 'nt' else 'clear')

def main():
    object = Info()

    while True:
        print("\t---welcome to our program---")
        print("1. Add new book")
        print("2. Display books list")
        print("3. Search for a book")
        print("4. Exit program")

        choice = input("Enter your choice: ")

        if choice == '1':
            clear()
            print("Adding new book")
            name = input("Enter name of the book: ")
            author = input("Enter author's name: ")
            genre = input("Enter genre: ")
            edition = input("Enter edition number: ")
            publish_date = input("Enter date of publish: ")

            new_book = LibBooks(name, author, genre, edition, publish_date)
            object.add_book(new_book)
            object.save_to_file()
            print("Book added successfully")

        elif choice == '2':
            clear()
            print("Displaying book list")
            object.display_books()

        elif choice == '3':
            clear()
            print("Searching for a book")
            search_name = input("Enter the book name for search: ")
            object.search_book(search_name)

        elif choice == '4':
            clear()
            print("Exit")
            break

        else:
            print("Wrong choice, please try again.")

        choice_2 = input("Do you want to continue? (y/n): ").lower()
        if choice_2 != 'y':
            print("End of program")
            break

if __name__ == "__main__":
    main()
