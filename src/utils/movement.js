const MOVEMENT = {
  FORWARD: "F",
  ROTATE_CLOCKWISE: "R",
  ROTATE_COUNTERCLOCKWISE: "L",
};

// This module is used by the Vector class, which in turn
// is used by headings.js. This export needs to be specified as
// module.exports.MOVEMENT vs. module.exports = MOVEMENT due to how
// Node.js loads the top-level data.
module.exports.MOVEMENT = MOVEMENT;
