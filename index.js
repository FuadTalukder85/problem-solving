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
