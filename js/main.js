/*_____________________________ massiv ________________________________ */
// // 1-masala
// let fruit = ["olma", "anor", 'nok']

// console.log(fruit[0]);
// console.log(fruit[2]);

// // 2-masala

// let cars = ["Mercedes", "Bmw", "tesla", "pagani", "bugatti"];

// cars [4] = 'salom'

// console.log(cars);

// // 3-masala

// let fruit = [];
// fruit.push("olma");
// fruit.push("nok");
// fruit.push("anor");
// fruit.push("anjir");

// console.log(fruit);

// // 4-masala

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.length);

// // 5-masala

// let arr = [1, 2, 3, 4, 5];
// arr.push (6);
// console.log(arr [5] );

// //  6-masala

// let arr = [1, 2, 3, 4, 5, 6];
// arr.pop(6);
// console.log(arr);

// // 7-masala

// let app = ["cal off duty", "free-fire", "subway surfers"];

// app.unshift("pubg monile");

// console.log(app);

// // 8-masala

// let app = ["cal off duty", "free-fire", "subway surfers"];

// app.shift("cal off duty");

// console.log(app);

// 9-masala

/*_______________________________ for loop ____________________________________ */

// // 11-masala

// let arr = [5, 12, 23, 34, 45, 56, 67, 78, 89, 100];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // 12-masala

// let fruit = ["olma", "anor", "gilos", "apelsin", "banan"];

// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// let num = [3, 8, 15, 22, 7, 12, 18, 5, 24, 30];

// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//         console.log(num[i]);
//     }
// }


// let num = [3, 8, 15, 22, 7, 12, 18, 5, 24, 30];

// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 != 0) {
//         console.log(num[i]);
//     }
// }

// let num = [3, 8, 15, 22, 7, 12, 18, 5, 24, 30];

// for (let i = 0; i < num.length; i++) {
//     if (num[i] > 0) {
//         console.log(num[i]);
//     }
// }
let num = [3, 8, 15, 22, 7, 12, 18, 5, 24, 30];

for (let i = num.length - 1; i >=0; i++) {
    console.log(i);
}

// let num = [5, 12, 37, 45, 23, 78, 56, 89, 11, 34];
// sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += num[i];
// }
// console.log(sum);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < num.length; i++) {
//   arr[i] *= 2;
// }
// console.log(num);

// let num = [1, 58, 390, 999, 223, 8];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);
// // 10-MASALA JAVOBI
// let arr = [10, 58, 30, 49, 83, 8];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);
// // 11-MASALA JAVOBI
// let arr = [-5, 3, -2, 8, -1, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     console.log(arr[i]);
//   }
// }
// // 12-MASALA JAVOBI
// let arr = [-5, 3, -2, 8, -1, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     sum += arr[i];
//   }
// }
// alert(sum);
// // 13-MASALA JAVOBI
// let arr = [13, 223, 123, 3124, 54, 234];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`${arr[i]}  ${i} `);
// }
// // 14-MASALA JAVOBI
// let arr = [5, -3, 10, 0, 25, -8, 15];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(`${arr[i]} ${i}`);
// }
// // 15-MASALA JAVOBI
// let arr = [5, -3, 10, 0, 25, -8, 15];
// for (let i = 1; i < arr.length; i++) {
//   console.log(arr[i]);
// }