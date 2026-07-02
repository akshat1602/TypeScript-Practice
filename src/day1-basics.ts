//Basic Variables
let studentName: string = "Akshat";
let age: number = 23;
let isLearning: boolean = true;

console.log(studentName);
console.log(age);
console.log(isLearning);


//Type inference
let city = "Lucknow";
let marks = 85;
let passed = true;

console.log(city, marks, passed);


// Function with types
function greet(name: string): string{
    return  `Hello, ${name}`;
}

console.log(greet("Akshat"));


//Arrays
let skills: string[] = ["HTML", "CSS", "JavaScript", "React"];
let scores: number[] = [80, 85, 90];

console.log(skills);
console.log(scores);


//Typed object
let user: {name: string; age: number; isAdmin: boolean} = {
    name: "Akshat",
    age: 23,
    isAdmin: false
};
console.log(user);


//Interface
interface User{
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}

const admin: User = new UserAccount("Akshat", 55);
console.log(admin);