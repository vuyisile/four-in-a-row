const winningCombinations = [
    ['block1', 'block2', 'block3', 'block4'],
    ['block7', 'block8', 'block9', 'block10'],
    ['block13', 'block14', 'block15', 'block16'],
    ['block19', 'block20', 'block21', 'block22'],
    ['block25', 'block26', 'block27', 'block28'],
    ['block31', 'block32', 'block33', 'block34'],
    ['block37', 'block38', 'block39', 'block40'],
    ['block2', 'block3', 'block4', 'block5'],
    ['block8', 'block9', 'block10', 'block11'],
    ['block14', 'block15', 'block16', 'block17'],
    ['block20', 'block21', 'block22', 'block23'],
    ['block26', 'block27', 'block28', 'block29'],
    ['block32', 'block33', 'block34', 'block35'],
    ['block38', 'block39', 'block40', 'block41'],
    ['block3', 'block4', 'block5', 'block6'],
    ['block9', 'block10', 'block11', 'block12'],
    ['block15', 'block16', 'block17', 'block18'],
    ['block21', 'block22', 'block23', 'block24'],
    ['block27', 'block28', 'block29', 'block30'],
    ['block33', 'block34', 'block35', 'block36'],
    ['block39', 'block40', 'block41', 'block42'],
    ['block1', 'block7', 'block13', 'block19'],
    ['block7', 'block13', 'block19', 'block25'],
    ['block13', 'block19', 'block25', 'block31'],
    ['block19', 'block25', 'block31', 'block37'],
    ['block2', 'block8', 'block14', 'block20'],
    ['block8', 'block14', 'block20', 'block26'],
    ['block14', 'block20', 'block26', 'block32'],
    ['block20', 'block26', 'block32', 'block38'],
    ['block3', 'block9', 'block15', 'block21'],
    ['block9', 'block15', 'block21', 'block27'],
    ['block15', 'block21', 'block27', 'block33'],
    ['block21', 'block27', 'block33', 'block39'],
    ['block4', 'block10', 'block16', 'block22'],
    ['block10', 'block16', 'block22', 'block28'],
    ['block16', 'block22', 'block28', 'block34'],
    ['block22', 'block28', 'block34', 'block40'],
    ['block5', 'block11', 'block17', 'block23'],
    ['block11', 'block17', 'block23', 'block29'],
    ['block17', 'block23', 'block29', 'block35'],
    ['block23', 'block29', 'block35', 'block41'],
    ['block6', 'block12', 'block18', 'block24'],
    ['block12', 'block18', 'block24', 'block30'],
    ['block18', 'block24', 'block30', 'block36'],
    ['block24', 'block30', 'block36', 'block42'],
    ['block4', 'block9', 'block14', 'block19'],
    ['block5', 'block10', 'block15', 'block20'],
    ['block10', 'block15', 'block20', 'block25'],
    ['block6', 'block11', 'block16', 'block21'],
    ['block11', 'block16', 'block21', 'block26'],
    ['block16', 'block21', 'block26', 'block31'],
    ['block12', 'block17', 'block22', 'block27'],
    ['block17', 'block22', 'block27', 'block32'],
    ['block22', 'block27', 'block32', 'block37'],
    ['block18', 'block23', 'block28', 'block33'],
    ['block23', 'block28', 'block33', 'block38'],
    ['block24', 'block29', 'block34', 'block39'],
    ['block3', 'block10', 'block17', 'block24'],
    ['block2', 'block9', 'block16', 'block23'],
    ['block9', 'block16', 'block23', 'block30'],
    ['block1', 'block8', 'block15', 'block22'],
    ['block8', 'block15', 'block22', 'block29'],
    ['block15', 'block22', 'block29', 'block36'],
    ['block7', 'block14', 'block21', 'block28'],
    ['block14', 'block21', 'block28', 'block35'],
    ['block21', 'block28', 'block35', 'block42'],
    ['block13', 'block20', 'block27', 'block34'],
    ['block20', 'block27', 'block34', 'block41'],
    ['block19', 'block26', 'block33', 'block40'],
]

