let numberOfDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });

    // Keydown listener
    document.addEventListener("keydown", function(event) {
        makeSound(event.key);
    });

    // Function to play sounds on keyboard press
    function makeSound(key) {

        switch (key) {
            case "w":
                audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "a":
                audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

            case "s":
                audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

            case "d":
                audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            case "j":
                audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "k":
                audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            case "l":
                audio = new Audio("sounds/snare.mp3");
                audio.play();
                
            default:
                break;
            }
    }
}