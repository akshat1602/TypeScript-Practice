//basic class
class User{
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
}
const user1 = new User("Akshat", 23);
console.log(user1);



//class method
class Product{
    title: string;
    price: number;

    constructor(title: string, price: number){
        this.title = title;
        this.price = price;
    }

    getInfo(): string{
        return `${this.title} costs Rs.${this.price}`;
    }
}
const prod1 = new Product("Mouse", 1099);
console.log(prod1.getInfo());



//private member
class BankAccount{
    private balance: number;

    constructor(balance: number){
        this.balance = balance;
    }

    deposit(amount: number): void{
        this.balance += amount;
    }

    getBalance(): number{
        return this.balance;
    }
}
const acc1 = new BankAccount(1500);
acc1.deposit(600);
console.log(acc1.getBalance());



//readonly
class Course{
    readonly courseId: number;
    title: string;

    constructor(courseId: number, title: string){
        this.courseId = courseId;
        this.title = title;
    }
}
const course1 = new Course(101, "TypeScript Basics");
console.log(course1);



//shorthand constructor
class Student{
    constructor(public name: string, public rollNo: number){}

    show(): string{
        return `${this.name} has roll number ${this.rollNo}`;
    }
}
const student1 = new Student("Rahul", 12);
console.log(student1.show());



//inheritance
class Person{
    constructor(public name: string){}

    greet(): string{
        return `Hello, ${this.name}`;
    }
}

class Employee extends Person{
    constructor(name: string, public department: string){
        super(name);
    }

    info(): string{
        return `${this.name} works in ${this.department}`;
    }
}
const emp1 = new Employee("Akshat", "Development");
console.log(emp1.greet());
console.log(emp1.info());



//mini challenge
class Todo{
    constructor(
        public id: number,
        public task: string,
        public completed: boolean,
    ) {}

    toggle(): void{
        this.completed = !this.completed;
    }

    status(): string{
        return this.completed ? "Done" : "Pending";
    }
}
const todo1 = new Todo(1, "Learn TypeScript", false);
console.log(todo1.status());
todo1.toggle();
console.log(todo1.status());


// Day 6: Classes in TypeScript

// Class is a blueprint used to create objects.
// Object is an instance of a class.
// A class can contain properties and methods.
// constructor is a special method used to initialize values.
// this refers to the current object of the class.
// Methods are functions defined inside a class.
// public members can be accessed from outside the class.
// private members can be accessed only inside the class.
// readonly properties can be assigned only once.
// extends is used to create a child class from a parent class.
// super() is used to call the parent class constructor.
// Class inheritance helps reuse code.
// Shorthand constructor syntax reduces boilerplate.
// Classes are useful for modeling real-world entities like users, products, accounts, and tasks.
// Classes improve code organization and reusability.