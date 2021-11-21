const Vector = require("../Vector");

const HEADINGS = {
  N: new Vector({ x: 0, y: 1 }),
  E: new Vector({ x: 1, y: 0 }),
  S: new Vector({ x: 0, y: -1 }),
  W: new Vector({ x: -1, y: 0 }),
};

const getHeadingLabel = (vec) => {
  for (const [label, heading] of Object.entries(HEADINGS)) {
    if (heading.x === vec.x && heading.y === vec.y) {
      return label;
    }
  }
};

module.exports = { HEADINGS, getHeadingLabel };
