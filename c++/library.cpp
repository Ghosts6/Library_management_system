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
