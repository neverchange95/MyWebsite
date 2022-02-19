function toggleMobileMenu(menu) {
    menu.classList.toggle('open'); 

    if(menu.classList.contains('open')) {
        document.getElementById("welcome_h1").style.marginTop = "250px";
    } else {
        document.getElementById("welcome_h1").style.marginTop = "40px";   
    }
}