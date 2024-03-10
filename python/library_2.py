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

