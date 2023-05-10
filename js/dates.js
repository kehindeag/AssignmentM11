//STEP 1
var date = new Date();
date.setMonth(date.getMonth() + 1);
date.setDate(0);

console.log(date.getDate());

//STEP 2
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(`Month name: ${monthNames[date.getMonth()]}`);
//STEP 3
if (date.getDay() !== 0 || date.getDay() !== 7) {
  console.log(`${date.toDateString()} is not a weekend`);
} else {
  console.log(`${date.toDateString()} is a weekend`);
}
//STEP 4
let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

console.log(`Yesterday is : ${dayNames[date.getDay() - 1]}`);

//STEP 5
console.log(
  `First letter of the day is : ${dayNames[date.getDay()].charAt(0)}`
);
