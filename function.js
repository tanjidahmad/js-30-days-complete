// //funton holo mre susable block jeta akta ndsto kaj kore ...

// console.log ('helo anik')
// //function sara aki code bar bar likte hosse jokon amerra aki kaj bar bar likbo tokon onk boro code hbe ata ke re susable orer kore jonno function e likbo jokon dorkar hbe thik topkon e function call kore debo ..


// function sayHrello(){
//     console.log ('hello tanjid ')



// }
// // joon dorkar hbe thik tokon functuiion call kore debo...
// sayHrello();
// // function === javascript ke bolse function build koro 
// // sayHello=== function er name 
// //()== parameter rakhanr jaiga jekhane parameter raha hoi 
// // {}== jekhane function er sokol code kore hoi 

// //// function build orlei kaj hoi na function call korte hoi jetae function call bole ba function invocation 


// /// sayHello()===function call/function invocation

// // jemon washing mechine build kora r chalano a na build kora mane function build ora r aj korte hole button chapte hole r jetai holo finction call 


// function addNumbers(){
//     console.log(10+20);
// }
// addNumbers()
// addNumbers()

// // parameter === function build korer somo placeholder 
// // argument holo function call korer somoi actual value 

// function add(a,b){
//     console.log(a+b);
// }

// add(20,30)
// add(10,-20)


// // a,b == parameter ja placeholder 
// //20,30 == argument ja call er somoi actual value bosse 


// ///console holo function er value console e dekhani 


// ////// important holo return === jetar kar holo functiopn er value baire pathai ..... karon ami agei bolesi function holo block scope jeta vitore kaj kore kintu reyturn deye jodi hoi tokon seta baireu kaj jkore jai 



// function add1(s,d){
//     return s + d;

// }

// let result=   add1(10,100)
// console.log(result)
// /// return holo result ferot dei 


// function square(num){
//         return num*num;

// }
//  let result1= square(5)
//  console.log(result1)

//  function test() {
//     return 10;
//     console.log("Hello");// atai r execute hbe na karon function theke ber hoiye gese 
// }

// console.log(test());
// //// return korle function er return er porer code r execute hoi na karon funtion theke ber hoiye jai

// function greet(name = "Guest") { //guest default value 
//     return "Hello " + name;
// }

// console.log(greet());
// console.log(greet("Tanjid"));

// // function er default parameter er value declare kora jai jekhane argument na deleu hoi 
// // parameter on gula deua jai multiple 

// function calculateArea(length,width){
//     return length*width;
// }
// console.log(calculateArea(10, 5));


// //FUNCTION EXPRESSION ===AKTA VARIABLE ER VITORE FUNCTION TA RAKHA JUST
// /// joon akta variable er vitore rahi tooon function er name r bolte hoi na tokon function r parameter delei hoi 
// const add3=function(q,w){
//     return q+w;
// }
// console.log(add3(5,6))

// // js e function value hisabe kaj kore tai variable e declare kore hoi 
// /// ARROW FUNCTION =>
    
// const multiply=(a,b)=>a*b;
// console.log(multiply(500,3))
// // function er vitore declare kora variable baire theke call kora paua jabe na .....abar sei variable ke function er baire theke call korle error hbe aitai scope 
// function test() {
//     let message = "Hello";
//     console.log(message);
// }

// test();


// const isEven=(number)=>
//     number % 2===0;

// console.log(isEven(10)); // true
// console.log(isEven(7));  // false


// const calculateDiscount=(price,discount)=>{
//   const  finalPrice = price - (price * discount / 100);
//     return finalPrice;
// }
// console.log(calculateDiscount(1000, 10))
// // global scope holo function er baire variable declare kora thake seta function er vitoreu call kora jai abar function er baireu call kora jai

// let name6 = "Tanjid";

// function greet() {
//     console.log(name6);
// }

// greet();

// console.log(name6);
// // aikahen global scope e dekha jasse function e vitore baire vaiable declare ta kar kortese 
// //function scope sudu function er vitore kaj korbe baire na 
// function test() {
//     let age = 22;

//     console.log(age);
// }

// test();

// let x = 10;

// function test1() {
//     let y = 20;

//     console.log(x);
//     console.log(y);
// }

// test1();

// console.log(x);
// console.log(y);

/// block scope mane holo {} er vitore jeta thake seta bujano hoise 
//////let r const holo block scopre r var holo function scopre 

//BLOCK SCOPE GULA BLOCK ER BAIRE CALL KORLE SETA ERROR HBE KAJ HBE NA BUT FUNCTION SCOPE VAR BLOCK ER BAIRE THEKEU CALL KORLE KAJ HBE 
// if (true) {
//     let age = 22;
//     console.log(age);
// }
// if (true) {
//     let age = 22;
// }

// console.log(age);
// {
//     var age = 22;
// }

// console.log(age);
//AKI BLOCK E BARBAR LET BA CONST USE KORA JAI NA BUT VAR DECLARE KORA JAI
//SCOPE CHAIN HOLO CURRENT SCOPE E JODI VARIABLE NA THAKE TAHOLE UPORER SCOPE E KORE
// let x = 10;

// function outer() {
//     let y = 20;

//     function inner() {
//         let z = 30;

//         console.log(x);
//         console.log(y);
//         console.log(z);
//     }

//     inner();
// }

// outer();

// FUNCTIONAL COMPOSITION holo akta function er output onno function er input hisabe kaj korbe 



