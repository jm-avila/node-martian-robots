const {
  generateState,
  setGridUpperRightCoordinates,
  setInitialPosition,
  formatResult,
} = require("../../src/grid/helpers");
const {
  validOrientations: { E, W },
} = require("../../src/grid/validValues");

describe("Output Test for generateState function", () => {
  it("evaluates the return value for generateState", () => {
    const state = generateState();
    const expectedOutput = {
      grid: {
        x: null,
        y: null,
      },
      currentPosition: {
        x: null,
        y: null,
        o: null,
      },
      lostRobotsCoordinates: [],
      lost: false,
    };

    expect(state).toMatchObject(expectedOutput);
  });
});

describe("Input-Output Test for setGridUpperRightCoordinates", () => {
  it("given an object with an x and y property, and the state object. setGridUpperRightCoordinates sets in states object at the grid property, the x and y properties to the corresponding values.", () => {
    const upperRightCoordinates = {
      x: 10,
      y: 10,
    };

    const state = generateState();

    setGridUpperRightCoordinates(state, upperRightCoordinates);

    expect(state.grid).toMatchObject(upperRightCoordinates);
  });

  it("given an object with an x, y and z properties, and the state object. setGridUpperRightCoordinates sets in states object at the grid property, the x and y properties to the corresponding values and ignores the z value.", () => {
    const upperRightCoordinates = {
      x: 10,
      y: 10,
      z: 100,
    };

    const state = generateState();

    setGridUpperRightCoordinates(state, upperRightCoordinates);

    expect(state.grid).not.toMatchObject(upperRightCoordinates);
    delete upperRightCoordinates.z;
    expect(state.grid).toMatchObject(upperRightCoordinates);
  });
});

describe("Input-Output Test for setInitialPosition", () => {
  it("given a state object with previously setted values for the currentPosition and lost properties, setInitialPosition will update the currentPosition value to that passed as the initialCoordinates arguments and the lost value to false. ", () => {
    const initialCoordinates = {
      x: 10,
      y: 10,
    };

    const state = generateState();
    state.currentPosition = {
      x: 5,
      y: 5,
      o: E,
    };
    state.lost = true;

    setInitialPosition(state, initialCoordinates);

    expect(state.currentPosition).toMatchObject(initialCoordinates);
    expect(state.lost).toBe(false);
  });
});

describe("Input-Output Test for formatResult", () => {
  it("given a state object with values setted for the currentPosition and lost properties, the formatResult function returns a new object with such values.", () => {
    const state = generateState();
    state.currentPosition = {
      x: 0,
      y: 0,
      o: W,
    };
    state.lost = false;

    const formatedResult = formatResult(state);

    const expectedOutput = {
      x: 0,
      y: 0,
      o: W,
      lost: false,
    };
    expect(formatedResult).toMatchObject(expectedOutput);
  });
});
