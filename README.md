# Downloading and running

0. Ensure you have [Node.js](https://nodejs.org/en/) installed

1. Run the following to pull down from git and change into the directory:

```
git clone https://github.com/sam-peach/mars_rovers.git

cd mars_rovers
```

3. Run `npm install` for good measure

4. Run the program with `npm run`

# My Approach

### Node.js

Why Node/JavaScript? To be honest, I wanted to write the project in TypeScript but forgot how much of a pain it can be to configure small, on-the-fly projects. Not wanting to spend too much fighting with configuration files, I fell back to trusty Node.js.

### Architecture

Trying to take some inspiration from real life, the program consists of raw input, and parser, a command center, and the rover(s).

![](https://i.imgur.com/mBTKwx0.png)

# Choices made along the way

### 1. Reading input from a file and loading it into memory

The example commands reminded me of the [G-code](https://en.wikipedia.org/wiki/G-code) you'd see for something like a CNC router, so I thought it might be nice having a static file to read from vs. typing in the commands each time.

If there was a need for the program to be more interactive or the instruction file grew too large, in the input could be changed to a stream; from the user's input or streaming in a file as not to take up too many resources reading large files.

### 2. Running the rovers synchronously

At the moment, one rover is tracked until all its commands are implemented or until it's lost. Once this happens the next rover is queued up for the same treatment.

If this project were to develop there would be an opportunity to refactor (depending on the requirements), allowing the rover commands to run concurrently, helping decrease rover downtime.

### 3. No tests!

Purely for convenience and speed, there are no tests for this code! This would be the biggest change if this code were to develop and be deployed to production, we'd need to unit tests to feel confident about what's being run.
