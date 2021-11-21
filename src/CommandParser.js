const { HEADINGS } = require("./utils");
const Vector = require("./Vector");

class CommandParser {
  // We don't need to track any state for the
  // CommandParser so static methods should be a good
  // fit here!

  static parse(rawCommand) {
    const [x, y] = this.#extractPositionValues(rawCommand);
    const heading = this.#extractHeading(rawCommand);
    const commands = this.#extractCommands(rawCommand);

    return {
      position: new Vector({ x, y }),
      heading: HEADINGS[heading],
      commands,
    };
  }

  static parseGridSize(initialCommand) {
    return initialCommand.split(" ").map(Number);
  }

  static #extractPositionValues(rawCommand) {
    // Extract all numbers (there should only be two present for the X, Y position)
    return rawCommand.match(/\d/g).map(Number);
  }

  static #extractHeading(rawCommand) {
    // Extract the value before the last ')' that matches
    // any of the HEADING enum keys
    return rawCommand.match(
      new RegExp(`[${Object.keys(HEADINGS).join("")}](?=\\))`, "g")
    )[0];
  }

  static #extractCommands(rawCommand) {
    //Extract all values after the last ') ' - the rover commands
    return rawCommand.match(/(?<=\)\s).*/g)[0].split("");
  }
}

module.exports = CommandParser;
