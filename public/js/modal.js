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

function generateModal(userName = "usuario", idUser = "1") {
  let modal = `
    <div class="close-icon-modal" onclick=toggleModal()>X</div>
    <div>
        <p style="color: black;">¿Estás seguro que quieres eliminar al usuario/a ${userName}?</p>
    </div>
    <div class="field-modal">
        <div class="btn">
            <button type="submit" class="btn-default" onclick="toggleModal()">Cancelar</button>
        </div>
        <form action="/users/edit/${idUser}?_method=DELETE" method="POST">
          <div class="btn">
              <button type="submit" class="btn-default red">BORRAR USUARIO</button>
          </div>
        </form>
    </div>
  `
  let divModalNaito = document.querySelector(".modal-naito")
  divModalNaito.innerHTML = modal
  toggleModal()
}

function generateSimpleMessage(title = "Ejemplo de mje") {
  let divBody = document.querySelector("body");
  let message = `
  <div class="inserted-msg">
    <div>
      <b>${title}</b>
    </div>
  </div>
  `
  divBody.innerHTML += message
  setTimeout(() => {
    let divMsg = document.querySelector(".inserted-msg");
    divMsg.remove()
  }, 3000)
}
