#!/usr/bin/node
const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;
const databasePath = process.argv[2];

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  let responseText = 'This is the list of our students\n';
  try {
    const data = await fs.readFile(databasePath, 'utf8');
    const fileLines = data.trim().split('\n').filter((line) => line.trim() !== '');

    if (fileLines.length < 2) throw new Error('Cannot load the database');

    const students = fileLines.slice(1);
    const studentsTotal = students.length;

    responseText += `Number of students: ${studentsTotal}\n`;

    const fields = {};

    students.forEach((student) => {
      const [firstname,,, field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    let lineCount = 0;
    for (const [field, firstnames] of Object.entries(fields)) {
      responseText += `Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`;
      if (lineCount === 0) {
        responseText += '\n';
        lineCount += 1;
      }
    }
  } catch (err) {
    responseText += 'Cannot load the database';
  }
  res.send(responseText);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
