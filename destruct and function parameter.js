// const student={
//     name:'tanjid',
//     age:26,
//     department:'cse'
// }

// const result=({name,age})=>{
//            console.log(name) 
//            console.log(age) 
// }
// result(student)

// const result1=(student)=>{
//     const newStudent={
//         ...student,mark:90
//     }
//     return newStudent

// }

// console.log(result1(student))



const students = [
    { id: 101, name: "Tanjid", department: "CSE", marks: 85 },
    { id: 102, name: "Rahim", department: "BBA", marks: 72 },
    { id: 103, name: "Karim", department: "CSE", marks: 90 }
];

const maps=()=>{
    //parameter hisabe student na deye destrucring o deya jai r setai valo

const result=students.map(({name})=>{
    return name
})
return result

}
console.log(maps())


// Scope
//  ↓
// কোথা থেকে variable access করা যাবে?

// Hoisting
//  ↓
// Code execute হওয়ার আগে declaration-এর সাথে কী হয়?

// Closure
//  ↓
// Inner function কীভাবে outer scope-এর variable ধরে রাখে?

// this
//  ↓
// Function call-এর context অনুযায়ী কোন object/context refer করছে?



