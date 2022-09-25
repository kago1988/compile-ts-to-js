class Person { 
    name: string; 
    constructor(name: string) {
       this.name = name
    }
 }

const person = new Person("Andreas");
console.log(person)
// Output: Person { name: 'Andreas' }
