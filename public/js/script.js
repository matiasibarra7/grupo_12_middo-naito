let variable = 145

function openSidebar() {
    document.querySelector(".sidebar").style.display = "block";
    document.querySelector(".close-zone").style.display = "block";
}

function closeSidebar() {
    document.querySelector(".sidebar").style.display = "none";
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

