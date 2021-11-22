# Downloading and running

0. Ensure you have [Node.js](https://nodejs.org/en/) installed

1. Run the following commands to download the code and move into the project directory:

```
git clone https://github.com/sam-peach/mars_rovers.git

cd mars_rovers
```

3. Run `npm install` for good measure

4. Run the application with `npm start`

# My Approach

### Node.js

Why Node/JavaScript? At first I wanted to write the project with TypeScript but forgot how tedious it can be to configure small projects such as this one. Not wanting to spend too much time fighting with configuration files, I fell back to trusty old Node.js.

### Architecture

Trying to take some inspiration from real life, the application consists of raw instruction input, parser, command center, and the rover(s).

![](https://i.imgur.com/zKCAm4q.png)

# Choices made along the way

### 1. Reading input from a file and loading it into memory

The example commands reminded me of the [G-code](https://en.wikipedia.org/wiki/G-code) you'd see for something like a CNC router. I thought it might be nice having a static file to read from vs. typing in the commands each time.

If there was a need for the application to be more interactive, or if the instruction file grew too large, the input source could be changed to a stream; from either the user or streaming the program file as to not take up too many resources.

### 2. Running the rovers synchronously

At present, one rover is tracked until all of its commands are implemented or until it's lost. Once this happens, the next rover is queued up for the same treatment.

If this project were to continue, there would be an opportunity to refactor how the rovers and commands are managed (depending on the requirements), allowing the rover commands to run concurrently, helping decrease rover idle-time.

### 3. No tests!

Purely for convenience and speed, there are no tests for this code! This would be the biggest change if this code were to be iterated on and deployed to production. Unit tests would be essential to feeling confident that the application is stable and working.
