//Array looping === holo loop chalano jokon onk array size boro hbe tokon akta akta kore manual dekha possible na mane console kore tai amra loop use korbo 
const students=['tanjid', 'rahim', 'karim']
for(let i=0;i<students.length; i++){
    console.log(students[i])
}

///FOR EACH== HOLO potita element er upore aki kaj bar bar kora 
students.forEach(function(student,index,array){
    console.log(student)
    console.log(index)
     console.log(array)
})
// akta element er kaj ses hole areekta suru kore arekta jinis for each holo function er vitore parameter..

/// function ke argument hisabe pass kora jai sei jonno aita callback function
// call back function holo akta function ke onno function er argument hisabe pathano jai 
function greet() {
    console.log("Hello Tanjid");
}

function process(callback) {
    callback();
}

process(greet);
//aikahene onno function ke ai function er argument hisabe add korse 
///VERY IMPORTANT AMRA FOR EACH E CALL BACK FUNCTION USE KORBO ONK BAR 
// FUNCTION(){
//}   

// STUDENTS.FOREACH(FUNCTION(STUDENT){
//})
// forEach() সাধারণত কোনো নতুন Array তৈরি করার জন্য ব্যবহার করি না।

// এটা বেশি ব্যবহার করি যখন:

// প্রতিটি item print করতে চাই
// DOM-এ item দেখাতে চাই
// কোনো কাজ execute করতে চাই
// প্রতিটি item-এর উপর side effect করতে চাই

// যেমন পরে DOM-এ:

// products.forEach(function(product) {
//     // প্রতিটি product-এর জন্য HTML তৈরি
// });

// const numbers = [5, 10, 15, 20];

// numbers.forEach(function(number) {
//     console.log(number * 2);
// });
const teachers=['rahim','karim','taleb']
teachers.forEach((teacher)=>{
    console.log(teacher)
})

///ARROW FUNCTION E JUST FUNCTION TA LIKTE HOI NA 

const numbers = [10, 20, 30];

const result = numbers.forEach((number) => {
    console.log(number * 2);
});

console.log(result);

// result holo undefine karon kono notun array return kore na 
//main kaj holo potita array element er jonno kaj kora jeta function er vitore kore 
//tai map kora hoi karon new array return kore 



