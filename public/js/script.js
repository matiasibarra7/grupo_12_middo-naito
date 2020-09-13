/* Barra de menú en mobile */
function openSidebar() {
  document.querySelector(".sidebar").classList.add("showing-sidebar")
  document.querySelector(".close-zone").style.display = "block";
  document.querySelector(".close-icon-sidebar").style.display = "flex";
}

function closeSidebar() {
  document.querySelector(".sidebar").classList.remove("showing-sidebar")
  document.querySelector(".close-zone").style.display = "none";
  document.querySelector(".close-icon-sidebar").style.display = "none";
}
/* Fin Barra de menú en mobile */


function toggleSearcher() {
  let divSerachField = document.querySelector(".searcher-field");
  divSerachField.classList.toggle("active")
}

