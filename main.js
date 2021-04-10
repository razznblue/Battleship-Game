import { Game } from "./scripts/modules/game.js";

const splashScreen = document.querySelector("#splash-screen");
const startBtn = document.querySelector(".start-btn");

const app = {
  init() {
    this.addEventListeners();
  },

  addEventListeners() {
    startBtn.addEventListener("click", () => {
      const radios = document.querySelectorAll(".game-type");
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          //prettier-ignore
          if (confirm("This will start a " + radios[i].value + " game. Continue?")) {
            this.createGame(radios[i].value);
            break;
          } else {
            break;
          }
        }
      }
    });
  },

  createGame(choice) {
    const game = new Game(choice);
    splashScreen.parentNode.removeChild(splashScreen);
    this.returnOverflow();
  },

  returnOverflow() {
    const body = document.getElementsByTagName("BODY")[0];
    body.style.overflow = "scroll";
  },
};

app.init();
