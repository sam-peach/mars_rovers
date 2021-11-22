const { getHeadingLabel } = require("./utils");
const Vector = require("./Vector");

class Rover {
  // I wanted this rover class to be ignorant of what's happening
  // in the CommandCenter. Much like any good robot, it should do
  // what it's told via a simple interface.

  constructor(position, heading) {
    this.position = position;
    this.heading = heading;
  }

  reportStatus() {
    const position = `${this.position.x}, ${this.position.y}`;

    // Seeing as we only need the heading in a human-readable
    // form once we report the status, it makes sense to me
    // to only calculate the heading label once needed.
    const heading = `${getHeadingLabel(this.heading)}`;

    return `(${position}, ${heading})`;
  }

  moveForward() {
    this.position = Vector.add(this.position, this.heading);
  }

  rotate(direction) {
    this.heading = Vector.rotate90Degrees(this.heading, direction);
  }
}

module.exports = Rover;
