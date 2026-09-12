import { finder } from "./data";
const array = [
  115, //0
  "udwhf", //1
  "743", //2
  true, //3
  Infinity, //4
  7932177754842617984356892564397541294357921, //5
  null, //6
  undefined, //7
  Symbol(677 - 6767 - 6766 - 46 - 789), //8
  { name: "ath", age: 12 }, //9
];

console.log(finder(array, 5)); //7932177754842617984356892564397541294357921
