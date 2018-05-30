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
    },
    buttonclicked: "",
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

// Generate gem Values
    function getGemVal() {
        Object.keys(crystal.gems).forEach ((key) => {
            crystal.gems[key] = getRandomizer(1,19);             
        });
        console.log(crystal.gems)
    }

// function getGemVal () {
//     crystal.gems.crystal1 = getRandomizer(1,19);
//     crystal.gems.crystal2 = getRandomizer(1,19);
//     crystal.gems.crystal3 = getRandomizer(1,19);
//     crystal.gems.crystal4 = getRandomizer(1,19);
//     console.log("Crystal 1 Value: " + crystal.gems.crystal1);
//     console.log("Crystal 2 Value: " + crystal.gems.crystal2);
//     console.log("Crystal 3 Value: " + crystal.gems.crystal3);
//     console.log("Crystal 4 Value: " + crystal.gems.crystal4);
// }
    

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

//reset game
    function resetGame () {
        getTargetVal();
        getGemVal();
        setGameScore();
        crystal.currentval = 0;
        setCurrentScore();
    }

// Button Listeners

// Button 1
$("#gem-row").on("click","#gem-1",function() {
   // alert("you clicked gem 1 and my value is " + crystal.gems.crystal1)
    crystal.buttonclicked = crystal.gems.crystal1
    gameLogic();
});
// Button 2
$("#gem-row").on("click","#gem-2",function() {
   // alert("you clicked gem 2 and my value is " + crystal.gems.crystal2)
    crystal.buttonclicked = crystal.gems.crystal2
    gameLogic();
});
// Button 3
$("#gem-row").on("click","#gem-3",function() {
   // alert("you clicked gem 3 and my value is " + crystal.gems.crystal3)
    crystal.buttonclicked = crystal.gems.crystal3
    gameLogic();
});
// Button 4
$("#gem-row").on("click","#gem-4",function() {
  // alert("you clicked gem 4 and my value is " + crystal.gems.crystal4)
    crystal.buttonclicked = crystal.gems.crystal4
    gameLogic();
});


function gameLogic() {
    crystal.currentval = crystal.currentval + crystal.buttonclicked;
    setCurrentScore();

// if current score is equal to target  show win 
// if current score is greater than end the game
    if(crystal.currentval === crystal.targetval) {
        wins++;
        resetGame();
        showWinModal();
        
    } else if (crystal.currentval > crystal.targetval) {
        losses++;
        resetGame();
        showLoseModal();
    }; 

}

// Show / Hide Instructions

$(document).ready(function () {
    $(function () {
        $("#defaultCheck1").change(function () {
            if ($(this).is(":checked")) {
                $("#instructions").hide();
                $("#instruction-label").html("Show Instructions")
            } else {
                $("#instructions").show();
                $("#instruction-label").html("Hide Instructions")
            }
        });
    });
});

function showWinModal() {   
    $("#myWinModal").modal();
  };

  function showLoseModal() {   
    $("#myLoseModal").modal();
  };

