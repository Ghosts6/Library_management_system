document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const tryAgainButton = document.getElementById('try-again');
    const searchContainer = document.getElementById('search-container');
    const resultContainer = document.getElementById('result-container');
    const homeButton = document.getElementById('Home-button');

    searchButton.addEventListener('click', function () {
        const bookName = document.getElementById('name').value;

        if (!bookName) {
            Swal.fire({
                icon: 'error',
                title: 'Please enter book name!',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                background: '#f8d7da'
            });
            return;
        }

        fetch(`/search_book/?name=${encodeURIComponent(bookName)}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const searchResult = document.getElementById('search-result');
                    searchResult.innerHTML = `
                        <h2>Name: ${data.book.name}</h2>
                        <h3>Author: ${data.book.author}</h3>
                        <h4>Genre: ${data.book.genre}</h4>
                        <h5>Edition Number: ${data.book.edition_number}</h5>
                        <h5>Date of Publish: ${data.book.publish_date}</h5>
                    `;
                    searchContainer.style.display = 'none';
                    resultContainer.style.display = 'block';
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Book not found!',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        background: '#f8d7da'
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    homeButton.addEventListener('click', function () {
        window.location.href = "../home/";
    });

    tryAgainButton.addEventListener('click', function () {
        window.location.href = "../search/";
    });
});
