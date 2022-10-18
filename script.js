var imageTwo = document.querySelector("#cafe-neko")
function switchImg() {
    imageTwo.src = "images/pixel-ninjas-2.png"
}
var imageThree = document.querySelector("#cafe-neko")
function backTonormal() {
    imageThree.src = "images/cafe-neko.png"
    
}

function increaseCart(id){
    document.querySelector(id).innerText++
}