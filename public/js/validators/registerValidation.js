window.addEventListener('load', function(){
  validateRegister()
})

function validateRegister() {
  const errors = {firstName: "", lastName: "", email: "", password: "", confirmPassword: ""};

  const divForm = document.getElementById("registerForm")

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const userIMG = document.getElementById("userIMG");

  firstName.addEventListener('blur', function() {
    if (this.value.length < 2) {
      handleFeedback(this, "*El nombre debe tener al menos 2 caracteres" )
    } else {
      handleFeedback(this)
    }
  })

  lastName.addEventListener('blur',function() {
    if (this.value.length < 2) {
      handleFeedback(this, "*El apellido debe tener al menos 2 caracteres" )
    } else {
      handleFeedback(this)
    }
  })

  email.addEventListener('blur',function() {
    if (!this.value) {
      handleFeedback(this, "*El email ingresado debe ser valido")
    } else {
      handleFeedback(this)
    }
  })

  password.addEventListener('keyup',function() {
    const validationPass = /^(?=.*\d)(?=.*[!@#\$%\^\&*\)\(+=._-])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if (validationPass.test(this.value)) {
      handleFeedback(this)
    } else {
      handleFeedback(this,"*La contraseña debe tener una mayúscula, un número, un carácter especial y tener al menos 8 carácteres")
    }
  })

  confirmPassword.addEventListener('blur',function() {
    if (this.value !== password.value) {
      handleFeedback(this, "*Las contraseñas ingresadas no coinciden")
    } else {
      handleFeedback(this)
    }
  })

  userIMG.addEventListener('change',function() {
    const acceptedExtensions = ["jpg", "jpeg", "png"];
    const extFile = this.value.split('.').pop()
    
    if (!acceptedExtensions.includes(extFile)) {
      handleFeedback(this,"*Debe seleccionar una imagen con extensión 'jpg', 'jpeg' o 'png'")
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