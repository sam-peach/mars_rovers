const { MOVEMENT } = require("./utils");

class CommandCenter {
  // This class is the brain of what's going on. It's orchestrating the
  // command pipeline and pushing commands to the rover itself.

  constructor({ width, height }) {
    this.width = width;
    this.height = height;
    this.rover;
    this.lastKnownRoverStatus;
    this.commands;
  }

  ableToProceed() {
    return (
      this.#currentRoverInRange() && this.commands && this.commands.length > 0
    );
  }

  trackRover(rover) {
    this.rover = rover;
    this.lastKnownRoverStatus = rover.reportStatus();
  }

  processCommand() {
    const oldRoverStatus = this.lastKnownRoverStatus;

    this.#sendCommand(this.commands.shift());

    if (this.#currentRoverInRange()) {
      this.lastKnownRoverStatus = this.rover.reportStatus();
    } else {
      this.lastKnownRoverStatus = oldRoverStatus;
      this.rover = null;
    }
  }

  logRoverStatus() {
    console.log(this.lastKnownRoverStatus, this.rover ? "" : "LOST");
  }

  #currentRoverInRange() {
    return (
      this.rover &&
      this.rover.position.x >= 0 &&
      this.rover.position.x <= this.width &&
      this.rover.position.y >= 0 &&
      this.rover.position.y <= this.height
    );
  }

  #sendCommand(command) {
    switch (command) {
      case MOVEMENT.FORWARD:
        this.rover.moveForward();
        break;
      case MOVEMENT.ROTATE_CLOCKWISE: // This is a nice trick to check for MOVEMENT.ROTATE_CLOCKWISE
      case MOVEMENT.ROTATE_COUNTERCLOCKWISE: // _or_ MOVEMENT.ROTATE_COUNTERCLOCKWIS, while hitting the same logic.
        this.rover.rotate(command);
        break;
      default:
        // If this project were to be explaned upon, error checking
        // and error handling would be a good next step!
        throw Error(`Unknown command: ${command}`);
    }
  }
}

module.exports = CommandCenter;
