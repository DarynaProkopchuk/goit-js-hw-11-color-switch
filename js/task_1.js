const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];



const generateRandomColor = {
  isActive: false,
  intervalId: null,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(function () {
                 const randomIntegerFromInterval = (min, max) => {
                     return Math.floor(Math.random() * (max - min + 1) + min);
                 };
                 let selectedcolor = colors[randomIntegerFromInterval(0, colors.length - 1)];
                 document.body.style.background = selectedcolor
             }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
  },
};

startBtnRef.addEventListener(
  'click',
  generateRandomColor.start.bind(generateRandomColor),
);
stopBtnRef.addEventListener(
  'click',
  generateRandomColor.stop.bind(generateRandomColor),
);

// startBtnRef.addEventListener('click', changeBackground.start.bind(changeBackground));
// stopBtnRef.addEventListener('click', changeBackground.stop.bind(changeBackground));
 

console.log(generateRandomColor);
