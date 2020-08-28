/* Barra de menú en mobile */
function openSidebar() {
    document.querySelector(".sidebar").classList.add("showing-sidebar")
    document.querySelector(".close-zone").style.display = "block";
}

function closeSidebar() {
    document.querySelector(".sidebar").classList.remove("showing-sidebar")
    document.querySelector(".close-zone").style.display = "none";
}
/* Fin Barra de menú en mobile */