Day 1 --- JavaScript Variables & Data Types

Date: 9 September 2026
Course: 30-Day JavaScript Frontend Learning Plan
Daily Target: 4 Hours

🎯 Day 1 Goal

আজকের মূল লক্ষ্য ছিল JavaScript-এর সবচেয়ে basic foundation তৈরি করা:

Variables কী এবং কেন ব্যবহার করা হয়

let, const, var সম্পর্কে basic understanding

JavaScript-এর basic data types চেনা

typeof দিয়ে data type identify করা

null এবং undefined-এর পার্থক্য বোঝা

নিজে হাতে ছোট ছোট code লেখা

1. Variables

Variable কী?

Variable হলো একটি named container, যেখানে JavaScript-এ কোনো
value/data রাখা যায়।

let name = "Tanjid";

এখানে:

let → variable declare করার keyword

name → variable-এর নাম

= → value assign করার operator

"Tanjid" → stored value

তারপর value ব্যবহার করা যায়:

console.log(name);

Output:

Tanjid

Frontend-এ Variables কেন গুরুত্বপূর্ণ?

Frontend application-এ বিভিন্ন ধরনের data নিয়ে কাজ করতে হয়:

User name

Age

Product price

Cart quantity

Login status

Form input

API response

তাই JavaScript-এর data handling-এর foundation হলো variables।

2. let

let ব্যবহার করা হয় যখন variable-এর value পরে reassign/change হতে
পারে।

let age = 18;

age = 19;

console.log(age);

Output:

19

Rule

let variable-এর value পরে reassign করা যায়।

Example:

let score = 50;
score = 80;

এখানে 50 → 80 হয়েছে।

3. const

const ব্যবহার করা হয় যখন variable-এ নতুন value reassign করার প্রয়োজন
নেই।

const name = "Rahim";

console.log(name);

নিচের code ভুল:

const price = 500;

price = 600;

এতে error হবে:

TypeError: Assignment to constant variable.

Rule

const variable-এ নতুন value reassign করা যায় না।

let বনাম const

Keyword     Reassign করা যায়? সাধারণ ব্যবহার

let                      ✅ Value পরিবর্তন হতে পারে
const                    ❌ Value reassign করার দরকার নেই

Modern JavaScript-এ সাধারণত let এবং const ব্যবহার করা হয়।

4. var

var পুরোনো JavaScript-এর variable declaration keyword।

var age = 20;

age = 21;

console.log(age);

এটিও কাজ করে।

তবে modern JavaScript-এ সাধারণত let এবং const prefer করা হয়, কারণ
var-এর scope behavior কিছু ক্ষেত্রে confusing হতে পারে।

Basic scope observation

if (true) {
    var name = "Rahim";
}

console.log(name);

var block-এর বাইরে accessible হতে পারে।

কিন্তু:

if (true) {
    let name = "Rahim";
}

console.log(name);

এখানে error হবে, কারণ let block-scoped।

Scope বিস্তারিতভাবে Day 6-এ শেখা হবে।

5. Data Types

Variable-এর ভিতরে যে value থাকে তার একটি data type থাকে।

Day 1-এ আমরা শিখেছি:

String

Number

Boolean

null

undefined

String

Text/string quotation-এর ভিতরে লেখা হয়।

const name = "Rahim";

এখানে:

"Rahim" → String

Single quote এবং double quote দুটোই ব্যবহার করা যায়:

const a = "Hello";
const b = 'Hello';

Template literal-এর জন্য backtick-ও ব্যবহার করা যায়:

const c = `Hello`;

গুরুত্বপূর্ণ

25     → Number
"25"   → String
'25'   → String
`25`   → String

Quotation-এর ভিতরের 25 text হিসেবে ধরা হয়।

6. Number

JavaScript-এ integer এবং decimal---দুটোই Number data type।

const age = 22;
const cgpa = 3.75;

দুটোই:

Number

Important

JavaScript-এ আলাদা float primitive data type নেই।

