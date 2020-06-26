//здесь наше представление 
var view = {
    dispayMessage: function(msg) {
        var messageArea = document.querySelector('#messageArea');
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");

    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};


//Здесь наша модель поведения игры

var model = {
    boardSize: 7, // размер игрового поля
    numShip: 3, //колво кораблей
    shipLength: 3, //длинна корабля в клетках
    shipsSunk: 0, // колво потопленных кораблей

    ships: [
        ship1 = { location: ['10', '20', '30'], hits: ['', '', ''] },
        ship2 = { location: ['32', '33', '34'], hits: ['', '', ''] },
        ship3 = { location: ['63', '64', '65'], hits: ['', '', ''] }

    ],

    fire: function(guess) { //получает координаты выстрела
        for (var i = 0; i < this.numShip; i++) {
            var ship = this.ships[i];
            var index = ship.location.indexOf(guess);
            if (index >= 0) {
                //есть попадание
                ship.hits[index] = 'hit';
                view.displayHit(guess);
                view.dispayMessage("HIT!!!")
                if (this.isSunk(ship)) {
                    view.dispayMessage("You sank my battleship!");

                    this.shipsSunk++;

                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.dispayMessage("You missed");
        return false;
    },

    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {

            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }


};

var controller = {
    gusses: 0,

    processGuess: function(guess) {


    }

}

function parceGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("Вы ввели неверные координаты");
    } else {
        var firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Вы ввели неверные координаты");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Вы ввели неверные координаты");
        } else {
            return row + column;
        }
    }
    return null;
}

console.log(parceGuess("A0"));
console.log(parceGuess("B6"));
console.log(parceGuess("G3"));
console.log(parceGuess("H3"));
console.log(parceGuess("A7"));

// model.fire("23");
// model.fire("32");
// model.fire("25");
// model.fire("65");
// model.fire("43");