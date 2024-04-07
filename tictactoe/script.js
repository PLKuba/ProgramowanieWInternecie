let origBoard;
let gameMode = 'human'; // Default game mode
const huPlayer = 'O';
const aiPlayer = 'X';
let currentPlayer = huPlayer; // This sets the starting player to 'O' by default.
let gameOverCalled = false;
let scoreO = 0;
let scoreX = 0;


const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

const cells = document.querySelectorAll('.cell');

// When the document is ready, initialize the scoreboard for the first time
document.addEventListener('DOMContentLoaded', function() {
    initializeScoreboard();
    startGame('human'); // Start the game in the default mode
});

// Call this function when the page loads and when the game mode changes
function initializeScoreboard() {
    scoreO = 0;
    scoreX = 0;
    updateScoreDisplay();
}

// Call this function to increment the score
function incrementScore(winner) {
    if (winner === huPlayer) {
        scoreO++;
    } else if (winner === aiPlayer) {
        scoreX++;
    }
    updateScoreDisplay();
}

// Update the scoreboard display
function updateScoreDisplay() {
    document.getElementById('score-o').textContent = scoreO;
    document.getElementById('score-x').textContent = scoreX;
}

function startGame(mode = 'human') {
    gameMode = mode; // Store the selected game mode
    currentPlayer = huPlayer; // Reset to human player at the start of each game

    // If the game mode changes, reset the scores
    if (gameMode !== mode) {
        gameMode = mode;
        initializeScoreboard(); // Reset the scores
    }

    updateGameModeDisplay(mode); // Update the display


    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    for (let element of cells) {
        element.innerText = '';
        element.style.removeProperty('background-color');
        element.addEventListener('click', turnClick, false);
    }

    if (gameMode !== 'human') {
        // AI player
        for (let element of cells) {
            element.removeEventListener('click', turnClick, false);
            element.addEventListener('click', turnClickVsComputer, false);
        }
    } else {
        // Human player
        for (let element of cells) {
            element.removeEventListener('click', turnClickVsComputer, false);
            element.addEventListener('click', turnClick, false);
        }
    }

    // Reset scores when game mode changes
    if (gameMode !== mode) {
        gameMode = mode;
        scoreO = 0;
        scoreX = 0;
        updateScores();
    }
    gameOverCalled = false;
}

function turnClick(square) {
    if (typeof origBoard[square.target.id] == 'number') {
        turn(square.target.id, currentPlayer);
        currentPlayer = (currentPlayer === huPlayer) ? aiPlayer : huPlayer; // Toggle between players
        checkTie();
    }
}

function bestSpot() {
    // Choose the best spot based on the game mode
    if (gameMode === 'easy') {
        return emptySquares()[0];
    } else if (gameMode === 'hard') {
        return minimax(origBoard, aiPlayer).index;
    }
    // If 'human', this function should not be called, but just in case:
    throw new Error('No AI needed for human vs. human mode.');
}

function turnClickVsComputer(square) {
    if (typeof origBoard[square.target.id] == 'number') {
        turn(square.target.id, huPlayer);
        if (!checkWin(origBoard, huPlayer) && !checkTie()) {
            turn(bestSpot(), aiPlayer);
        }
    }
}

function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;

    let gameWon = checkWin(origBoard, player);
    if (gameWon) {
        gameOver(gameWon);
    } else if (checkTie()) { // Check for tie only if there's no win
        gameOver(null); // Pass null to gameOver to signify there was no winner
    }
}

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = { index: index, player: player };
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon) {
    if (gameWon) {
        for (let index of winCombos[gameWon.index]) {
            document.getElementById(index).style.backgroundColor =
                gameWon.player === huPlayer ? "blue" : "red";
        }
        for (let element of cells) {
            element.removeEventListener('click', turnClick, false);
        }
        declareWinner(gameWon.player === huPlayer ? "You win!" : "Computer wins!");
        incrementScore(gameWon.player); // Increment score only if there's a winner
    }

    // Proceed with resetting the game after 3 seconds regardless of win or tie
    setTimeout(function() {
        document.querySelector('.endgame').style.display = 'none'; // Hide the banner
        startGame(gameMode); // Reset the board for a new game
    }, 3000);
}

function emptySquares() {
    return origBoard.filter(s => typeof s == 'number');
}

function checkTie() {
    if (emptySquares().length === 0) {
        for (let element of cells) {
            element.style.backgroundColor = "green";
            element.removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game!");
        return true;
    }
    return false;
}

function declareWinner(who) {
    const endgame = document.querySelector('.endgame');
    const textElement = document.querySelector('.endgame .text');

    textElement.innerText = who;
    endgame.style.display = 'block'; // Show the banner

    // Set a timeout to hide the banner after 3000 milliseconds (3 seconds)
    setTimeout(function() {
        endgame.style.display = 'none';
    }, 2000);
}

function minimax(newBoard, player) {
    let availSpots = emptySquares();

    if (checkWin(newBoard, huPlayer)) {
        return { score: -10 };
    } else if (checkWin(newBoard, aiPlayer)) {
        return { score: 10 };
    } else if (availSpots.length === 0) {
        return { score: 0 };
    }
    let moves = [];
    for (const element of availSpots) {
        let move = {};
        move.index = newBoard[element];
        newBoard[element] = player;

        if (player == aiPlayer) {
            let result = minimax(newBoard, huPlayer);
            move.score = result.score;
        } else {
            let result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }

        newBoard[element] = move.index;

        moves.push(move);
    }

    let bestMove;
    if (player === aiPlayer) {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}

function updateGameModeDisplay(mode) {
    const modeDisplay = document.getElementById('gameModeDisplay');
    let modeText = 'Current Mode: ';
    switch (mode) {
        case 'easy':
            modeText += 'Easy Bot';
            break;
        case 'hard':
            modeText += 'Hard Bot';
            break;
        case 'human':
            modeText += 'Another Player';
            break;
        default:
            modeText += 'Unknown';
    }
    modeDisplay.textContent = modeText;
}

// Function to update scores on the scoreboard
function updateScores() {
    document.getElementById('score-o').textContent = scoreO;
    document.getElementById('score-x').textContent = scoreX;
}

function resetScoreboard() {
    // Reset the scores
    scoreO = 0;
    scoreX = 0;

    // Update the display
    updateScoreDisplay();

    // Optional: Restart the game if you want a fresh start after score reset
    startGame(gameMode);
}