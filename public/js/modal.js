function newNote() {
	let divModal = document.querySelector(".modal-naito");
	let divCover = document.querySelector(".cover-modal");

	divModal.style.display = "flex";

	divModal.style.opacity = 1;
	divModal.style.visibility = "visible";

	divCover.style.display = "block";
}
  
function closeModal() {
	let divModal = document.querySelector(".modal-naito");
	let divCover = document.querySelector(".cover-modal");

	divModal.style.opacity = 0;
	divModal.style.visibility = "hidden";
	divCover.style.display = "none";
}
