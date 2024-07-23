#!/usr/bin/node
const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const csv = require('csv-parser');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const results = [];
  fs.createReadStream(path)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      const validResults = results.filter(
        (result) => Object.keys(result).length > 0 && result.field && result.firstname,
      );
      console.log(`Number of students: ${results.length}`);
      let cs = 0;
      let swe = 0;
      const csStudents = [];
      const sweStudents = [];

      for (const result of validResults) {
        if (result.field === 'CS') {
          cs += 1;
          csStudents.push(result.firstname);
        } else if (result.field === 'SWE') {
          swe += 1;
          sweStudents.push(result.firstname);
        }
      }
      console.log(
        `Number of students in CS: ${cs}. List: ${csStudents.join(', ')}`,
      );
      console.log(
        `Number of students in SWE: ${swe}. List: ${sweStudents.join(', ')}`,
      );
    });
}

module.exports = countStudents;
