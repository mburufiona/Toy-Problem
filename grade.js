// input studentMarks corresponding with required grade.
function inputStudentGrade(){
   const marks = parseInt(prompt("Enter Student Marks:"));
   if (marks < 0 || marks > 100 || isNaN(marks) ) {
      console.log("Invalid")
   } else {
   let grade;
   if (marks > 79) {
      grade = 'A';
   } else if (marks >= 60 && marks <= 79) {
      grade = 'B';
   } else if (marks >= 49 && marks <= 59) {
      grade = 'C';
   } else if (marks >= 40 && marks <= 48) {
      grade = 'D';
   } else {
      grade = 'E';
   }
   console.log(`Grade: ${grade}`)
   }
}
inputStudentGrade()