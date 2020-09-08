/* Barra de menú en mobile */
function openSidebar() {
	document.querySelector(".sidebar").classList.add("showing-sidebar")
	document.querySelector(".close-zone").style.display = "block";
}

function closeSidebar() {
	document.querySelector(".sidebar").classList.remove("showing-sidebar")
	document.querySelector(".close-zone").style.display = "none";
}

function toggleSizeTable() {
	let display = document.querySelector(".product-size-table").style.display;
	if(display == "block"){
			document.querySelector(".product-size-table").style.display = "none";
	} else {
			document.querySelector(".product-size-table").style.display = "block";
	}
}

/* Fin Barra de menú en mobile */
