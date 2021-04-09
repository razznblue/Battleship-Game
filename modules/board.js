import { Cell } from "./cell.js";

const rows = 10;
const cols = 10;

// <-- Variable Guide -->
//    type - Refers to if the board is for a player or computer
//    cssType - A helper variable for the DOM to cedice which board to select and draw
//    canvas - Refers to the canvas object passed in from main
//    board_array - An 2-D array passed in representing the board with ships placed

export class Board {
  constructor(type, canvas, board_array) {
    this.cells = [];
    this.setBoardTypes(type);
    const gameboard = document.querySelector("." + this.cssClass);
    this.drawBoard(gameboard, canvas);
  }
  setBoardTypes(type) {
    if (type === "player") {
      this.isPlayerBoard = true;
      this.cssClass = "player-board";
    } else {
      this.isPlayerBoard = false;
      this.cssClass = "computer-board";
    }
  }

  createRow(board, rowNumber) {
    const row = document.createElement("div");
    row.classList = "row " + "row" + rowNumber;
    board.appendChild(row);
    return row;
  }

  drawBoard(gameboard, canvas) {
    //const cellCount = rows * cols;
    let count = 1;
    for (let i = 1; i < rows + 1; i++) {
      const row = this.createRow(gameboard, i);
      for (let j = 1; j < cols + 1; j++) {
        const cell = new Cell(gameboard, row, count, this);
        this.cells.push(cell);
        count++;
      }
    }

    canvas.appendChild(gameboard);
  }
}
