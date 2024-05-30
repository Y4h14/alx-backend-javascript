#!/usr/bin/node

export default class HolbertonCourse {
  constructor(name, length, students) {
	  this._name = name;
	  this._length = length;
	  this._students = students;
	}
   get name() {
	return this._name;
   }
   get length() {
	return this._length;
   }
   get students() {
	return this._students;
   }
   set name(name) {
	if (typeof name !== 'string') {
		throw new TypeError('name must be string');
	}
	this._name = name;
   }
   set length(length) {
	if (typeof length !== 'number') {
		throw new TypeError('length must be a number');
	}
	this._length = length;
   }
   set students(students) {
	if (typeof students !== 'object') {
		throw new TypeError('students must be an array of strings')
	}
	this._students = students
   }
}
