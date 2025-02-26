let audioCtx = new AudioContext(); 
let oscillator = audioCtx.createOscillator();
let gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.type = "sine";
oscillator.frequency = 440;
gainNode.gain.value = 0;

oscillator.start();

const startOscillator = function() {
    gainNode.gain.value = 0;
}

const stopOscillator = function() {
    gainNode.gain.value = 0;
}

document.getElementByID("startButton").addEventListener("click", startOscillator);

document.getElementById("stopButton").addEventListener("click", stopOscillator);

oscillator.start();

