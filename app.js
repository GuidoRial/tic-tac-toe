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

    cellElement.forEach(cell => {
        cell.addEventListener("click", () => {
            if (_playerXsTurn === true) {
                console.log("hi")
                _playerXsTurn = false;
                _playerOsTurn = true;
            }

            if (cell.innerHTML === "") {
                cell.innerHTML = "X";
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


    function _placeMark () {

    }

    function _checkWin () {

    }

    function _checkDraw () {

    }



    cellElement.forEach(cell => {

    })

    console.log(cellElement);







})();




//document.getElementById("selectMe").innerHTML = "H";

//const targetDiv = event.target.dataset.

