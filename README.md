![baner](https://github.com/Ghosts6/Local-website/blob/main/img/Baner.png)

# 📖Library Management system:

This repository is dedicated to hosting programs written in languages such as C, C++, Bash, JavaScript, and Python, writed for library management systems. The projects within explore difference data modeling techniques, providing discussions on various methods employed for efficient data storage and retrieval.

# 📏Data Modeling:

#Introduction:

Data modeling is a critical aspect of software development, influencing how information and data is structured, stored, and accessed.so in this repo we used different method of data modeling to store data including Object-Oriented Programming (OOP),data structures, files,models and databases.

#1.OOP Attributes:

Within Object-Oriented Programming, attributes play a key role in encapsulating data. By associating data with objects and their behaviors, OOP provides a modular and organized approach to data modeling. However, the challenge lies in maintaining data consistency across different objects and ensuring proper encapsulation.oop as a one of data modeling method used to store data in our library.cpp program:
```c++
#include <iostream>
#include <string>
#include <stdio.h>
#include <sstream>
#include <cstdlib>
using namespace std;

#define max_book 200

class LibBooks{
    public:
    string name;
    string author;
    string genre;
    int edition;
    int publish_date;
};

class Info:public LibBooks{
    public:
    class LibBooks books[max_book];
    int book_numbers;
};

void new_book(class Info *object,string name,string author,string genre,int edition,int publish_age);
void book_list(class Info object);
void search_book(class Info object,string name);
void clear();

int main(){
    Info object;
    object.book_numbers = 0;
    char choice,choice_2;
    label1:
    label2:
    cout<<'\t'<<"---welcome to our program---"<<endl;
    cout<<"1. Add new book"<<endl;
    cout<<"2. Display books list"<<endl;
    cout<<"3. search for book"<<endl;
    cout<<"4. Exit program"<<endl;
    cin>>choice;
    switch (choice) {
        case '1':
        clear();
        cout<<"Adding new book"<<endl;
        {
        string name;
        string author;
        string genre;
        int edition;
        int publish_year;
        cout<<"Enter name of book:"<<endl;
        cin>>name;
        cout<<"Enter author name:"<<endl;
        cin>>author;
        cout<<"Enter genre:"<<endl;
        cin>>genre;
        cout<<"Enter edition number :"<<endl;
        cin>>edition;
        cout<<"Enter date of publish"<<endl;
        cin>>publish_year;
        new_book(&object,name,author,genre,edition,publish_year);
        }
        break;
        case '2':
        clear();
        cout<<"Displaying book list"<<endl;
        book_list(object);
        break;
        case '3':
        clear();
        cout<<"Searching for book"<<endl;
        {
        string search_name;
        cout<<"Enter book name for search:"<<endl;
        cin>>search_name;
        search_book(object,search_name);
        }
        break;
        case '4':
        clear();
        cout<<"Exit"<<endl;
        return 0;
        default :
        cout<<"wrong choice please try again"<<endl;
        goto label1;
    }
    cout<<"Do you want to continue?(y/n)"<<endl;
    cin>>choice_2;
    if (choice_2 == 'y' || choice_2 == 'Y') {
    
        goto label2;
    }else if(choice_2 == 'n' || choice_2 == 'N'){
        cout<<"End of program"<<endl;
    }    
  return 0;     
}

void new_book(class Info *object, string name, string author, string genre, int edition, int publish_year) {
    if (object->book_numbers < max_book) {
        class LibBooks new_book;
        new_book.name = name;
        new_book.author = author;
        new_book.genre = genre;
        new_book.edition = edition;
        new_book.publish_date = publish_year;
        object->books[object->book_numbers] = new_book;
        object->book_numbers++;
        cout << "Book added successfully" << endl;
    } else {
        cout << "Library is full, cannot add more books" << endl;
    }
}

void book_list(class Info object) {
    for (int i = 0; i < object.book_numbers; i++) {
        cout << "Name: " << object.books[i].name << '\n'
             << "Author: " << object.books[i].author << '\n'
             << "Genre: " << object.books[i].genre << '\n'
             << "Editions: " << object.books[i].edition << '\n'
             << "Publish date: " << object.books[i].publish_date << endl;
    }
}

void search_book(class Info object, string name) {
    cout << "Search result ..." << endl;
    for (int i = 0; i < object.book_numbers; i++) {
        if (object.books[i].name == name) {
            cout << "Name: " << object.books[i].name << '\n'
                 << "Author: " << object.books[i].author << '\n'
                 << "Genre: " << object.books[i].genre << '\n'
                 << "Editions: " << object.books[i].edition << '\n'
                 << "Publish date: " << object.books[i].publish_date << endl;
        }
    }
    cout<<"book not found"<<endl;
}

void clear(){
    const char* clearCommand = nullptr;
    #ifdef _WIN32
        clearCommand ="cls";
    #elif __linux__
        clearCommand ="clear";
    #else    
        cout<<"Unsupported operating system."<<endl;
        return;
    #endif
    
    int result = system(clearCommand);
    if (result == 0) {
        cout<<"Command executed successfully."<<endl;
    } else {
        cout<<"Command execution failed."<<endl;
    }
};
```

#2.Data Structures Attributes:

Data structures offer a versatile way to organize and store data. From arrays to linked lists, each structure has its unique advantages and trade-offs. Attributes inside data structures provide a foundation for efficient data access and manipulation, but the choice of structure must align with the specific requirements of the application.so data structure was another of our option to store data which we use it on library.c:
```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define max_book 200

struct LibBooks{
    char name[100];
    char author[100];
    char genre[100];
    int edition;
    int publish_date;
};

struct Info{
    struct LibBooks books[max_book];
    int book_numbers;
};

void new_book(struct Info *object, const char *name, const char *author, const char *genre, int edition, int publish_date);
void book_list(struct Info object);
void search_book(struct Info object,const char *name);
void clear();

int main(){
    struct Info object;
    object.book_numbers = 0;
    char choice,choice_2;
    label1:
    label2:
    printf("\t---welcome to our program---\n");
    printf("1. Add new book\n");
    printf("2. Display books list\n");
    printf("3. search for book\n");
    printf("4. Exit program\n");
    scanf(" %c", &choice);
    switch (choice){
    case '1':
        clear();
        printf("Adding new book\n");
        {
         char name[100];
         char author[100];
         char genre[100];
         int edition;
         int publish_date;
         printf("Enter name of book:\n");
         scanf(" %s", &name);

         printf("Enter author name:\n");
         scanf(" %s", &author);

         printf("Enter genre:\n");
         scanf(" %s", &genre);

         printf("Enter edition number :\n");
         scanf(" %d", &edition);

         printf("Enter date of publish\n");
         scanf(" %d", &publish_date);

         new_book(&object,name,author,genre,edition,publish_date);
        }
        break;
    case '2':
        clear();
        printf("Displaying book list\n");
        book_list(object);
        break;
    case '3':
        clear();
        printf("Searching for book\n");
        {
         char search_name[100];
         printf("Enter book name for search:\n");
         scanf(" %s", &search_name);
         search_book(object,search_name);
        }
        break;
    case '4':
        clear();
        printf("Exit\n");
        return 0;
        break;
    default:
        printf("wrong choice please try again");
        goto label1;
        break;
    }
    printf("Do you want to continue?(y/n)\n");
    scanf(" %c", &choice_2);
    if (choice_2 == 'y' || choice_2 == 'Y') {   
        goto label2;
    }else if(choice_2 == 'n' || choice_2 == 'N'){
        printf("End of program\n");
    }   
  return 0;
}

void new_book(struct Info *object, const char *name, const char *author, const char *genre, int edition, int publish_date){
    if(object->book_numbers<max_book){
        struct LibBooks new_book;
        strcpy(new_book.name,name);
        strcpy(new_book.author,author);
        strcpy(new_book.genre,genre);
        new_book.edition = edition;
        new_book.publish_date = publish_date;
        object->books[object->book_numbers] = new_book;
        object->book_numbers++;
        printf("Book added successfully\n");
    }else{
        printf("Library is full, cannot add more books\n");
    }
}

void book_list(struct Info object){
    for(int i=0; i < object.book_numbers ;i++){
        printf("%d. Name:%s,Author:%s,Genre:%s,Edition:%d,Publish_date:%d \n",
               i + 1,
               object.books[i].name,
               object.books[i].author,
               object.books[i].genre,
               object.books[i].edition,
               object.books[i].publish_date);
    }
}

void search_book(struct Info object,const char *name){
    printf("Search result ...\n");
    for(int i=0;i < object.book_numbers; i++){
        if(strcmp(object.books[i].name,name)==0){
        printf("%d. Name:%s,Author:%s,Genre:%s,Edition:%d,Publish_date:%d \n",
               object.books[i].name,
               object.books[i].author,
               object.books[i].genre,
               object.books[i].edition,
               object.books[i].publish_date);
        }
    }
    printf("Book not found\n");
}

void clear() {
    const char* clearCommand = NULL;
    #ifdef _WIN32
        clearCommand ="cls";
    #elif __linux__
        clearCommand ="clear";
    #else    
        printf("Unsupported operating system.\n");
        return;
    #endif
    
    int result = system(clearCommand);
    if (result == 0) {
        printf("Command executed successfully.\n");
    } else {
        printf("Command execution failed.\n");
    }
}
```

#3. File-based Storage:

Storing data in files is a traditional method with its own set of advantages and challenges. Files provide a simple and accessible means of data storage, but scalability and complexity can become issues as data volume grows. Exploring various file formats and organization strategies becomes critical in optimizing file-based data modeling.we used file-based method for couple of programs include library.py library.sh,and here we can take closer look to library.py:
```python
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
```  

#4. Database Storage:

Databases are robust solutions for structured data storage, offering features like indexing, transactions, and query optimization. However, choosing the right database model—whether relational data base management system(rdbms) or  not relational data base management system(nrdbms) requires careful consideration of the application's needs. While databases are better in data retrieval and management, their setup and maintenance can be complex.so beacuse of features and advantage of data bases we use them on our complex program like library.js and django project,we also stored data on library_v2.py with data bases and connector:
```python
from sqlalchemy import create_engine, Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class Book(Base):
    __tablename__ = 'book'

    id = Column(Integer, primary_key=True)
    bookName = Column(String, nullable=False)
    publisher = Column(String)
    genre = Column(String)
    editionNumber = Column(Integer)
    dateOfPublish = Column(Date)

class Info:
    def __init__(self, session):
        self.session = session

    def add_book(self, book):
        self.session.add(book)
        self.session.commit()

    def display_books(self):
        books = self.session.query(Book).all()
        for i, book in enumerate(books, start=1):
            print(f"Book number {i}:\n"
                  f"Name: {book.bookName}\n"
                  f"Publisher: {book.publisher}\n"
                  f"Genre: {book.genre}\n"
                  f"Edition: {book.editionNumber}\n"
                  f"Publish date: {book.dateOfPublish}\n"
                  "--------------------------")

    def search_book(self, name):
        book = self.session.query(Book).filter_by(bookName=name).first()
        if book:
            print(f"Book found:\n"
                  f"Name: {book.bookName}\n"
                  f"Publisher: {book.publisher}\n"
                  f"Genre: {book.genre}\n"
                  f"Edition: {book.editionNumber}\n"
                  f"Publish date: {book.dateOfPublish}")
        else:
            print("Book not found.")

def clear():
    import os
    os.system('cls' if os.name == 'nt' else 'clear')

def create_database():
    engine = create_engine('sqlite:///book_database.db')
    Base.metadata.create_all(engine)
    return engine

def main():
    engine = create_database()
    Base.metadata.bind = engine
    DBSession = sessionmaker(bind=engine)
    session = DBSession()

    info_object = Info(session)

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
            publisher = input("Enter publisher: ")
            genre = input("Enter genre: ")
            edition = int(input("Enter edition number: "))
            publish_date = input("Enter date of publish (YYYY-MM-DD): ")

            new_book = Book(bookName=name, publisher=publisher, genre=genre,
                            editionNumber=edition, dateOfPublish=publish_date)
            info_object.add_book(new_book)
            print("Book added successfully")

        elif choice == '2':
            clear()
            print("Displaying book list")
            info_object.display_books()

        elif choice == '3':
            clear()
            print("Searching for a book")
            search_name = input("Enter the book name for search: ")
            info_object.search_book(search_name)

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
```

#Conclusion:

All in all we can figure it out ,effective data modeling are depend on a thoughtful selection and integration of various storage methods. Whether utilizing oop attributes,data structures,file-based storage, or leaning on the power of databases, understanding the benefits and drawbacks of each approach is essential for designing a robust and reliable data storage solution. Balancing these considerations ensures that data modeling aligns with the specific requirements of the application, leading to efficient and effective data storage.

# django:


# ⏯️video:
