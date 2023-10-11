var numSelected = null;

var titleSelected = null;

var errors = 0;

var board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

var solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

window.onload = function () {
  setGame();
};

function setGame() {
  // Digits 1-9
  for (let i = 1; i <= 9; i++) {
    // <div id="i" class="number">i</div>

    let number = document.createElement("div");

    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }

  for (let r = 0; r < 9; r++) {
    for (let x = 0; x < 9; x++) {
      let tile = document.createElement("div");

      tile.id = r.toString() + "-" + x.toString();
      if (board[r][x] != "-") {
        tile.innerText = board[r][x];
        tile.classList.add("tile-start");
      }

      if (r == 2 || r == 5) {
        tile.classList.add("horizental-line");
      }

      if (x == 2 || x == 5) {
        tile.classList.add("vertival-line");
      }

      tile.addEventListener("click", selectedTile);
      //   tile.innerText = board[r][x];
      tile.classList.add("tile");
      document.getElementById("board").appendChild(tile);
    }
  }
}

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}

function selectedTile() {
  if (numSelected) {
    if (this.innerText != "") {
      return;
    }
    // this.innerText = numSelected.id;

    // "0-0" "0-1" ...
    let coords = this.id.split('-');//["0","0"]
    let r = parseInt(coords[0]);
    let x = parseInt(coords[1]);

    if (solution[r][x] == numSelected.id) {
        this.innerText = numSelected.id;
    } else {
        errors += 1;
        document.getElementById('errors').innerText = errors
    }
  }
}
