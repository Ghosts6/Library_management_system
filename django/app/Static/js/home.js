document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', function () {
        window.location.href = "../add_book/";
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const listButton = document.getElementById('list-button');
    listButton.addEventListener('click', function () {
        window.location.href = "../book_list/";
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function () {
        window.location.href = "../search/";
    });
});