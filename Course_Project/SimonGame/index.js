let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

$(".btn").click(function () {
    let userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
});

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * buttonColors.length);

    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

        // jQuery to choose a random color from the ID of the button color to fade IN and Out
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
};

function playSound(name) {
        // Javascript to play Audio the random Chosen Color that is linked to the buttonColor array
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}