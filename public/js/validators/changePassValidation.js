window.addEventListener('load', function(){
    changePass()
  })
  
  function changePass() {
    const errors = {oldPass: "",newPass: "", confirmNewPass: ""};
  
    const divForm = document.getElementById("changePass")

    const oldPass = document.getElementById("oldPass");
    const newPass = document.getElementById("newPass");
    const confirmNewPass = document.getElementById("confirmNewPass");

    oldPass.addEventListener('blur',function() {
        if (!this.value.length) {
            handleFeedback(this,"*Debe ingresar su contraseña actual")
          } else {
            handleFeedback(this)
          }
    })

    newPass.addEventListener('blur',function() {
      if (this.value.length < 8) {
        handleFeedback(this,"*La contraseña ingresada debe tener al menos 8 caracteres")
      } else {
        handleFeedback(this)
      }
    })
  
    confirmNewPass.addEventListener('blur',function() {
      if (this.value !== newPass.value) {
        handleFeedback(this, "*Las contraseñas ingresadas no coinciden")
      } else {
        handleFeedback(this)
      }
    })
  
  
    function handleFeedback(inputElement, msg = "") {
      const msgContainer = inputElement.nextElementSibling;
  
      if (msg) {
        inputElement.classList.add('warning-input');
        errors[inputElement.name] = msg;
      } else {
        inputElement.classList.remove('warning-input');
        delete errors[inputElement.name];
      }
      msgContainer.innerText = msg;
      canSubmit = true
  
      console.log(errors);
    }
  
  
    divForm.addEventListener('submit', function(e) {
        if (Object.keys(errors).length) {
          // console.log('Se ataja el submit');
          e.preventDefault()
  
          // Al utilizar el innerHtml con el body, este evento se borra y permite el envio del formulario sin validar antes.
          /* if (Object.keys(errors).length == 7) {
            generateSimpleMessage('Debes completar los campos con los detalles del producto')
          } */
  
          console.log(Object.keys(errors));
        }
    })
  }