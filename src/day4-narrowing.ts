//typeof narrowing
function printValue(value: string | number): void{
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    }
    else{
        console.log(value.toFixed(2));
    }
}
printValue("Akshat");
printValue(89);


// in operator
type Admin = {
    name: string;
    role: "admin";
    permissions: string[];
};

type User = {
    name: string;
    role: "user";
    email: string;
};

function showPerson(person: Admin | User): void{
    console.log(person.name);

    if("permissions" in person) console.log(person.permissions);
    else console.log(person.email);
}


// custom type guard
type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(animal: Fish | Bird): animal is Fish{
    return "swim" in animal;
}


//narrowing with real object
type Circle = {kind: "circle"; radius: number};
type Square = {kind: "square"; side: number};

function getArea(shape: Circle | Square): number{
    if(shape.kind === "circle") return Math.PI * shape.radius * shape.radius;
    return shape.side * shape.side;
}


//null check
function getLength(text: string | null) : number{
    if(text === null) return 0;
    return text.length;
}


//mini challenge
function challenge(value: string | number | null): string{
    if(value === null) return "No value";
    if(typeof value === "string") return value.toUpperCase();
    return value.toFixed(1);
}


// Exercise 1: typeof narrowing
// You passed string | number into one function, then checked the actual runtime type. If it’s a string, you can call string methods like toUpperCase(); if it’s a number, you can use number methods like toFixed() 
// .

// Exercise 2: in operator
// Here, Admin | User is a union of two object shapes. The in check lets TypeScript know which object you have by checking whether a property exists, so you can safely access either permissions or email 
// .

// Exercise 3: custom type guard
// A custom type guard is a function that tells TypeScript what the real type is. animal is Fish means: if the function returns true, TypeScript should treat the value as Fish.

// Exercise 4: discriminated union
// kind: "circle" and kind: "square" are tags that help TypeScript narrow the type correctly. This is one of the cleanest ways to handle multiple object shapes.

// Exercise 5: null check
// This shows a very common pattern: check for null before using a value. Without the check, text.length would be unsafe if text is missing.

// Exercise 6: mini challenge
// This combines all the above ideas: check null, then check string, otherwise treat it as number. It’s a very good practice exercise because it mirrors real input handling in forms and APIs.

// Day 5 exercises
// Day 5 should move to interfaces and object typing, because after narrowing you should learn how to define reusable object shapes properly.