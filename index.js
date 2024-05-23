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
console.log(AllFemales(person));

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

console.log(BookTitle(books));

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
console.log(result);
