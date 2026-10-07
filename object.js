//OBJECT=== related information ak sathe rakha 
// second braket use korte hoi 
// object ke akta box bolete pari ban bag bolte pari jekhane onk kicu rakha jai ba amra rakhi

const student={
    name:'tanjid',
    age: 19,
    id: 40,
    department:'cse',
    method:function(){
        console.log('hello')
    },
    address:{
        city: 'dhaka',
        country:'bangladesh'
    }



}

// //object er vitore PROPERTY ar VALUE  thake 

////object property access 

//....... dot notation ,[]== braket notation
student.class='a'//add kora hoise same vabe update o kora jai 

// delete korte chaile delete likte hoi
delete student.class
console.log(student.method())
 const result= student.address.city
 console.log(result)



// object er vitore function e thake jekhane method thake 

//ARRAY OF OBJECT

const students = [
    {
        name: "Tanjid",
        age: 19,
        department: "CSE"
    },
    {
        name: "Rahim",
        age: 20,
        department: "BBA"
    },
    {
        name: "Karim",
        age: 21,
        department: "CSE"
    }
];

const step1= students[0]
const step2= students[2].age
const step3= students[1].department

console.log(step1)
console.log(step2)
console.log(step3)







