import {
    _Howl as Howl
} from "./howler.js";

let counter = 10;
let interval;
var sound = new Howl({
    src: ['../mp3/end.mp3']
});
const incTimer = () => {
    counter++;
    refresh();
}
const decTimer = () => {
    if (counter > 0) counter--;
    refresh();
}

const refresh = () => {
    const targ = document.getElementById('counter');
    targ.textContent = counter;
}

const startTimer = () => {
    interval = setInterval(() => {
        if (counter) {
            counter--;
        } else {
            clearInterval(interval);
            sound.play();
        }
        refresh();
    }, 1000);
}

const stopTimer = () => {
    clearInterval(interval);
    sound.play();
}


const timer = () => {
    document.getElementById('startTimer').addEventListener('click', startTimer);
    document.getElementById('stopTimer').addEventListener('click', stopTimer);
    document.getElementById('incTimer').addEventListener('click', incTimer);
    document.getElementById('decTimer').addEventListener('click', decTimer);
}

export default timer;