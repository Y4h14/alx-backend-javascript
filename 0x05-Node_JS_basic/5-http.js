#!/usr/bin/node
const http = require('http');
const fs = require('fs').promises;

const databasePath = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    try {
      const data = await fs.readFile(databasePath, 'utf8');
      const fileLines = data.trim().split('\n').filter((line) => line.trim() !== '');

      if (fileLines.length < 2) throw new Error('Cannot load the database');

      const students = fileLines.slice(1);
      const studentsTotal = students.length;

      res.write(`Number of students: ${studentsTotal}\n`);

      const fields = {};

      students.forEach((student) => {
        const [firstname,,, field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const [field, firstnames] of Object.entries(fields)) {
        res.write(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}\n`);
      }
    } catch (err) {
      res.write('Cannot load the database');
    }

    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen('1245', 'localhost', () => {
  console.log('listening on port 1245');
});

module.exports = app;
