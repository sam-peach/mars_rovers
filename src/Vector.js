const { MOVEMENT } = require("./utils/movement");

class Vector {
  // This class could have easily been a library but
  // I figured you'd much perfer to see what I could
  // come up with on my own!

  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }

  static add(vec1, vec2) {
    return new Vector({ x: vec1.x + vec2.x, y: vec1.y + vec2.y });
  }

  static rotate90Degrees(vec, direction) {
    const rotatedVec =
      direction === MOVEMENT.ROTATE_CLOCKWISE
        ? { x: vec.y, y: -vec.x }
        : { x: -vec.y, y: vec.x };

    return new Vector(rotatedVec);
  }
}

module.exports = Vector;
