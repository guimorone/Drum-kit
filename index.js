function handleClick(){
    //this = botão que foi clicado
    var button = this.innerHTML;
    switch (button) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default: // L
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
    buttonAnimation(button);
}

var len = document.querySelectorAll(".drum").length;
for(var i = 0; i < len; i++){ //nesse caso, len = 7
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); //o que acontece quando clica no botão
    //o que acontece quando clica no botão
}

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l": //nesse caso n eh bom usar default pra essa letra pq se n a pessoa acessa apertando qualquer botão
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(event.key);
            break;
    }
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey); //animação quando clica
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100); //delay pra ser uma animação
    // se eu não botar essa parte, vai ficar parecendo q foi apertado pra sempre
}
