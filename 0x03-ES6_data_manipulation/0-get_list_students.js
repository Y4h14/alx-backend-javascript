/**
 * Retrives a list of students
 * @returns {{id: Number, firstName: String, location: String}[]}
 */

export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Colombia' },
    { id: 5, firstName: 'Serna', location: 'San Francisco' },
  ];
}
