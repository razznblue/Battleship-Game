const rows = 10
const cols = 10;
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

export class Board {
    constructor(type, cssClass, parent) {
        this.setType(type, cssClass);
        const gameboard = document.querySelector("." + this.cssClass);
        console.log(gameboard);
        this.drawBoard(gameboard, parent);
    }
    setType(type, cssClass) {
        if (type === "player") {
            this.isPlayerBoard = true;
        } else {
            this.isPlayerBoard = false;
        }
        this.cssClass = cssClass;
    }
    drawBoard(gameboard, parent) {
        // Draw Cells
        for (let i = 1; i < 101; i++) {
            const cell = document.createElement("div");
            cell.classList = "cell " + "cell" + 1;
            gameboard.appendChild(cell);
        }

        // Draw Y-Axis Labels
        let ySpacing = 8;
        let y = 1.5;
        for (let i = 0; i < rows; i++) {
            const yLabel = document.createElement("div");
            yLabel.innerText = i + 1;
            yLabel.classList = "label y-label";
            yLabel.style.top = y + "vh";
            gameboard.appendChild(yLabel);
            y += ySpacing;
        }

        //Draw X-Axis Labels
        let xSpacing = 7;
        let x = 2;
        for (let i = 0; i < cols; i++) {
            const xLabel = document.createElement("div");
            xLabel.innerText = letters[i];
            xLabel.classList = "label x-label";
            xLabel.style.left = x + "vh";
            gameboard.appendChild(xLabel);
            x += xSpacing;
        }

        parent.appendChild(gameboard);
        console.log(parent)
    }
}