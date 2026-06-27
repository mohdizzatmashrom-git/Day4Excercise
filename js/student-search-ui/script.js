// Day 4 Exercise 06 - Add Search to the Student List

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

// Select DOM elements
const studentListDiv = document.getElementById("student-list");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resetButton = document.getElementById("reset-button");

// Render students function
function renderStudents(studentArray) {
  // Clear the student-list div
  studentListDiv.innerHTML = "";

  // Show message if array is empty
  if (studentArray.length === 0) {
    studentListDiv.innerHTML = '<p class="no-results">No students found</p>';
    return;
  }

  // Render each student as a card
  studentArray.forEach((student) => {
    const studentCard = document.createElement("div");
    studentCard.className = "student-card";
    studentCard.innerHTML = `
      <h3>${student.studentName}</h3>
      <p>Student ID: ${student.studentId}</p>
      <p>Email: ${student.email}</p>
      <p>Status: ${student.status}</p>
    `;
    studentListDiv.appendChild(studentCard);
  });
}

// Search button click handler
searchButton.addEventListener("click", () => {
  // 1. Read the input value
  const searchTerm = searchInput.value;

  // 2. Convert to lowercase
  const searchTermLower = searchTerm.toLowerCase();

  // 3. Use filter to search student names
  const filteredStudents = students.filter((student) => {
    return student.studentName.toLowerCase().includes(searchTermLower);
  });

  // 4. Render the filtered students
  renderStudents(filteredStudents);
});

// Reset button click handler
resetButton.addEventListener("click", () => {
  // 1. Clear the input
  searchInput.value = "";

  // 2. Render all students again
  renderStudents(students);
});

// Initial render - show all students on page load
renderStudents(students);
