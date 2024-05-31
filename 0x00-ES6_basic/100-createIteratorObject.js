#!/usr/bin/node
export default function createIteratorObject(report) {
  return (function* _() {
    for (const departmentName of Object.values(report.allEmployees)) {
      for (const employee of departmentName) {
        yield employee;
      }
    }
  }());
}
