const grid = require("./grid");
const robotsData = [
  {
    posStr: { x: 1, y: 1, o: "E" },
    instStr: "RFRFRFRF",
  },
  {
    posStr: { x: 3, y: 2, o: "N" },
    instStr: "FRRFLLFFRRFLL",
  },
  {
    posStr: { x: 0, y: 3, o: "W" },
    instStr: "LLFFFLFLFL",
  },
];

console.log(grid({ x: 5, y: 3 }, robotsData));
