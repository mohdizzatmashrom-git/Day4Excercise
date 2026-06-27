// Day 4 Exercise 03 - Functions and Arrow Functions for Student Data

// Student object
const student = {
  studentId: 'S001',
  studentName: 'Aina Rahman',
  email: 'aina@example.com',
  status: 'Active'
};

// 1. Normal Function - format the student info
function formatStudent(student) {
  return `${student.studentId} - ${student.studentName} (${student.status})`;
}

// 2. Arrow Function - get student email
const getStudentEmail = (student) => {
  return student.email;
};

// 3. Short Arrow Function - get student status
const getStudentStatus = (student) => student.status;

// Print results
console.log(formatStudent(student));
console.log(getStudentEmail(student));
console.log(getStudentStatus(student));
