//Display in console
deathMsg="WARNING: YOU HAVE BEEN DETECTED ATTEMPTING TO ACCESS THE FILES ON THIS ARCHIVE WITHOUT OFFICIAL APRROVAL. MTF TEAM DEPLOYED. SAY YOUR LAST WORDS.";

console.log(deathMsg);

// Reavel Archive if function "Reveal" is triggered by onClick
function Reveal() {
    alert('Verification Success');

    let rev = document.getElementById("Reveal Archive");
    rev.style.display = "block";
}

// Rick Roll Troll (temp disabled)

/*
function rickRolledBoi() {
    let rickRolled = document.getElementById("getRickRolled");
    rickRolled.play();
}

function stopRickRoll() {
    let rickRolled = document.getElementById("getRickRolled");
    rickRolled.pause();
}
*/

function stopRickRoll() {
    alert('ERROR: Rick Roll has been removed from the site for now due to unofficial impression. This button is currently rendered useless.');
}


























//When hovering over a button for the table of contents
function playTableHoverSound() {
    let tableSoundPlay = document.getElementById("tableHoverSoundSrc");
    tableSoundPlay.play();
}

//Audio Controls hide/reveal

function revealSweden() {
    let swedenReveal = document.getElementById("SwedenControls");
    swedenReveal.style.display = "block";

}




















/*
$("audio1").each(function(){
  $(this).bind("play",stopAll);
});

function stopAll(e){
    var currentElementId=$(e.currentTarget).attr("id");
    $("audio1").each(function(){
        var $this=$(this);
        var elementId=$this.attr("id");
        if(elementId!=currentElementId){
            $this[0].pause();
        }
    });
}
*/








function spamYee() {
console.log('YEEEEEEEEEEEEEEEEEEEEEE');
// <button onclick="spamYee()">Click Me to Spam YEEEEEEEEE in Console</button>
}


// https://youtu.be/dQw4w9WgXcQ


