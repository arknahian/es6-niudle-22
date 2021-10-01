class Parent{
    constructor(){
        this.fatherName = "Holland";
    }
}

class Child extends Parent{
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
    getFullName(){
        return `${this.name} ${this.fatherName}`
    }
}

const person = new Child("Tom", 15);
console.log(person);

const fullName = person.getFullName();
console.log(fullName);