window.addEventListener('load', function(){
  validateNewProduct()
})

function validateNewProduct() {
  const errors = {name: "", description: "", category: "", price: "", image: ""};

  const divForm = document.getElementById("newProduct")

  const productName = document.getElementById("productName");
  const productDescription = document.getElementById("productDescription");
  const productCategory = document.getElementById("productCategory");
  const productPrice = document.getElementById("productPrice");
  const productIMG = document.getElementById("productIMG");

  productName.addEventListener('blur', function() {
    if (this.value.length < 5) {
      handleFeedback(this, "*El nombre debe tener al menos 5 caracteres" )
    } else {
      handleFeedback(this)
    }
  })

  productDescription.addEventListener('blur',function() {
    if (this.value.length < 20) {
      handleFeedback(this, "*La descripción debe tener al menos 20 caracteres" )
    } else {
      handleFeedback(this)
    }
  })

  productCategory.addEventListener('blur',function() {
    if (!this.value) {
      handleFeedback(this, "*Debe elegir una categoría")
    } else {
      handleFeedback(this)
    }
  })

  productPrice.addEventListener('blur',function() {
    if (!this.value) {
      handleFeedback(this, "*Debe ingresar un precio")
    } else {
      handleFeedback(this)
    }
  })

  productIMG.addEventListener('change',function() {
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