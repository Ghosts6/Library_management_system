#!/bin/bash

echo "---welcome to our program---"
echo "1. Add new book"
echo "2. Display books list"
echo "3. search for book"
echo "4. Exit program"

read -p "" choice

data="book.txt"
max_book=200

if [ ! -e "$data" ]; then
    touch "$data"
fi

case $choice in
    1)
        clear
        echo "Adding new book"

        current_book_count=$(grep -c '^Name:' "$data")
        if [ "$current_book_count" -gt "$max_book" ]; then
            echo "Error: The library is full. Cannot add more books."
            exit 1
        else
            book_number=$((current_book_count + 1))

            read -p "Enter name of book:" name
            read -p "Enter author name:" author
            read -p "Enter genre:" genre
            read -p "Enter edition number :" edition
            read -p "Enter date of publish" publish_date

            echo "--------------" >> "$data"
            echo "Book Number: $book_number" >> "$data"
            echo "Name: $name" >> "$data"
            echo "Author: $author" >> "$data"
            echo "Genre: $genre" >> "$data"
            echo "Edition: $edition" >> "$data"
            echo "Publish Date: $publish_date" >> "$data"
            echo "" >> "$data"

            echo "Book added successfully with number $book_number"
        fi
        ;;
    2)
        clear
        echo "Displaying book list"
        cat "$data"
        ;;
    3)
        clear
        echo "Searching for book"
        read -p "Enter book name for search:" search_name
        
        result=$(grep -A 5 -i "^Name: $search_name" "$data")

        if [ -n "$result" ]; then
            echo "Book found:"
            echo "$result"
        else
            echo "Book not found."
        fi
        ;;
    4)
        clear
        echo "Exit"
        exit 1   
        ;;
    *)
        echo "wrong choice please try again"
        ;;
esac

echo "End of program"
