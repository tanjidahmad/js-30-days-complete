// spread operator(...)

//Spread = কোনো Array/Object-এর ভিতরের value গুলোকে ছড়িয়ে দেওয়া।

// const student=['tanjid','rahim','karim']
// console.log(...student)

// const resutl=[...student]
// console.log(resutl)
//same copy kore notun akta array vitore rakha hoise aitau spread operatore karon onno jaigai same value use kora jai 
// Destructuring
// → data থেকে value বের করি

// Spread (...)
// → data-এর value ছড়িয়ে ব্যবহার করি

// const student1 = {
//     name: "Tanjid",
//     age: 22
// };
// const resut={...student1}
// console.log(resut)

const student = {
    name: "Tanjid",
    age: 22,
    marks: 80
};
const updatedStudent = {
    ...student,
    marks: 90
};
console.log(updatedStudent)

//value update ba add sob kora jai new born hoi 



