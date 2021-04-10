const canvas = document.querySelector(".canvas");

export class Ship {
  constructor(size) {
    this.size = size;
    this.cells = [];
  }

  addToCell(cell) {
    if (!this.cells.includes(cell)) {
      this.cells.push(cell);
    }
  }
}
