function toggleModal() {
  let divModal = document.querySelector(".modal-naito");
  let divCover = document.querySelector(".cover-modal");

  if (divModal.style.opacity == 0) {
    divModal.style.opacity = 1;
    divModal.style.visibility = "visible";
    divCover.style.display = "block";
  } else {
    divModal.style.opacity = 0;
    divModal.style.visibility = "hidden";
    divCover.style.display = "none";
  }

}