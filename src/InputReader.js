const fs = require("fs");

class InputReader {
  constructor(filePath) {
    // Loading all the instructions into memory as they're only a few
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
    // This accounts for how Windows and Mac handle line breaks
    return line === "" || line === "\r";
  }
}

module.exports = InputReader;
