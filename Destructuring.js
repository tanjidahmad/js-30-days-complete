//destructuring holo kono array ba object theke important data ber kore akta variable er vitore rakha 
// const student={
//     name:'tanjid',
//     age:22,
//     department:'cse'
// }
// console.log(student.name)
// const nam=student.age
// console.log(nam)

// ai kahne amara normally akta value dorkar seta variable er vitore raksi amra aitake non destructing bolte pari 

//destructing use korbo karon onk somoi amader project e sob variable dorkar hbe na tokon amra jeta dorkar tokon thik setai use korbo sei jonno amar destructing dorkar 
///

// const {name:userName,department}=student
// //console.log(name)//
// console.log(userName)
// //destructing e variable er name change kora jai tokon : use korte hoi 
// console.log(department)


//ARRAY te position important hoi

// Object → property অনুযায়ী
// Array  → position অনুযায়ী

const student = {
    name: "Tanjid",
    age: 22,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};
const {
    address: { city, country }
} = student;
