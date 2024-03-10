document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.getElementById('Home-button');
    homeButton.addEventListener('click', function () {
        window.location.href = "../home/";
    });
});