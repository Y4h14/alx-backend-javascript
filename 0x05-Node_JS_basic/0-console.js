#!/usr/bin/node

function displayMessage(message) {
  console.log(message);
}

module.exports = displayMessage;

// const { spawn } = require('node:child_process');

// const subprocess = spawn('ls');

// subprocess.stdout.on('data', (data) => {
//   console.log(`Received chunk ${data}`);
// });