const cols = [
    ['block1', 'block7', 'block13', 'block19', 'block25', 'block31', 'block37'],
    ['block2', 'block8', 'block14', 'block20', 'block26', 'block32', 'block38'],
    ['block3', 'block9', 'block15', 'block21', 'block27', 'block33', 'block39'],
    ['block4', 'block10', 'block16', 'block22', 'block28', 'block34', 'block40'],
    ['block5', 'block11', 'block17', 'block23', 'block29', 'block35', 'block41'],
    ['block6', 'block12', 'block18', 'block24', 'block30', 'block36', 'block42']
]
// var time = document.getElementById("time");
const findFourInARow = (playerMoves) => {
    var result = []
    for (let i = 0; i < winningCombinations.length; i++) {
        var currentCombo = winningCombinations[i];
        var search = playerMoves.filter(val => currentCombo.indexOf(val) > -1)
        if (JSON.stringify(search) === JSON.stringify(currentCombo)) {
            result = currentCombo
        }
    }
    return result.length === 4 ? result : false
}
let currentCols = [...cols]
var thisInterval = null;
var playerActive = "p1";
var p1Moves = [];
var p2Moves = [];
const createBoard = () => {
    var blocksContainer = document.getElementById('container')
    for (let i = 1; i <= 42; i++) {
        blocksContainer.innerHTML += `<div id="block${i}" onclick="makeMove('block${i}')"></div>`;
    }
    run()

}

const makeMove = (id) => {
    if (document.getElementById("pausePlay").value === "Play") {
        return
    }
    var block = id.toString()
    var color = null
    var currentPlayer = playerActive
    if (playerActive.match("p1") && p2Moves.findIndex(val => val === block) < 0) {
        playerActive = "p2";
        color = "yellow";
    } else if (playerActive.match("p2") && p1Moves.findIndex(val => val === block) < 0) {
        playerActive = "p1";
        color = "green";
    }
    document.getElementById("player").innerText = `${playerActive}'s turn`
    currentCols = markMoves(currentPlayer, block, color)
}


const markMoves = (player, id, color) => {
    for (let i = 0; i < currentCols.length; i++) {
        if (currentCols[i].findIndex(val => val === id) > -1) {
            var last = currentCols[i].length - 1;
            var block = currentCols[i][last]
            document.getElementById(block).style.background = color;
            currentCols[i].pop();
            player.match("p1") ? p1Moves = [...p1Moves, block] : p2Moves = [...p2Moves, block];
        }
    }
    return currentCols
}


var run = () => {
    document.getElementById("player").innerText = `${playerActive}'s turn`
    document.getElementById("confirm").innerText= "Game Running";

    thisInterval = setInterval(() => {
        var checkP1 = findFourInARow(p1Moves.sort())
        var checkP2 = findFourInARow(p2Moves.sort())
        timer();
        if (checkP1 == false && checkP2 == false) {
            console.log("Both false: \ncheck-p1-: ", checkP1, "\ncheck-p2", checkP2)
        } else {
            console.log("One true: \ncheck-p1: ", checkP1, "\ncheck-p2", checkP2)
            var confirm = checkP1 !== false ? "Player 1 Won!!" : "Player 2 Won!!"
            document.getElementById("confirm").innerText= confirm;
            clearInterval(thisInterval)
        }

    }, 1000)
}



const timer = () => {
    var min = document.getElementById("min").innerText
    var sec = document.getElementById("secs").innerText
    if (parseInt(sec) === 59) {
        var m = parseInt(min) + 1
        document.getElementById("min").innerText = m < 10 ? "0" + m : m
        document.getElementById("secs").innerText = "00"
    } else {
        var s = parseInt(sec) + 1
        document.getElementById("secs").innerText = s < 10 ? "0" + s : s
    }
}


const pauseOrPlay = (e) => {
    if (e.target.value === "Pause") {
        clearInterval(thisInterval)
        document.getElementById("pausePlay").value = "Play"
        document.getElementById("confirm").innerText= "Game Paused";

    } else {
        run()
        document.getElementById("pausePlay").value = "Pause"
        document.getElementById("confirm").innerText= "Game Running";
    }
}

addEventListener("load", createBoard);