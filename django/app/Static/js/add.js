document.addEventListener('DOMContentLoaded', function () {
    const newBookButton = document.getElementById('new-book');

    newBookButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const author = document.getElementById('author-name').value;
        const genre = document.getElementById('genre').value;
        const editionNumber = document.getElementById('edition-number').value;
        const publishDate = document.getElementById('publish-date').value;

        if (!name || !author || !genre || !editionNumber || !publishDate) {
            Swal.fire({
                icon: 'error',
                title: 'Please fill all the forms.',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                background: '#f8d7da'  
            });
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('author', author);
        formData.append('genre', genre);
        formData.append('edition_number', editionNumber);
        formData.append('publish_date', publishDate);


        const csrftoken = getCookie('csrftoken');

        fetch('/add/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrftoken,
            },
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Book added successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    background: '#d4edda'
                }).then(() => {
                    window.location.href = '../home/';
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to add book. Please try again.',
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

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.getElementById('Home-button');
    homeButton.addEventListener('click', function () {
        window.location.href = "../home/";
    });
});