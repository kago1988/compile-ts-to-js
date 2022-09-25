var Person = (function (name) {
    // name is NOT available here. An error will be thrown. 
    console.log(name);
}());

// create an object
const person = new Person("Andreas");
console.log(person)
// Output: "TypeError: Person is not a constructor"
