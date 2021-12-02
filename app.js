const ticTacToe = (() => {
    const playerDisplay = document.getElementById("playerTurn");
    const cellElement = document.querySelectorAll("[data-cell]");
    const restartBtn = document.getElementById("restartBtn");
    






    cellZero.innerHTML = ""
    console.log(cellZero.innerHTML);

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

    const _playerX = playerFactory("playerX", true);
    const _playerO = playerFactory("playerO", false);

    console.log (_playerO, _playerX);

    _playerX.switchTurns();
    _playerO.switchTurns();

    console.log (_playerO, _playerX);

    const _swapTurns = function () {
        _playerX.switchTurns();
        _playerO.switchTurns();
    }

    _swapTurns();

    console.log (_playerO, _playerX);

    console.log(_playerX.playerTurn)



    cellElement.forEach(cell => {

        function _restartGame() {

        }




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

            if (cellZero.innerHTML === "X" && cellOne.innerHTML === "X" && cellTwo.innerHTML === "X") {
                playerDisplay.innerHTML = "player X WINS!!!"
            }
        }

        function _playerXTurn () {
            if (cell.innerHTML === "O") {
                return;
            } else {
                cell.innerHTML = "X"
                _swapTurns();
                playerDisplay.innerHTML = "Player O's turn"; //backwards so they fit with hi and bye in the console
            }
        }

        function _playerOTurn () {
            if (cell.innerHTML === "X") {
                return;
            } else {
                cell.innerHTML = "O"
                _swapTurns();
                playerDisplay.innerHTML = "Player X's turn"; //backwards so they fit with hi and bye in the console
            }
        }

        cell.addEventListener("click", () => {

            if (_playerX.playerTurn === true) {
                console.log("hi");
                _playerXTurn();
                return
            } 
            if (_playerO.playerTurn === true) {
                console.log("bye");
                _playerOTurn();
            }
            _checkGame();
        })


    })





    restartBtn.addEventListener("click", () => {
        let associatedCell = e.target.dataset.cellId;
        console.log(`the cell ID is ${associatedCell}`);
    });


})();




//document.getElementById("selectMe").innerHTML = "H";

//const targetDiv = event.target.dataset.

