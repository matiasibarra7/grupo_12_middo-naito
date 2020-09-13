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

/* Función para mostrar el buscador al clickar */
function toggleSearcher() {
  let divSerachField = document.querySelector(".searcher-field");
  divSerachField.classList.toggle("active")
}
/* Fin Función para mostrar el buscador al clickar */

/* Función para cambiar la cantidad en el carrito */
function changeQuantity(el) {
  let spanValue = el.parentElement.children[1]
  if (el.classList.contains("fa-plus-square")) {
    spanValue.innerText = parseInt(spanValue.innerText) + 1
  } else {
    if (spanValue.innerText > 1) {
      spanValue.innerText = parseInt(spanValue.innerText) - 1
    }
  }
}
/* Fin Función para cambiar la cantidad en el carrito */
