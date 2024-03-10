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
