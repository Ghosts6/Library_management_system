particlesJS('particles-js', {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 500
          }
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#00ffff'
          },
          polygon: {
            nb_sides: 5
          },
        },
        size: {
          value: 50,
          random: true
        },
        color: {
          value: '#097a7a'
        },
        opacity: {
          value: 0.8,
          random: true
        },
        move: {
          enable: true,
          speed: 3,
          direction: 'none',
          straight: false,
          out_mode: 'out'
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          }
        }
      }
    });

document.addEventListener('DOMContentLoaded', function() {

    const addButton = document.querySelector('.operation-button:nth-child(1)');
    const bookListButton = document.querySelector('.operation-button:nth-child(2)');
    const searchButton = document.querySelector('.operation-button:nth-child(3)');
    const exitButton = document.querySelector('.operation-button:nth-child(4)');
    const menuButton = document.querySelector('#menuButton');

    const addBookSection = document.querySelector('.add-book');
    const bookListSection = document.querySelector('.book-list');
    const searchSection = document.querySelector('.search');
    const exitSection = document.querySelector('.exit');
    const menuSection = document.querySelector('.menu');

    const newButton = document.querySelector('#new-book');
    const searchSubmitButton = document.querySelector('#search-submit');
    const bookListContainer = document.querySelector('.list');
    
    const dataFileName = 'book.txt';

            addBookSection.style.display = 'none';
            bookListSection.style.display = 'none';
            searchSection.style.display = 'none';
            exitSection.style.display = 'none';

    fetch(dataFileName)
        .then(response => {
            if (!response.ok) {
                return fetch(dataFileName, { method: 'PUT' });
            }
            return Promise.resolve();
        })
        .then(() => {

            addButton.addEventListener('click', function() {
                addBookSection.style.display = 'block';
                bookListSection.style.display = 'none';
                searchSection.style.display = 'none';
                exitSection.style.display = 'none';
                menuSection.style.display = 'none';
            });

            bookListButton.addEventListener('click', function() {
                addBookSection.style.display = 'none';
                bookListSection.style.display = 'block';
                searchSection.style.display = 'none';
                exitSection.style.display = 'none';
                menuSection.style.display = 'none';
                displayAllBooks();
            });

            searchButton.addEventListener('click', function() {
                addBookSection.style.display = 'none';
                bookListSection.style.display = 'none';
                searchSection.style.display = 'block';
                exitSection.style.display = 'none';
                menuSection.style.display = 'none';
            });

            exitButton.addEventListener('click', function() {
                addBookSection.style.display = 'none';
                bookListSection.style.display = 'none';
                searchSection.style.display = 'none';
                exitSection.style.display = 'block';
                menuSection.style.display = 'none';
            });

            menuButton.addEventListener('click', function() {
                addBookSection.style.display = 'none';
                bookListSection.style.display = 'none';
                searchSection.style.display = 'none';
                exitSection.style.display = 'none';
                menuSection.style.display = 'block';
            });

            newButton.addEventListener('click', function() {
                const name = document.getElementById('name').value;
                const author = document.getElementById('author-name').value;
                const genre = document.getElementById('genre').value;
                const edition = document.getElementById('edition-number').value;
                const publishDate = document.getElementById('publish-date').value;

                if (name && author && genre && edition && publishDate) {
                    const newBookEntry = `------------------\nBook Number: ${bookListContainer.children.length + 1}\nName: ${name}\nAuthor: ${author}\nGenre: ${genre}\nEdition: ${edition}\nPublish Date: ${publishDate}\n`;

                    fetch(dataFileName, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'text/plain',
                        },
                        body: newBookEntry,
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error adding new book.');
                        }
                        return response.text();
                    })
                    .then(data => {
                        console.log('New book added successfully:', data);
                        document.getElementById('name').value = '';
                        document.getElementById('author-name').value = '';
                        document.getElementById('genre').value = '';
                        document.getElementById('edition-number').value = '';
                        document.getElementById('publish-date').value = '';
                    })
                    .catch(error => {
                        console.error('Error adding new book:', error);
                    });
                } else {
                    alert('Please fill in all the form fields.');
                }
            });

            searchSubmitButton.addEventListener('click', function() {
                const searchName = document.getElementById('search-name').value;

                if (searchName) {
                    searchBook(searchName);
                } else {
                    alert('Please enter a book name for search.');
                }
            });


            function displayAllBooks() {
                fetch(dataFileName)
                    .then(response => response.text())
                    .then(data => {
                        bookListContainer.innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Error fetching book list:', error);
                    });
            }


            function searchBook(searchName) {
                fetch(dataFileName)
                    .then(response => response.text())
                    .then(data => {
                        const books = data.split('------------------\n').filter(book => book.trim() !== '');

                        let foundBook = null;

                        for (const book of books) {
                            if (book.includes(`Name: ${searchName}`)) {
                                foundBook = book;
                                break;
                            }
                        }
                        if (foundBook) {
                            alert(foundBook);
                        } else {
                            alert(`Book with name "${searchName}" not found.`);
                        }
                    })
                    .catch(error => {
                        console.error('Error searching for book:', error);
                    });
            }
        })
        .catch(error => console.error('Error checking/creating file:', error));
});
