var marginTopRotate;

function toggleMobileMenu(menu) {
    menu.classList.toggle('open'); 

    if(menu.classList.contains('open')) {
        marginTopRotate = document.getElementById("holder").style.top;
        document.getElementById("main_text").style.marginTop = "250px";
        document.getElementById("holder").style.top = "700px";
    } else {
        document.getElementById("main_text").style.marginTop = "10%";
        document.getElementById("holder").style.top = marginTopRotate;
    }
}