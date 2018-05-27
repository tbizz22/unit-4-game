// Global Variables
var wins = 0;
var losses = 0;


// Object

var crystal = {
    currentval: 0,
    targetval: 0,
    gems: {
        crystal1: 0,
        crystal2: 0,
        crystal3: 0,
        crystal4: 0 
    }
};

// Get the game set up

getTargetVal()
getGemVal()
setGameScore()
setCurrentScore()

// Randomizer Function
function getRandomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Generate Target Value
function getTargetVal () {
    crystal.targetval = getRandomizer(39,120);
    console.log(crystal.targetval);
    $("#target-val").html(crystal.targetval);
}

// // Generate gem Values
//     function getGemVal() {
//         for (var i = 0; i < Object.keys(crystal.gems).length; i++) {
//         crystal.gems.crystal[i+1] = getRandomizer(1,19); 
//         console.log(crystal.gems)
//         }
//     }

function getGemVal () {
    crystal.gems.crystal1 = getRandomizer(1,19);
    crystal.gems.crystal2 = getRandomizer(1,19);
    crystal.gems.crystal3 = getRandomizer(1,19);
    crystal.gems.crystal4 = getRandomizer(1,19);
    console.log("Crystal 1 Value: " + crystal.gems.crystal1);
    console.log("Crystal 2 Value: " + crystal.gems.crystal2);
    console.log("Crystal 3 Value: " + crystal.gems.crystal3);
    console.log("Crystal 4 Value: " + crystal.gems.crystal4);
}
    

// UI UPDATERS
//set scores
    function setGameScore() {
        $("#wins").html(wins);
        $("#losses").html(losses);
    }

// set current player score
    function setCurrentScore () {
        $("#current-score").html(crystal.currentval);
    }



// Button Listeners

