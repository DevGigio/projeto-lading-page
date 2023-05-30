var rightArrow = document.getElementById("right-arrow")
var Leonardo = document.getElementById("Leonardo")
var Samantha = document.getElementById("Samantha")
var Bruna = document.getElementById("Bruna")
var leftArrow = document.getElementById("left-arrow")

function ScrollRight(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    rightArrow.style = "display:none"
    leftArrow.style = "display:flex; margin-top:80px"
}

function ScrollLeft(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    rightArrow.style = "display:flex"
    leftArrow.style = "display:none"

}