//string return type
function greet(name: string): string{
    return `Hello ${name}`;
}
console.log(greet("Akshat"));


//number return type
function add(a: number, b: number): number{
    return a+b;
}
console.log(add(8, 7));


//void return type
function logMessage(message: string):  void{
    console.log(message);
}
logMessage("Hi, I am learning new tech");


//function with object return
type User = {
    name: string;
    age: number;
};

function createUser(name: string, age: number): User{
    return{name, age};
};
console.log(createUser("Alfee", 21));


//function with union return
function getResult(score: number): string | number{
    if(score >= 40){
        return "Pass";
    }
    return 0;
};
console.log(getResult(35));


//arrow function return type
const multiply = (a: number, b: number): number | string => {
    return `Multiplicative answer is: ${a*b}`;
};
console.log(multiply(6, 9));


//optional parameter
function welcome(name: string, title?: string): string{
    if(title){
        return `Welcome ${title} ${name}`;
    }
    return `Welcome ${name}`;
};
console.log(welcome("Aman"));
console.log(welcome("Alfee", "Ms."));


//mini challenge
function getResult2(name: string, marks: number): string{
    if(marks >= 40) return "Pass";
    return "Fail";
}
console.log(getResult2("Akshat", 50));
