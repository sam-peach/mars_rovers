const CommandCenter = require("./CommandCenter");
const CommandParser = require("./CommandParser");
const InputReader = require("./InputReader");
const Rover = require("./Rover");

class App {
  // I wanted an App class vs. putting this loginc in the
  // index.js file as I feel it encapsulates the top-level
  // configurations and inteface a little better. If the
  // configuration data were to expand, environment variables
  // would be a good next step.

  INPUT_FILEPATH = "./rover_input.txt";

  constructor() {
    this.inputReader = new InputReader(this.INPUT_FILEPATH);

    const [width, height] = CommandParser.parseGridSize(
      this.inputReader.nextLine()
    );

    this.commandCenter = new CommandCenter({ width, height });
  }

  run() {
    // As I've chosen to read the inputs from a very small files
    // this nested 'while' loops shouldn't cause any performace issues.
    // If we did want to read from larger files, or user input, this
    // could be modified to use input streams vs. loading all the input
    // into memory.

    while (!this.inputReader.atEndOfInput()) {
      const unparsedLine = this.inputReader.nextLine();
      const { position, heading, commands } = CommandParser.parse(unparsedLine);

      this.commandCenter.trackRover(new Rover(position, heading));
      this.commandCenter.commands = commands;

      while (this.commandCenter.ableToProceed()) {
        this.commandCenter.processCommand();
      }
      this.commandCenter.logRoverStatus();
    }
  }
}

module.exports = App;
