import players from "../assets/kart-*.png";
import { KartPlayer } from "./KartPlayer.js";

const botonStart = document.querySelector(".start");
const botonRestart = document.querySelector(".restart");
const road = document.querySelector(".road");
const karts = [];

for (const [name, image] of Object.entries(players)) {
    const config = {
        image,
        y = karts.length * 64
    };
    const kart = new KartPlayer(name, config);
    kart.addToRoad(road);
    karts.push(kart);
};

const startRace = () => {
    timer = setInterval(() => startIteration()), 1000 / 60);
botonStart.disabled = true;
botonRestart.disabled = true;
};

const endRace = () => {
    clearInterval(timer);
    karts.forEach(kart => (kart.isWinner() ? kart.win() : kart.lose()));
    botonRestart.disabled = false;
};

const restartRace = () => {
    karts.forEach(kart => kart.restart());
    botonStart.disabled = false;
};

const startIteration = () => {
    karts.forEach(kart => kart.inc());
    if (karts.some(kart => kart.isWinner())) endRace();
};

botonStart.onclick = () => startRace();
botonRestart.onclick = () => restartRace();