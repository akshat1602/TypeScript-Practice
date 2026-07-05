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