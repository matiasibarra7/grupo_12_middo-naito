window.addEventListener('load', function(){
validateNewProduct()
})

function validateNewProduct (){
    
let errors = {};

let divForm = document.getElementById("newProduct")

let productName = document.getElementById("productName");
let productDescription = document.getElementById("productDescription");
let productCategory = document.getElementById("productCategory");
let productSize = document.getElementById("productSize");
let productPrice = document.getElementById("productPrice");
let productStock = document.getElementById("productStock");
let productIMG = document.getElementById("productIMG");

productName.addEventListener('blur',function(){
    if (this.value.length < 5){
        handleFeedback(this, "*El nombre debe tener al menos 5 caracteres" )
    } else {
        handleFeedback(this, "" )
    }
})
productDescription.addEventListener('blur',function(){
    if (this.value.length < 20){
        handleFeedback(this, "*La descripción debe tener al menos 20 caracteres" )
    } else {
        handleFeedback(this, "" )
    }
})

productCategory.addEventListener('blur',function(){
    if (!this.value){
        handleFeedback(this,"*Debe elegir una categoría")
    } else {
        handleFeedback(this, "" )
    }
})
productSize.addEventListener('blur',function(){
    if (!this.value){
        handleFeedback(this,"*Debe elegir un talle")
    } else {
        handleFeedback(this, "" )
    }
})

productPrice.addEventListener('blur',function(){
    if (!this.value){
        handleFeedback(this, "*Debe ingresar un precio")
    } else {
        handleFeedback(this, "" )
    }
})

productStock.addEventListener('blur',function(){
    if (!this.value){
        handleFeedback(this,"*Debe ingresar el stock")
    } else {
        handleFeedback(this, "" )
    }
})

productIMG.addEventListener('blur',function(){
    if (!this.value){
        handleFeedback(this,"*Debe seleccionar una imagen")
    } else {
        handleFeedback(this, "" )
    }
})

let handleFeedback = function (element, msg) {
    let msgDiv = element.nextElementSibling;

    if (msg) {
        element.classList.add('warning-input');
        errors[element.name] = msg;
    } else {
        element.classList.remove('warning-input');
        delete errors[element.name];
    }
    msgDiv.innerText = msg;
    console.log(errors);
}


divForm.addEventListener('submit', function(e){
    
    
    
    if (Object.keys(errors).length) {
        e.preventDefault();
    }
})
}