// Day 4 Exercise 05 - Render Student Cards in HTML

const students = [
  {
    studentId: "S001",
    studentName: "Ignacio de Paul",
    email: "ignacio@example.com",
    status: "Active"
  },
  {
    studentId: "S002",
    studentName: "Ben Tan",
    email: "ben@example.com",
    status: "Inactive"
  },
  {
    studentId: "S003",
    studentName: "Chong Mei",
    email: "mei@example.com",
    status: "Active"
  },
  {
    studentId: "S004",
    studentName: "Aina Rahman",
    email: "aina@example.com",
    status: "Active"
  }
];

// Select the student-list div
const studentList = document.getElementById("student-list");

// Loop through students and render cards
students.forEach((student) => {
  // Create a card div for each student
  const studentCard = document.createElement("div");
  
  // Add HTML content to the card
  studentCard.innerHTML = `
    <h3>${student.studentName}</h3>
    <p>Student ID: ${student.studentId}</p>
    <p>Email: ${student.email}</p>
    <p>Status: ${student.status}</p>
  `;
  
  // Add the card to the student-list div
  studentList.appendChild(studentCard);
});
