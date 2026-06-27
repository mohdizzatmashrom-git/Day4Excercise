// Day 4 Exercise 04 - Practice JavaScript Array Methods

// Initial student array
const students = [
  { studentId: "S001", studentName: "Ignacio de Paul", email: "ignacio@example.com", status: "Active" },
  { studentId: "S002", studentName: "Ben Tan", email: "ben@example.com", status: "Inactive" },
  { studentId: "S003", studentName: "Chong Mei", email: "mei@example.com", status: "Active" }
];

// Print original array
console.log("=== Original Students ===");
console.log(students);

// =============================================
// Part A - Methods That Read or Create a New Array
// =============================================

// 1. forEach - print all student names
console.log("\n=== All Student Names ===");
students.forEach((student) => {
  console.log(student.studentName);
});

// 2. filter - get only active students
const activeStudents = students.filter((student) => student.status === "Active");
console.log("\n=== Active Students ===");
console.log(activeStudents);

// 3. find - find student with ID S002
const foundStudent = students.find((student) => student.studentId === "S002");
console.log("\n=== Find Student S002 ===");
console.log(foundStudent);

// 4. map - extract all student emails
const studentEmails = students.map((student) => student.email);
console.log("\n=== Student Emails ===");
console.log(studentEmails);

// =============================================
// Part B - Methods That Modify the Original Array
// =============================================

// 5. push - add a new student to the end
const newLengthAfterPush = students.push({
  studentId: "S004",
  studentName: "Danish Nawaz",
  email: "danish@example.com",
  status: "Active"
});
console.log("\n=== After push ===");
console.log(students);
console.log("New length after push: " + newLengthAfterPush);

// 6. pop - remove the last student
const removedLastStudent = students.pop();
console.log("\n=== After pop ===");
console.log(students);
console.log("Removed last student:");
console.log(removedLastStudent);

// 7. unshift - add a new student to the beginning
const newLengthAfterUnshift = students.unshift({
  studentId: "S000",
  studentName: "Ignacio de Paul",
  email: "ignacio@example.com",
  status: "Active"
});
console.log("\n=== After unshift ===");
console.log(students);
console.log("New length after unshift: " + newLengthAfterUnshift);

// 8. shift - remove the first student
const removedFirstStudent = students.shift();
console.log("\n=== After shift ===");
console.log(students);
console.log("Removed first student:");
console.log(removedFirstStudent);

// Print final array
console.log("\n=== Final Students Array ===");
console.log(students);
