const fs = require("fs");

class InputReader {
  constructor(filePath) {
    // Loading all the instructions into memory as they're
    // very small!
    this.lines = fs
      .readFileSync(filePath, "utf-8")
      .split("\n")
      .filter((line) => this.#lineValid(line));
  }

  nextLine() {
    const line = this.lines.shift();
    return this.#lineValid(line) ? line : this.nextLine();
  }

  atEndOfInput() {
    return this.lines.length === 0;
  }

  #lineValid(line) {
    // Some basic parsing rules to allow for comments in the .TXT file
    return !this.#lineIsComment(line) && !this.#lineIsBlank(line);
  }

  #lineIsComment(line) {
    return line && line.slice(0, 2) === "//";
  }

  #lineIsBlank(line) {
    return line === "\r";
  }
}

module.exports = InputReader;
