    // primary array
let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

// tracking the game has started on not
let started = false;

    // starting level 0
let level = 0;

    // if keyboard press detection
$(document).keydown(function() {
    if (!started) {

            // Starting title after pressing A to start.
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

    // when button is clicked
$(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    
    // Calling playSound
    playSound(userChosenColor);

    // Calling animatePress
    animatePress(userChosenColor);

    // calling checkAnwser
    checkAnswer(userClickedPattern.length - 1);
});

// Creating new Function
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");

        // Play sound if wrong
        playSound("wrong");

        // Adding class to the body
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200);

        // Changing h1 to Game over and Restart
        $("#level-title").text("Game Over, Press Any Key to Restart");

        // Calling startOver if the sequence is wrong
        startOver();
    }
}

    // Math Function for the Array
function nextSequence() {

    userClickedPattern = [];

    // Increasing the level by 1
    level++;

    // Updating the level-title value
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * buttonColors.length);
    let randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);

    // jQuery to choose a random color from the ID of the button color to fade IN and Out
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

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

// Restart Function
function startOver () {
    // Resetting all values
    level = 0;
    gamePattern = [];
    started = false;
}