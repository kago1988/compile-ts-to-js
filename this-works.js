var Person = (function () {
    // it seems like "name" should be an argument in the function above, but 
    function Person(name) {
        // "name" is also available here, because "Person" is a constructor function
       this.name = name
    }
    return Person;
    // The constructor function is being returned here. 
}());

// create an object
const person = new Person("Andreas");
console.log(person)
// Output: Person { name: 'Andreas' }
