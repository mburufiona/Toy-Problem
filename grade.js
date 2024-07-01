function inputStudentMarks(marks){
   if (marks>79 && marks<100){
    console.log("A")
   } else if (marks <=79 && marks>=60){
    console.log ("B")
   } else if (marks>=49 && marks<=59){
    console.log ("C")
   } else if (marks>=40 && marks<=49){
    console.log ("D")
   } else if (marks<=40){
    console.log ("E")
   }
return 'Your Grade:' +marks;
}
// return Grade;
const myMarks = inputStudentMarks()
console.log(myMarks)