22     → Number
3.75   → Number
100.5  → Number

7. Boolean

Boolean-এর মাত্র দুইটি value:

true
false

Example:

const isLoggedIn = true;
const isAvailable = false;

Frontend-এ Boolean ব্যবহার হয়:

User logged in কিনা

Dark mode active কিনা

Product available কিনা

Form valid কিনা

Todo complete কিনা

8. null

null ব্যবহার করে আমরা ইচ্ছা করে বোঝাই যে বর্তমানে কোনো value নেই।

let selectedUser = null;

মানে:

selectedUser → বর্তমানে কোনো user selected নেই

পরে value দেওয়া যেতে পারে:

selectedUser = "Rahim";

9. undefined

Variable declare করা হয়েছে কিন্তু কোনো value assign করা হয়নি---তখন value
undefined হতে পারে।

let address;

console.log(address);

Output:

undefined

null বনাম undefined

        `null`                    `undefined`

অর্থ       ইচ্ছা করে কোনো value নেই   Value এখনো assign করা হয়নি
Example   let user = null;        let user;

সহজভাবে:

null
→ আমি বলছি: এখন কোনো value নেই

undefined
→ এখনো value দেওয়া হয়নি

10. typeof

typeof operator ব্যবহার করে কোনো value/variable-এর data type জানা যায়।

String

const name = "Rahim";

console.log(typeof name);

Output:

string

Number

const age = 22;

console.log(typeof age);

Output:

number

Boolean

const isStudent = true;

console.log(typeof isStudent);

Output:

boolean

Undefined

let price;

console.log(typeof price);

Output:

undefined

⚠️ JavaScript-এর একটি Weird Behavior: typeof null

const user = null;

console.log(typeof user);

Output:

object

এটা JavaScript-এর পুরোনো/legacy behavior।

তাই:

typeof null

এর result হলো:

"object"

এটা মনে রাখা দরকার।

11. Day 1 Code Practice

Student Information

Day 1-এর concepts combine করে এমন data তৈরি করা যায়:

const studentName = "Tanjid";
const age = 22;
const cgpa = 3.75;
const isPassed = true;
const phoneNumber = null;
let address;

Types:

studentName → String
age         → Number
cgpa        → Number
isPassed    → Boolean
phoneNumber → null
address     → undefined

Types inspect করার জন্য:

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof cgpa);
console.log(typeof isPassed);
console.log(typeof address);

12. Important Learning Points

Rule 1

Value পরিবর্তন হলে:

let score = 50;
score = 80;

Rule 2

Reassign করার দরকার না হলে:

const price = 80000;

Rule 3

Quotation থাকলে text/string:

"22" → String

Quotation না থাকলে:

22 → Number

Rule 4

Boolean:

true
false

Rule 5

Intentionally no value:

null

Rule 6

Value assign করা হয়নি:

undefined

Rule 7

Data type inspect:

typeof value

🧠 Day 1 Concept Map

JavaScript Data
      │
      ├── Variables
      │     ├── let
      │     ├── const
      │     └── var
      │
      └── Data Types
            ├── String
            ├── Number
            ├── Boolean
            ├── null
            └── undefined

typeof
   ↓
Data type check

💻 Practice Philosophy

Day 1-এর সবচেয়ে গুরুত্বপূর্ণ lesson শুধু syntax নয়।

Learn
  ↓
Understand
  ↓
Close tutorial
  ↓
Write manually
  ↓
Make mistakes
  ↓
Debug
  ↓
Repeat

Copy-paste করে শেখা নয় --- নিজে code লিখে শেখাই লক্ষ্য।

📌 Day 1 Status

Skill              Status

Variable concept   🟢 Understood
let              🟢 Understood
const            🟢 Understood
var basic idea   🟢 Understood
String             🟢 Understood
Number             🟢 Understood
Boolean            🟢 Understood
null             🟢 Covered
undefined        🟢 Covered
typeof           🟢 Covered