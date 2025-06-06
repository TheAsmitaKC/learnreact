// function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));

// const array = [1, 2, 3];
// const obj = { ...array };
// console.log(obj);

// let value = 1;

// doSomething(() => {
//   value = 2;
// });

// console.log(value);

//-------spread---------------
//func
// function sum(a, b) {
//   return a + b;
// }
// const numbers = [1, 2];
// const result = sum(...numbers);
// console.log(result);
// //array
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr = [...arr1, 8, 9, 10];
// console.log(arr);
// //obj
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj = { ...obj1, e: 6 };
// console.log(obj);

//--------rest---------------
//func
// function myfunc(a, b, ...rest) {
//   console.log(a, b, rest);
// }
// myfunc(1, 2, 3, 4, 5);

//obj
// const obj1 = { a: 1, b: 2, c: 3 };
// const { a, b, ...remaining } = obj1;
// console.log(remaining);

// //array
// const arr1 = [1, 2, 3];
// const [first, second, ...rest] = arr1;
// console.log(rest);

//callback function

// function greet(name, callback) {
//   console.log("hello" + name);
//   callback();
// }
// function good() {
//   console.log("Goodbye");
// }
// greet("Alice", good);

// function calculate(num1, num2, callback) {
//   return callback(num1, num2);
// }
// const result = calculate(5, 3, function (a, b) {
//   return a + b;
// });
// console.log(result);

//async eg
// console.log("start");
// setTimeout(function () {
//   console.log("code executed after 1 s");
// }, 1000);
// setTimeout(() => {
//   console.log("Second timer (2s)");
// }, 2000);
// console.log("end");

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log("i =", i); // logs 4 three times!
//   }, i * 1000);
// }

//---------promise------------
//resolve
// const p = new Promise((resolve) => {
//   resolve("success");
// });
// p.then((msg) => console.log(msg));

//reject
// const p = new Promise((resolve, reject) => {
//   reject("Something went wrong");
// });
// p.catch((err) => console.log(err));

// function wait() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Resolving...in 2 s");
//     }, 2000);
//   });
// }
// wait().then((msg) => console.log(msg));

// new Promise((resolve) => {
//   resolve(2);
// })
//   .then((result) => result + 2)
//   .then((result) => result + 2)
//   .then((result) => console.log());

// ------------async and await syntax-----------
// async function myfunc() {
//   const result = await somePromise();
//   console.log(result);
// }
// async function greet() {
//   return "hello";
// }
// greet().then(console.log);

//await with promise
// function getnumber() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(32), 1000);
//   });
// }
// async function showNumber() {
//   const num = await getnumber();
//   console.log(num);
// }
// showNumber();

//error handling
// async function getdata() {
//   try {
//     const response = await fetch("https://invalid-url");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error", error.message);
//   }
// }
// getdata();

//multiple awaits
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// async function runseq() {
//   console.log("start");
//   await delay(1000);
//   console.log("end");
// }
// runseq();

//await inside loop
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// async function loop() {
//   for (let i = 1; i < 5; i++) {
//     await delay(1000);
//     console.log(`step ${i}`);
//   }
// }
// loop();

//calling one async function from another
// async function getname() {
//   return { name: "alice" };
// }
// async function showname() {
//   const user = await getname();
//   console.log(user.name);
// }
// showname();

// parallel async
// function getData1() {
//   return new Promise((resolve) => setTimeout(() => resolve("Data 1"), 1000));
// }

// function getData2() {
//   return new Promise((resolve) => setTimeout(() => resolve("Data 2"), 2000));
// }

// async function loadAll() {
//   const [d1, d2] = await Promise.all([getData1(), getData2()]);
//   console.log(d1, d2);
// }

// loadAll();

//fetch basics
//get
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//post
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({ title: "New Post", body: "Hello", userId: 1 }),
//   headers: { "Content-type": "application/json" },
// })
//   .then((res) => res.json())
//   .then(console.log);

//PATCH
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   body: JSON.stringify({ title: "Updated Title" }),
//   headers: { "Content-type": "application/json" },
// })
//   .then((res) => res.json())
//   .then(console.log);

//PUT
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({ title: "New Title", body: "New Body", userId: 1 }),
//   headers: { "Content-type": "application/json" },
// });

//DELETE
// fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "DELETE" });

//promise
// const p = new Promise((resolve) => {
//   console.log("called promise");
// });
// p.then((msg) => console.log(msg));

// const p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "aa", id: 1 });
//   });
// });
// p.then(function (user) {
//   console.log(user);
// });
// const p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "aa", id: 1 });
//     } else {
//       reject("error xa hai");
//     }
//   }, 1000);
// });

// async function getdata() {
//   try {
//     const response = await p;
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getdata();

// const pobj = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let roll = [1, 2, 3, 4, 5];
//     resolve(roll);
//   }, 2000);
// });
// const getdata = (indexdata) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (indexdata) => {
//         let biodata = {
//           name: "aa",
//           age: 22,
//         };
//         resolve(`name is ${biodata.name} and age is ${biodata.age}`);
//       },
//       2000,
//       indexdata
//     );
//   });
// };
// async function getData() {
//   const rollnodata = await pobj;
//   console.log(rollnodata);
//   const datas = await getdata(roll[1]);
//   console.log(datas);
// }
// getData();