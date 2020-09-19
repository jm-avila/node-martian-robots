function formatOutput(output) {
  return output
    .map(({ x, y, o, lost }) => {
      let text = `${x} ${y} ${o}`;
      if (lost) {
        text = text + " LOST";
      }
      return text;
    })
    .join("\n");
}

module.exports = formatOutput;
