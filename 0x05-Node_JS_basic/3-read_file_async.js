#!/usr/bin/node
const fs = require('fs').promises;

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs.readFileSync(path, 'utf8').trim().split('\n');
  if (fileLines.length < 2) throw new Error('Cannot load the database');

  const students = fileLines.slice(1);
  const studentsTotal = students.length;

  console.log(`Number of students: ${studentsTotal}`);

  const fields = {};

  students.forEach((student) => {
    const [firstname,,, field] = student.split(',');
    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstname);
  });
  for (const [field, firstnames] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
  }
}

module.exports = countStudents;
