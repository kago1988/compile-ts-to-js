// it seems like "name" should be an argument in the function above, but 
function Person(name) {
      // "name" is also available here, because "Person" is a constructor function
   this.name = name
}

// create an object
const person = new Person("Andreas");
console.log(person)
// Output: Person { name: 'Andreas' }
// A discussion, why this also works but this is still the "wrong" compilation can be 
// found on stackoverflow: 
// https://stackoverflow.com/questions/61468113/typescript-is-it-possible-to-declare-a-class-using-function
