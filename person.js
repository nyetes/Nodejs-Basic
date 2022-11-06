class Person {
    constructor(name, age){
    this.name ='Nitesh',
   this.age = 22
    }

    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

module.exports = Person;