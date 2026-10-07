// const numbers = [10, 15, 20, 25, 30];

// const result = numbers.filter((number) => {
//     return number > 20;
// });

// console.log(result);

// /// filter holo condition check deye notun array return kore same aikhaneu callback function ase jekhane potita element check kore notun array banai
// ///FIND HOLO FIRST MATCHING ELEMENT PAILEI RETURN KORE

// | Situation | Method |
// |---|---|
// | Search results | `filter()` |
// | Category filter | `filter()` |
// | Price range filter | `filter()` |
// | Multiple students | `filter()` |
// | Specific user by ID | `find()` |
// | Specific product by ID | `find()` |
// | First matching item | `find()` |


//REDUCE  === reduce() একটু আলাদা। এটা সাধারণত অনেকগুলো value-কে মিলিয়ে একটা final value বের করতে ব্যবহার করি।
//SORT ===a,b ase result positive hole B age jabe negative hole a age jabe 
//  const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Phone", price: 30000 },
//     { name: "Mouse", price: 1000 }
// ];

// products.sort((a, b) => a.price - b.price);

// console.log(products);

// reduce holo onk gula value niye final akta value banao 

//r==accumulator jeta result gula ak ak kore joma hoi 
//c==current mane holo potita element ak ak kore kaj kora hoi seta bola hoise 
//0 deua hoise karon initial value 0 theke suru hoise mane count er somoi 



// const num=[10,20,30,40]

// const resut=num.reduce((r,c)=>{
//     return r+c
// },0)
// console.log(resut)
const cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

const total=cart.reduce((acc,curr)=>{
    return acc+ curr.price
},0)
console.log(total)
