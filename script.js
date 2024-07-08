//Array innehållandes flera objekt
let persons = [
  {
    name: "Felicia",
    age: 12,
  },
  {
    name: "Pelle",
    age: 20,
  },
  {
    name: "Peter",
    age: 59,
  },
  {
    name: "Anna",
    age: 32,
  },
  {
    name: "Jocke",
    age: 18,
  },
  {
    name: "Ella",
    age: 3,
  },
];

/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
console.log("Uppgift 1");
let fruits = ["Apple", "Banana", "Mango", "Pineapple", "Orange"];

/* 2 */
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
console.log("Uppgift 2");
let mixedArr = ["Homer", 2, false, null, ["Apple", "Banana"]];

/* 3 */
let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
/* console.log() hur många objekt arrayen ovan innehåller. */
console.log("Uppgift 3");
console.log(`Number of items: ${animals.length}`);

/* 4 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta cat. */
console.log("Uppgift 4");
let cat = animals[0];
console.log(cat);

/* 5 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta funky chihuahua. */
console.log("Uppgift 5");
let funkyChihuahua = animals[3];
funkyChihuahua = animals.find((element) => element === "funky chihuahua");
console.log(funkyChihuahua);

/* 6 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, byt ut hamster mot tiger. */
console.log("Uppgift 6");
// animals[1] = "tiger";
animals.splice(1, 1, "tiger");
console.log(animals);

/* 7 */
let a = [1, 2, 3];
let b = [4, 5, 6];
/* Sätt ihop ovanstående arrayer. */
console.log("Uppgift 7");
let c = a + b;
// let c = a.concat(b);
// a.push(...b);
// console.log(a);
// let c = [...a, ...b];
console.log(c);

/* 8 */
let x = [1, 2, 3, 7, 8, 9];
let y = [4, 5, 6];
/* Merga in array y på index 3 i array x.. */
console.log("Uppgift 8");
// x.splice(3, 0, y);
x.splice(3, 0, ...y);
console.log(x);

/* 9 */
let arr = ["a", "b", "c"];
/* Klona ovanstående array. */
console.log("Uppgift 9");
let arr2 = Array.from(arr);
let arr3 = arr.slice(0);
let arr4 = [...arr];
console.log(arr2, arr3, arr4);

/* 10 */
let fruits2 = ["kiwi", "apple", "pear"];
/* Lägg till en frukt i slutet av arrayen ovan. */
console.log("Uppgift 10");
fruits2.push("banana");
console.log(fruits2);

/* 11 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i början av arrayen ovan. */
console.log("Uppgift 11");
fruits2.unshift("orange");
console.log(fruits2);

/* 12 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort sista frukten i arrayen. */
console.log("Uppgift 12");
fruits2.pop();
console.log(fruits2);

/* 13 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort första frukten i arrayen. */
console.log("Uppgift 13");
fruits2.shift();
console.log(fruits2);

/* 14 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in en frukt i arrayen ovan på index 1. */
console.log("Uppgift 14");
fruits2.splice(1, 0, "mango");
console.log(fruits2);

/* 15 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in, tre frukter i arrayen ovan på index 2. */
console.log("Uppgift 15");
fruits2.splice(2, 0, "strawberry", "watermelon", "papaya");
console.log(fruits2);

/* 16 */
let names = ["David", "Christoffer", "Johan", "Maja"];
/* I arrayen ovan, ta bort Christoffer och Johan. */
console.log("Uppgift 16");
names.splice(1, 2);
console.log(names);

/* 17 */
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* Spegelvänd på arrayen ovan. */
console.log("Uppgift 17");
nums.reverse();
console.log(nums);

/* 18 */
let str = "Supercalifragilisticexpialidocious";
/* Kika om strängen ovan innehåller bokstaven n. */
console.log("Uppgift 18");
console.log(`Includes n: ${str.includes("n")}`);

/* 19 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven x. */
console.log("Uppgift 19");
console.log(`Includes x: ${str.includes("x")}`);

/* 20 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
console.log("Uppgift 20");
console.log(`Index of p: ${str.indexOf("p")}`);

/* 21 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 5 första tecknena. */
console.log("Uppgift 21");
console.log(`First 5: ${str.slice(0, 5)}`);

/* 22 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 7 sista tecknena. */
console.log("Uppgift 22");
console.log(`Last 7: ${str.slice(-7)}`);

/* 23 */
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
console.log("Uppgift 23");
let numsAboveFive = numArray.filter((num) => num > 5);
console.log(numsAboveFive);

/* 24 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
console.log("Uppgift 24");
let numsBelowFive = numArray.filter((num) => num < 5);
console.log(numsBelowFive);

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen längst upp i dokumentet. */
console.log("Uppgift 25");
let eighteenAndOver = persons.filter((person) => person.age >= 18);
eighteenAndOver.forEach((person) => console.log(person.name));

/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst upp i dokumentet. */
console.log("Uppgift 26");
let underEighteen = persons.filter((person) => person.age < 18);
underEighteen.forEach((person) => console.log(person.name));

/* 27 */
let arrPhonetic = ["beta", "alfa", "gamma"];
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log("Uppgift 27");
console.log(arrPhonetic.sort());

/* 28 */
let numsUnsorted = [1, 5, 7, 9, 3, 4, 2, 6, 8];
/* Sortera ovanstående array numeriskt. */
console.log("Uppgift 28");
console.log(numsUnsorted.sort());

/* 29 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, yngst först. */
console.log("Uppgift 29");
console.log(persons.sort((person1, person2) => person1.age - person2.age));

/* 30 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, äldst först. */
console.log("Uppgift 30");
console.log(persons.sort((person1, person2) => person2.age - person1.age));

/* 31 */
/* I person-arrayen längst upp i dokumentet, sortera objekten i bokstavsordning efter deras namn */
console.log("Uppgift 31");
console.log(persons.sort((person1, person2) => person1.name.localeCompare(person2.name)));
// ??

/* 32 */
/* I person-arrayen längst upp i dokumentet, gör om alla namn till versaler. */
console.log("Uppgift 32");
persons.map((person) => (person.name = person.name.toUpperCase()));
console.log(persons);

/* 33 */
/* I person-arrayen längst upp i dokumentet, spegelvänd alla namn. */
console.log("Uppgift 33");
// persons.map((p) => {
//     let temp = Array.from(p.name);
//     p.name = temp.reverse().toString();
// });
persons.map((p) => (p.name = [...p.name].reverse().join("")));
console.log(persons);
// let newName = "Hejsan";
// console.log(`${[...newName].reverse().join("")}`);

/* 34 */
let fruitsSwe = ["apelsin", "päron", "äpple", "kiwi"];
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
console.log("Uppgift 34");
fruitsSwe.forEach((fruit) => console.log(fruit));

/* 35 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
console.log("Uppgift 35");
for (let fruit of fruitsSwe) {
  console.log(fruit);
}

/* 36 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
console.log("Uppgift 36");
for (let i = 0; i < fruitsSwe.length; i++) {
  console.log(fruitsSwe[i]);
}

/* 37 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
console.log("Uppgift 37");
fruitsSwe.forEach((fruit, index) => {
  console.log(`${index}, ${fruit}`);
});
