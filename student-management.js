//map holo array theke sob element alada kore show kora r new array banano 
//filter mane holo kono kicu khuja sei jonno amra jodi kono kicu khujte chai thik tokon amra filter khujbo 
//find holo kicu khuja kono part khujte hbe 
//push holo add kora new kicu 
// akn asi array of object first 

const students=[

{id:101, name: 'Tanjid', department:'cse',marks:85},
{id:102, name: 'Rahim', department:'BBA',marks:72},
{id:103, name: 'Karim', department:'cse',marks:90},

]

// first student holo array r {} holo object then property and value ase r full structure holo array of object 

//STEP1== sob student dekhanor kaj korbe holo map jeta akta function er maddome dekhate hbe 

// const allstudent=()=>{
//  return      students.map((student)=>{
//     return {
        
//     name: student.name,
//     department: student.department,
//     marks: student.marks

//     }
   
// })

// }

// console.log(allstudent())

// const findstudentbyId=(id)=>{
//    return students.find((student)=>{
//         return student.id===id;
//     })
// }
// console.log(findstudentbyId(103))
// const getCSEStudents = () => {
//     return students.filter((student) => {
//         return student.department === "cse";
//     });
// };
// console.log(getCSEStudents())


// map()
// ↓
// প্রতিটি element transform
// → নতুন Array

// filter()
// ↓
// condition true হলে রাখে
// → নতুন Array

// find()
// ↓
// প্রথম matching element
// → একটি element/object


//PUSH hollo notun kicu add kora 


// const newStudent = {
//     id: 104,
//     name: "Sakib",
//     department: "EEE",
//     marks: 78
// };

// students.push(newStudent)
// console.log(students)

const updateMarks = (id, newMarks) => {

    const student = students.find((student) => {
        return student.id === id;
    });

    if (student) {
        student.marks = newMarks;
    }
};
updateMarks(103, 95);
console.log(students);



