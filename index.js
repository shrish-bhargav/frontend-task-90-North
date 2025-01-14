// toggle menu function
function toggleMenu() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
}

// task 2
function adjustPageSize() {
    const screenWidth = window.innerWidth;
    const body = document.body;

    if(screenWidth >= 992 && screenWidth <= 1600) {
        body.style.transform = "scale(0.9)";
        body.style.width = "90%";
    }else if(screenWidth >= 700 && screenWidth <= 767)
    {
        body.style.transform = "scale(0.8)";
        body.style.width = "80%";
    }else if(screenWidth >= 600 && screenWidth <= 700) {
        body.style.transform = "scale(0.75)";
        body.style.width = "75%";
    }else{
        body.style.transform = "scale(0.5)";
        body.style.width = "50%";
    }
}
