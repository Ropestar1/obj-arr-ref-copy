// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // output: (100, 100)
age = 200;
console.log(age, age2); // output: (200, 100)

let name = 'Wes';
let name2 = name;
console.log(name, name2); // output: (Wes, Wes)
name = 'Wesley';
console.log(name, name2); // output: (Wesley, Wes)
// NOTE: above section of examples is different when arrays are used. With arrays (see below), if new variable assignments that point to an array are REFERENCING the array and not making a copy of the array.

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it. NOTE(FYI): this actually is an array reference, not a copy.
const team = players;
console.log(players, team);

// You might think we can just do something like this:

/* EXAMPLE:
team[3] = 'Lux';
console.log('%cARRAY REFERENCE EXAMPLE', 'color: blue;');
console.log('TEAM', team);
console.log('PLAYERS', players);
*/

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice(); // makes copy of entire array if no arguments set.
team2[3] = 'Lux';
console.log('TEAM2', team2);
console.log('PLAYERS', players);
// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
// or use the new ES6 Spread
const team4 = [...players];

// or use Array method (is method the right word?)
const team5 = Array.from(players);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
}

// and think we make a copy: NOTE: below doesn't work!
const captain = person;
// captain.number = 99; // NOTE: this line is updating the original person object. Object reference.

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99});
console.log('captain', captain);
console.log('cap2', cap2);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.


// above examples can only be used for 1 level deep.
const roper = {
  name: 'Roper',
  age: 100,
  social: {
      twitter: '@roper',
      facebook: 'roper.fb'
  }
};

console.log(roper);

const dev2 = JSON.parse(JSON.stringify(roper));
//above code makes it so you can edit the copied object how ever deep the key/value is nested...not recommended, but doable.
