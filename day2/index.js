//var let const
// let A = "as";
// let B = "bb";
// {
//   let A = "cc";
//   //   console.log(A);
// }
// console.log(A);

// function add(a, b) {
//   return (c = a + b);
// }
// add(3, 4);
// console.log(c);
// const sub = (a, b) => {
//   return a - b;
// };
// sub(10, 2);
// console.log(sub(10, 2));

// function countvowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countvowels("asmita");

// function vowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// vowels("asmita");

// const message = (name, greeting) => {
//   console.log("Hello", name, greeting);
// };
// message("Asmita", "Good morning");

// const person = {
//   title: "developer",
//   name: "asmita",
//   show: function () {
//     // console.log(`hello ${this.name}`);

//     setTimeout(() => {
//       console.log(`hello ${this.name}`);
//     });
//   },
// };
// person.show();

// object and array
// let array = ["asmi", "kc", "yo"];
// array.forEach(function printVal(val) {
//   console.log(val);
// });
// array.forEach((val, index, arr) => {
//   console.log(val.toUpperCase(), index, arr);
// });
// array.forEach(function printVal(val) {
//   console.log(val);
// });

// for each
// let nums = [1, 2, 3, 4];
// nums.forEach((num) => {
//   console.log(num * num);

//elseif statement
// });
// let time = 9;
// if (time > 10) {
//   console.log("ok");
// } else if (time == 9) {
//   console.log("balance");
// }

//Spread operator
// const array = [1, 2, 3];
// // const string = { ...array };
// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(...array));

// let obj1 = {
//   name: "asmita",
//   age: 22,
//   clz: "hima",
// };
// console.log({ ...obj1, name: "a" });

//Rest operator
// function add(a, b, c, ...other) {
//   console.log(other);
//   return a + b + c;
// }
// const res = add(1, 2, 3, 4, 5, 6, 7);
// console.log(res);

// let names = ["A", "B", "C"];
// console.log(...names);
// optional chaining
// const student = {
//   name: "asmita",
//   age: 22,
//   address: {
//     city: "Tulsipur",
//     road: 229,
//   },
// };
// // console.log(student.address.road.roadno?.houseno);
// console.log(student?.address?.road);

// && and ||
// const temp = 20;
// if (temp > 20 && temp <= 30) {
//   console.log("good");
//   // } else if (temp <= 30) {
//   //   console.log("Good");
// } else {
//   console.log("bad");
// }
// const temp = 20;
// if (temp > 30 || temp <= 0) {
//   console.log("good");
//   // } else if (temp <= 30) {
//   //   console.log("Good");
// } else {
//   console.log("bad");
// }

//nested ternary
// const marks = 50;
// const eng = 83;
// marks > 40
//   ? eng > 80
//     ? console.log("dist")
//     : console.log("pass")
//   : console.log("fail");