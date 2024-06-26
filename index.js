// 1. Task: Array Filtering And Mapping
// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const person = [
  { name: "Fuad", age: 25, gender: "male" },
  { name: "Sokina", age: 18, gender: "female" },
  { name: "Taluder", age: 20, gender: "male" },
  { name: "Jorina", age: 19, gender: "female" },
];

const AllFemales = (person) => {
  const males = person.filter((male) => male.gender === "male");
  const male = males.map((male) => male.name);
  return male;
};
// console.log(AllFemales(person));

// 2. Task: Object Manipulation
// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  { title: "amar boi", author: "Fuad", year: "5 may 2024" },
  { title: "tomar boi", author: "Talukder", year: "4 may 2023" },
];

const BookTitle = (books) => {
  const title = books.map((bookTile) => bookTile.title);
  return title;
};

// console.log(BookTitle(books));

// 3. Task: Function Composition
// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const square = (number) => number * number;
const double = (number) => number * 2;
const addFive = (number) => number + 5;

const totalNumber = (number) => {
  const squared = square(number);
  const doubled = double(squared);
  const five = addFive(doubled);
  return five;
};

const result = totalNumber(5);
// console.log(result);

// 4. Task: Sorting Objects
// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  { make: "Honda", model: "Civic 1.5L 11th gen", year: 2024 },
  { make: "Honda", model: "Civic Type R", year: 2020 },
  { make: "Honda", model: "Civic FD2", year: 2010 },
];

const sortData = [...cars].sort((a, b) => a.year - b.year);
// console.log(sortData);

// 5. Task: Find And Modify
// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

// 6 .Task: Array Reduction
// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const number = [2, 4, 6, 9, 2, 11];

const evenNum = (arr) => {
  return arr.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    } else {
      return sum;
    }
  }, 0);
};
const evenNumbers = evenNum(number);
console.log(evenNumbers);
