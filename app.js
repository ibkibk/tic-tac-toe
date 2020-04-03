const onload = () => {
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    let turnCount = 0;
    let moves = {
        X: [],
        O: []
    }

    const checkWinCondition = (movesArray, condition) => {
        return condition.every(function (value) {
            return (movesArray.indexOf(value) >= 0);
        });
    }
    
    const checkWin = (movesArray, winConditions) => {
        for (let condition of winConditions) {
            if (checkWinCondition(movesArray, condition)) return true;
        }
        return false;
    }

    const winMessage = (turn) => {
        $(".result").text(`Player ${turn} wins!`);
        $(".box").off();
    }

    $('.box').on("click", function() {
        const turn = turnCount % 2 === 0 ? "X" : "O";
        $(this).text(turn).css("font-size","120px").css("text-align","center");
        moves[turn].push($(this).index());
        if (checkWin(moves[turn], winConditions)) winMessage(turn);
        turnCount++;
    })
}

$(onload); 







