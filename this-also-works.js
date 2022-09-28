function Person(name) {
   this.name = name
}

// create an object
const person = new Person("Andreas");
console.log(person)
// Output: Person { name: 'Andreas' }
// A discussion, why this also works but this is still not recommended can be found on stackoverflow: 
// https://stackoverflow.com/questions/61468113/typescript-is-it-possible-to-declare-a-class-using-function
