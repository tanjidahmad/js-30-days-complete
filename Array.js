// // akta variable er modde akadik valu rakhar jonno amra array use kori 
// const students = ["Tanjid", "Rahim", "Karim", "Hasan", "Sakib"];
// // aikhane akta variable er modde 5 ta value rakha hoise string type er value amra array vitore je kono type er value rakte pari 
// //index suru hoi 0 theke 
// // amra atake container bolte pari/ box bola jai .
//  const products = [
//     "Laptop",
//     "Phone",
//     "Keyboard",
//     "Mouse"
// ];

// // array holo third bracket er modde rakte hoi comma deye r egula deye product card build kora jai 
// console.log(products[0])
// //Ai khane amar error hoisilo jokon ami first bracket desilam tai first bracket sudu function er khetre hoi 

// const fruits=['apple', 'banna', 'mango']
// fruits[1]='orange'
// console.log(fruits)
// //ARRAY VALUE CHANGE KORA JAI JUST KON INDEX E CHANGE KORBO SUDU SETA BOLLEI HBE 

const students = ["Tanjid", "Rahim", "Karim"];

console.log(students.length);
// ARRAY LENGTH BER KORSE AITA AMRA JUST ARRAY TA JE VARIABLE DEYE DECLARE KORSI JUST SETA .LENGTH DELE HBE 
//lasr index er jonno -1 korlei hbe 
//PUSH== push korle array element add hoi last e 
const fruits=['apple', 'banna']
fruits.push('mango','orange','jackfruits')
console.log(fruits)
//POP===pop holo seser element dlt kore 

fruits.pop()
//pop sudu remove kore na seta return o kore 
console.log(fruits)

//SHIFT=== array first element remove kore

fruits.shift();  ///shift o return kore remove value

console.log(fruits);

//unshift== ARRAY ER SORUTE VALUE ADD KORE 
fruits.unshift("Apple");

console.log(fruits);

//SLICE === AKTA ONSO KETE NOTUN ARRAY BANANO 

const result=   fruits.slice(1,3);
console.log(result)

// start 1 theke end 3 te but 3 no index count hbe na

//SLICE ORGINAL ARRAY CHANGE KORE NA 

////splice=======orginal array change kore 
//remove, add ,replace kore.

fruits.splice(1, 2);//index 1 and 2 remove fist start and second koita 

console.log(fruits);

fruits.splice(1, 0, "Banana", "Mango");// 1 index theke suru but 0 ta pore add korse 

console.log(fruits);
//JOIN DEYE AKTA STRING BANANO JAI ..ORGINAL ARRAY CHANGE KORE NA 

console.log(fruits.join("-"));
///include ()==nidisto kono value array modde ase naki seta check deua 

//const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana"));
//indexof()==value er index koto no e ase seta check deua 
console.log(fruits.indexOf("Banana"));

//lastIndexof()==ses bar value koi ase seta dei karon same value onk jai gai thakte pare 
const students1 = ["Tanjid", "Rahim", "Karim", "Rahim"];

console.log(students1.indexOf("Rahim"));
console.log(students1.lastIndexOf("Rahim"));

//concat === holo 2 ta array ke jora lagano mane onk gula array thakte pare sob gulake jora lagano 

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node", "Express"];
const skills=frontend.concat(backend)
console.log(skills)
///concat orginal array change kore na 
// const a = [1, 2];
// const b = [3, 4];
// const c = [5, 6];

// const result2 = a.concat(b, c);

// console.log(result2);

//Array Refference

const a = [10, 20, 30];

const b = a;
b.push(40);

console.log(a);
console.log(b);
/// array holo object type



