#!/usr/bin/node
export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityFilteredStudents = students.filter((student) => student.location === city);
  const noGrade = { grade: 'N/A' };
  return cityFilteredStudents.map((student) => ({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
    grade: (newGrades.filter((grade) => grade.studentId === student.id)
      .pop() || noGrade).grade,

  }));
}
