// Day 4 Exercise 01 - JavaScript Student Object

// Create student object using object literal notation
const student = {
  studentId: 'S001',
  studentName: 'Ignacio de Paul',
  email: 'ignacio@example.com',
  status: 'Active'
};

// Print the whole object
console.log('=== Student Object ===');
console.log(student);

// Print each property using dot notation and bracket notation
console.log(`\nStudent ID: ${student.studentId}`);
console.log(`Name: ${student.studentName}`);
console.log(`Email: ${student['email']}`);
console.log(`Status: ${student.status}`);
