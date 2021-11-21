const MOVEMENT = {
  FORWARD: "F",
  ROTATE_CLOCKWISE: "R",
  ROTATE_COUNTERCLOCKWISE: "L",
};

// This module is used by the Vecotor class, which in turn
// is used by the headings.js. This exporty needs to be specified as
// module.exports.MOVEMENT vs module.exports = MOVEMENT dude to how
// Node.js is loading the top-level data.
module.exports.MOVEMENT = MOVEMENT;
