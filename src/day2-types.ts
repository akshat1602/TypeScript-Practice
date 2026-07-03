//any vs typed variable
let randomValue: any = "hello";
randomValue = 54;
randomValue = true;

let properName: string = "Akshat";
console.log(randomValue);
console.log(properName);


//unknown
let userInput: unknown = "TypeScript";

if(typeof userInput === "string"){ //We have to check type before using it.
    console.log(userInput.toUpperCase());
}


// Union type
let id: string | number;

id = 102;
console.log(id);

id = "Abc12";
console.log(id);


//Function with union type
function printId(id: number | string): void{
    console.log("User ID : ", id);
}

printId(123);
printId("abc17x");
// printId(true); Error unacceptable data type for func args.


//Type alias for object
type Student = {
    name: string;
    age: number;
    isActive: boolean;
};

let student1: Student = {
    name: "Akshat",
    age: 23,
    isActive: true,
};

console.log(student1);


//Function using type alias
type Product = {
    title: string;
    price: number;
};

function showProduct(product: Product): string{
    return `${product.title} costs Rs. ${product.price}`;
}

console.log(showProduct({title: "Mouse", price: 899}));


//Optional property
type User = {
    name: string;
    email?: string; //optional : ?. 
};

let user1: User = {name: "Akshat"};
let user2: User = {name: "Alfee", email: "alfeekhan20@gmail.com"};

console.log(user1);
console.log(user2);


//Mixed object with union values
type Order = {
    orderId: string | number;
    amount: number;
    status: "pending" | "completed";
};

let order1: Order = {
    orderId: "ORD1",
    amount: 501,
    status: "pending",
};

console.log(order1);


// challenge exercise
type Employee = {
    id: number | string;
    name: string;
    department: string;
    salary?: number;
};

function getEmployeeInfo(emp: Employee): string{
    return `${emp.name} works in ${emp.department} department`;
}

console.log(getEmployeeInfo({id: 101, name: "Akshat", department: "Development"}));