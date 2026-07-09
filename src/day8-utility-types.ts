interface User{
    id: number;
    name: string;
    email: string;
    age?: number;
}


//Partial
type PartialUser = Partial<User>;

const partialUser1: PartialUser = {
    name: "Akshat",
}
console.log(partialUser1);


//Required
type RequiredUser = Required<User>;

const requiredUser1: RequiredUser = {
    id: 1,
    name: "Alfee",
    email: "alfee20@gmail.com",
    age: 21,
};
console.log(requiredUser1);


//Readonly
type ReadonlyUser = Readonly<User>;

const readonlyUser1: ReadonlyUser = {
  id: 2,
  name: "Sakshi",
  email: "sakshi@example.com",
  age: 21,
};
console.log(readonlyUser1);


//Pick
type UserPreview = Pick<User, "id" | "name">;

const previewUser1: UserPreview = {
    id: 3,
    name: "Priya",
};
console.log(previewUser1);


//Omit
type UserWithoutEmail = Omit<User, "email">;

const userWithoutEmail1: UserWithoutEmail = {
    id: 4,
    name: "Aman",
    age: 23,
};
console.log(userWithoutEmail1);


//Record
type StudentMarks = Record<string, number>;

const marks: StudentMarks = {
    Math: 90,
    English: 85,
    Science: 80,
};
console.log(marks);


//Exclude
type status = "success" | "error" | "loading";
type FinalStatus = Exclude<status, "loading">;

const status1: FinalStatus = "success";
const status2: FinalStatus = "error";

console.log(status1);
console.log(status2);


//ReturnType
function getUserInfo() {
    return{
        id: 10,
        name: "Karan",
        active: true,
    };
}

type UserInfo = ReturnType<typeof getUserInfo>;

const userInfo1: UserInfo = {
    id: 10,
    name: "Karan",
    active: true,
};
console.log(userInfo1);


//Parameters
function greetUser(name: string, age: number): string{
    return `Hello ${name}, age ${age}`;
}

type GreetParams = Parameters<typeof greetUser>;

const greetArgs: GreetParams = ["Akshat", 23];

console.log(greetUser(...greetArgs));



//Mini challenge
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
}

type ProductCard = Pick<Product, "id" | "title" | "price">;
type ProductDraft = Partial<Product>;

const productCard1: ProductCard = {
    id: 100,
    title: "Laptop",
    price: 60000,
};

const productDraft1: ProductDraft = {
    title: "Phone",
};

console.log(productCard1);
console.log(productDraft1);