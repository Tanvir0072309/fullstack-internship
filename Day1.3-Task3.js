
/**
 * Day 1.3 - Task 3: Student Result Processor
 */

const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 },
  { name: "Imran", marks: 48 },
  { name: "Meera", marks: 74 }
];

// Validate a student record.
function isValidStudent(student) {
  return (
    student !== null &&
    typeof student === "object" &&
    typeof student.name === "string" &&
    student.name.trim().length > 0 &&
    Number.isFinite(student.marks) &&
    student.marks >= 0 &&
    student.marks <= 100
  );
}

// 1. Calculate total marks.
function getTotalMarks(studentList) {
  if (!Array.isArray(studentList)) {
    return null;
  }

  return studentList.reduce((total, student) => {
    if (!isValidStudent(student)) {
      return total;
    }

    return total + student.marks;
  }, 0);
}

// 2. Calculate average marks.
function getAverageMarks(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) {
    return null;
  }

  const validStudents = studentList.filter(isValidStudent);

  if (validStudents.length === 0) {
    return null;
  }

  const total = getTotalMarks(validStudents);
  return total / validStudents.length;
}

// 3. Determine pass or fail.
function getStudentResult(student) {
  if (!isValidStudent(student)) {
    return "Invalid";
  }

  return student.marks >= 50 ? "Pass" : "Fail";
}

// 4. Find a student by name, ignoring case.
function findStudentByName(studentList, name) {
  if (!Array.isArray(studentList) || typeof name !== "string") {
    return undefined;
  }

  const searchName = name.trim().toLowerCase();

  return studentList.find(
    student =>
      isValidStudent(student) &&
      student.name.trim().toLowerCase() === searchName
  );
}

// 5. Print the report.
function printStudentReport(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) {
    console.log("No student records available.");
    return;
  }

  console.log("Student Result Report");
  console.log("---------------------");

  for (const student of studentList) {
    if (!isValidStudent(student)) {
      console.log("Skipping invalid student record.");
      continue;
    }

    console.log(
      `Name: ${student.name} | Marks: ${student.marks} | Result: ${getStudentResult(student)}`
    );
  }
}

// Tests
console.log("Total:", getTotalMarks(students));
// Total: 362

console.log("Average:", getAverageMarks(students));
// Average: 72.4

console.log("Asha's result:", getStudentResult(students[0]));
// Pass

console.log("Imran's result:", getStudentResult(students[3]));
// Fail

console.log("Find Neha:", findStudentByName(students, "Neha"));
// { name: 'Neha', marks: 91 }

console.log("Find missing student:", findStudentByName(students, "Karan"));
// undefined

printStudentReport(students);

// Empty-array tests
console.log("Empty total:", getTotalMarks([]));
// 0

console.log("Empty average:", getAverageMarks([]));
// null

printStudentReport([]);
// No student records available.

