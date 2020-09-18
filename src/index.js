const generateGrid = require("./gridLogic");
const robotsData = [
  {
    posStr: { x: 1, y: 1, o: "E" },
    insStr: "RFRFRFRF",
  },
  {
    posStr: { x: 3, y: 2, o: "N" },
    insStr: "FRRFLLFFRRFLL",
  },
  {
    posStr: { x: 0, y: 3, o: "W" },
    insStr: "LLFFFLFLFL",
  },
];

const robotGrid = generateGrid();
console.log(robotGrid({ x: 5, y: 3 }, robotsData));
