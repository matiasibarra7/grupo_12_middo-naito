window.addEventListener('load', function(){
  validateNewProduct()
})

function validateNewProduct() {
  const errors = {name: "", description: "", category: "", size: "", price: "", stock: "", image: ""};

  const divForm = document.getElementById("newProduct")

  const productName = document.getElementById("productName");
  const productDescription = document.getElementById("productDescription");
  const productCategory = document.getElementById("productCategory");
  const productSize = document.getElementById("productSize");
  const productPrice = document.getElementById("productPrice");
  const productStock = document.getElementById("productStock");
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

  productSize.addEventListener('blur',function() {
    if (!this.value) {
      handleFeedback(this,"*Debe elegir un talle")
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

  productStock.addEventListener('blur',function() {
    if (!this.value) {
      handleFeedback(this,"*Debe ingresar el stock")
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
    canSubmit = true

    console.log(errors);
  }


  divForm.addEventListener('submit', function(e) {
      if (Object.keys(errors).length) {
        e.preventDefault()
        // console.log('Se ataja el submit');
        console.log(errors);
      }
  })
}