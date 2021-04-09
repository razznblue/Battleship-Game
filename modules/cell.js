//prettier-ignore
const labeledCells = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "21", "31", "41", "51", "61", "71", "81", "91"];
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let lettersIterator = 0;

export class Cell {
  constructor(gameboard, number, parentBoard) {
    this.empty = true;
    this.gameboard = gameboard;
    this.cellNumber = number.toString();
    this.createCellhtmlElement(this.cellNumber);
    if (this.finishedDrawingCells(parentBoard)) {
      lettersIterator = 0;
    }
  }

  createCellhtmlElement(cellNumber) {
    this.htmlCell = document.createElement("div");
    this.htmlCell.classList = "cell " + "cell" + cellNumber;
    this.addLabelCheck(this.htmlCell, cellNumber);
    this.gameboard.appendChild(this.htmlCell);
  }
  addLabelCheck(htmlCell, cellNumber) {
    if (labeledCells.includes(cellNumber)) {
      htmlCell.style.position = "relative";
      const label = document.createElement("div");
      if (cellNumber < 11) {
        this.createNumberLabel(htmlCell, cellNumber, label);
      } else if (cellNumber >= 10) {
        this.createTextLabel(htmlCell, cellNumber, label);
      }
    }
  }
  createNumberLabel(htmlCell, cellNumber, label) {
    if (cellNumber === "1") {
      const label2 = document.createElement("div");
      this.createTextLabel(htmlCell, cellNumber, label2);
    }
    label.innerText = cellNumber;
    label.classList = "label " + "number-label";
    htmlCell.appendChild(label);
  }
  createTextLabel(htmlCell, cellNumber, label) {
    if (cellNumber === "1") {
      label.innerText = letters[lettersIterator];
    } else {
      label.innerText = letters[lettersIterator + 1];
      lettersIterator++;
    }
    label.classList = "label  " + "text-label";
    htmlCell.appendChild(label);
  }

  finishedDrawingCells(board) {
    if (board.cells.length > 98) {
      return true;
    } else {
      return false;
    }
  }

  //   GAME LOGIC
  setAsOccupied() {
    this.empty = false;
  }
  setAsUnoccupied() {
    this.empty = true;
  }
  isOccupied() {
    if (!this.empty) {
      return true;
    } else {
      return false;
    }
  }
}
