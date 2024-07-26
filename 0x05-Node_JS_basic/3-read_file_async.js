#!/usr/bin/node
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const fileLines = data.trim().split('\n').filter((line) => line.trim() !== '');

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
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
