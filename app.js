//Module for the entire game

const ticTacToe = (() => {
    const playerDisplay = document.getElementById("playerTurn");
    const cellElement = document.querySelectorAll("[data-cell]");
    const restartBtn = document.getElementById("restartBtn");

    //Factory Function that returns the players with the method to change their turn status

    const playerFactory = (name, playerTurn) => {
        const switchTurns = function () {
            if (this.playerTurn === true) {
                this.playerTurn = false;
            } else if (this.playerTurn === false) {
                this.playerTurn = true
            }
        }
        return { name, playerTurn, switchTurns };
    }


    //Creating both players
    const _playerX = playerFactory("playerX", true);
    const _playerO = playerFactory("playerO", false);


    //Function that switch both turn status at the same time
    const _swapTurns = function () {
        _playerX.switchTurns();
        _playerO.switchTurns();
    }

    //Function to go back to the default configuration
    function _restartGame() {
        playerDisplay.innerHTML = "Player X's turn"
        cellElement.forEach(cell => {
            cell.innerHTML = ""
        });
        _playerX.playerTurn = true;
        _playerO.playerTurn = false;
    }

    cellElement.forEach(cell => {
        //Function that checks who won
        function _checkGame () {
            const cellZero = document.getElementById("cellZero");
            const cellOne = document.getElementById("cellOne");
            const cellTwo = document.getElementById("cellTwo");
            const cellThree = document.getElementById("cellThree");
            const cellFour = document.getElementById("cellFour");
            const cellFive = document.getElementById("cellFive");
            const cellSix = document.getElementById("cellSix");
            const cellSeven = document.getElementById("cellSeven");
            const cellEight = document.getElementById("cellEight");

            if ((cellZero.innerHTML === "X" && cellOne.innerHTML === "X" && cellTwo.innerHTML === "X") || (cellThree.innerHTML === "X" && cellFour.innerHTML === "X" && cellFive.innerHTML === "X") || (cellSix.innerHTML === "X" && cellSeven.innerHTML === "X" && cellEight.innerHTML === "X") || (cellZero.innerHTML === "X" && cellThree.innerHTML === "X" && cellSix.innerHTML === "X") || (cellOne.innerHTML === "X" && cellFour.innerHTML === "X" && cellSeven.innerHTML === "X") || (cellTwo.innerHTML === "X" && cellFive.innerHTML === "X" && cellEight.innerHTML === "X") || (cellZero.innerHTML === "X" && cellFour.innerHTML === "X" && cellEight.innerHTML === "X") || (cellTwo.innerHTML === "X" && cellFour.innerHTML === "X" && cellSix.innerHTML === "X")) {
                playerDisplay.innerHTML = "player X WINS!!!";
                return;
            } else if ((cellZero.innerHTML === "O" && cellOne.innerHTML === "O" && cellTwo.innerHTML === "O") || (cellThree.innerHTML === "O" && cellFour.innerHTML === "O" && cellFive.innerHTML === "O") || (cellSix.innerHTML === "O" && cellSeven.innerHTML === "O" && cellEight.innerHTML === "O") || (cellZero.innerHTML === "O" && cellThree.innerHTML === "O" && cellSix.innerHTML === "O") || (cellOne.innerHTML === "O" && cellFour.innerHTML === "O" && cellSeven.innerHTML === "O") || (cellTwo.innerHTML === "O" && cellFive.innerHTML === "O" && cellEight.innerHTML === "O") || (cellZero.innerHTML === "O" && cellFour.innerHTML === "O" && cellEight.innerHTML === "O") || (cellTwo.innerHTML === "O" && cellFour.innerHTML === "O" && cellSix.innerHTML === "O")) {
                playerDisplay.innerHTML = "player O WINS!!!";
                return;
            } else if (cellZero.innerHTML != "" && cellOne.innerHTML != "" && cellTwo.innerHTML != "" && cellThree.innerHTML != "" && cellFour.innerHTML != "" && cellFive.innerHTML != "" && cellSix.innerHTML != "" && cellSeven.innerHTML != "" && cellEight.innerHTML != "") {
                playerDisplay.innerHTML = "It's a TIE!!!"
            } 
        }

        //The logic behind each turn
        function _playerXTurn () {
            if (cell.innerHTML === "O" || cell.innerHTML === "X") {
                return;
            } else if (playerDisplay.innerHTML === "player X WINS!!!" || playerDisplay.innerHTML === "player O WINS!!!" || playerDisplay.innerHTML === "It's a TIE!!!") {
                return;
            } else {
                cell.innerHTML = "X"
                _swapTurns();
                playerDisplay.innerHTML = "Player O's turn"; //They change to display the next player's turn
            }
        }

        function _playerOTurn () {
            if (cell.innerHTML === "X" || cell.innerHTML === "O") {
                return;
            } else if (playerDisplay.innerHTML === "player X WINS!!!" || playerDisplay.innerHTML === "player O WINS!!!" || playerDisplay.innerHTML === "It's a TIE!!!") {
                return;
            } else {
                cell.innerHTML = "O"
                _swapTurns();
                playerDisplay.innerHTML = "Player X's turn"; //They change to display the next player's turn
            }
        }

        //Logic behind the entire game
        function _theGame () {
            if (_playerX.playerTurn === true) {
                _playerXTurn();
                _checkGame();
                return
            } 
            if (_playerO.playerTurn === true) {
                _playerOTurn();
                _checkGame();
                return;
            }
        }

        cell.addEventListener("click", _theGame);
    })

    restartBtn.addEventListener("click", _restartGame)
})();