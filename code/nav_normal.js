function toggleMobileMenu(menu) {
    menu.classList.toggle('open'); 

    if(menu.classList.contains('open')) {
        document.getElementById("header-timeline").style.marginTop = "250px";
    } else {
        document.getElementById("header-timeline").style.marginTop = "80px";   
    }
}