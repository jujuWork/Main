    // primary array
let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

    // when button is clicked
$(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
    
        // Calling playSound
    playSound(userChosenColor);

    // Calling animatePress
    animatePress(userChosenColor);
});
    // Math Function for the Array
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * buttonColors.length);
    let randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);

        // jQuery to choose a random color from the ID of the button color to fade IN and Out
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
};

    // Playing sounds function
function playSound(name) {
        // Javascript to play Audio the random Chosen Color that is linked to the buttonColor array
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

    // Animation during pressed
function animatePress(currentColor) {
        // this function pressed to add animation class to the pressed button
    $("#" + currentColor).addClass("pressed"); 

    setTimeout(function () {
        // this functinon removed the animation in 0.1secs after pressing the button
        $("#" + currentColor).removeClass("pressed"); 
    }, 100);
}