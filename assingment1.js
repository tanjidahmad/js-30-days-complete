const studentName='tanjid'
const studentId=651;
const bangla=80
const english=75
const math=90

const calculateTotal=(bangla,english,math)=>bangla+english+math

const calculateAverage=(total,subjectcount)=>{
    return total/subjectcount
}
const calculateGrade=(average)=>{
   if (average >= 80) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else if (average >= 50) {
        return "D";
    } else {
        return "F";
    }
}

const checkResult=(average)=>{
     if (average >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }

}

const total=calculateTotal(bangla,english,math)
const averag=calculateAverage(total,3)
const grade = calculateGrade(averag);
const result = checkResult(averag);
//notun variable store korsi karon amader egula aktar sathe arekta connectted
console.log("Student Name:", studentName);
console.log("Student ID:", studentId);

console.log("-------------------------------");

console.log("Bangla:", bangla);
console.log("English:", english);
console.log("Math:", math);

console.log("-------------------------------");

console.log("Total:", total);
console.log("Average:", averag.toFixed(2));
 console.log("Grade:", grade);
console.log("Result:", result);

console.log("================================");