const ticTacToe = (() => {
    const playerDisplay = document.getElementById("playerTurn");
    const cellElement = document.querySelectorAll("[data-cell]");
    const restartBtn = document.getElementById("restartBtn");
    
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
        })
    })



    function returnCellId(e) {
        let associatedCell = e.target.dataset.cellId;
        console.log(`the cell ID is ${associatedCell}`);
        associatedCell.innerHTML = "X";
        //Place mark
        //Check for win. Puedo checkear con los dataCellId, si 0, 1 y 2.innerHTML = X gana X 
        //Check for Draw
        //Check for Switch turns
    }

    restartBtn.addEventListener("click", () => {

    });




    function _checkWin () {

    }

    function _checkDraw () {

    }



//    cellElement.forEach(cell => {
//        cell.addEventListener("click", () => {
//            if (cell.innerHTML === "") {
//                cell.innerHTML = "X"
//            }
//        })
//    })

//    console.log(cellElement);







})();




//document.getElementById("selectMe").innerHTML = "H";

//const targetDiv = event.target.dataset.

