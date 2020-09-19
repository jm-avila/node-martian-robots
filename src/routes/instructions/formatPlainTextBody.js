module.exports = function formatTextBody(str) {
  const inputsArray = str.split("\n").map((item) => item.split(" "));

  const gridFormatedInput = inputsArray.reduce(
    (formatedInput, instruction, i) => {
      if (!formatedInput.gridUpperLimit) {
        formatedInput.gridUpperLimit = {
          x: +instruction[0],
          y: +instruction[1],
        };
      } else if (i && i % 2 !== 0) {
        formatedInput.robotsData.push({
          posStr: {
            x: +instruction[0],
            y: +instruction[1],
            o: instruction[2],
          },
          instStr: null,
        });
      } else {
        formatedInput.robotsData[i / 2 - 1].instStr = instruction[0];
      }
      return formatedInput;
    },
    { gridUpperLimit: null, robotsData: [] }
  );

  return gridFormatedInput;
};
