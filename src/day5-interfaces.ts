// basic interface
interface User{
    name: string;
    age: number;
}

const user1: User = {
    name: "Akshat",
    age: 23,
};
console.log(user1);


//optional property
interface Student {
  name: string;
  rollNo: number;
  email?: string;
}

const student1: Student = {
  name: "Akshat",
  rollNo: 101,
};
console.log(student1);


//interface in function
interface Product {
  title: string;
  price: number;
}

function showProduct(product: Product): string {
  return `${product.title} costs Rs.${product.price}`;
}
console.log(showProduct({title: "Keyboard", price: 999}));


//nested interface
interface Address{
    city: string;
    pincode: number;
}

interface Customer{
    name: string;
    address: Address;
}

const customer1: Customer = {
    name: " Akshat",
    address: {
        city: "Lucknow",
        pincode: 226022,
    },
};

console.log(customer1);


//extend interface
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

const emp1: Employee = {
    name: "Rahul",
    age: 24,
    employeeId: 503,
    department: "IT",
};

console.log(emp1);


//type alias version
type Book = {
  title: string;
  author: string;
  pages: number;
  rating?: number;
};

function bookInfo(book: Book): string {
  return `${book.title} by ${book.author}`;
}

console.log(bookInfo({title: "My love!", author: "Akshat", pages: 670}));


//union of object shapes
interface Car{
    type: "car";
    wheels: number;
}

interface Bike{
    type: "bike";
    wheels: number;
}

function showVehicle(vehicle: Car | Bike): void{
    console.log(vehicle.type, vehicle.wheels);
}
showVehicle({ type: "car", wheels: 4 });
showVehicle({ type: "bike", wheels: 2 });


//Mini challenge
type Course = {
  title: string;
  duration: number;
  level: "beginner" | "intermediate" | "advanced";
  mentor?: string;
};

function courseSummary(course: Course): string {
  if (course.mentor) {
    return `${course.title} is a ${course.level} course of ${course.duration} hours by ${course.mentor}`;
  }
  return `${course.title} is a ${course.level} course of ${course.duration} hours`;
}

console.log(
  courseSummary({
    title: "TypeScript Basics",
    duration: 12,
    level: "beginner",
    mentor: "Akshat",
  })
);


// Day 5: Interfaces and Object Typing

// Interface is used to define the shape of an object.
// It tells what properties and methods an object should have.
// Interfaces help make code more structured and readable.
// A type alias can also define object shapes.
// interface is often preferred when you want to describe object structure clearly.
// Optional properties are marked with ?.
// Interfaces can be used in function parameters.
// Interfaces can be extended using extends.
// Nested objects can also be typed using interfaces.
// Interfaces help in reusability when the same object structure is used multiple times.
// Type aliases are also useful for object shapes, unions, and complex custom types.
// interface and type are similar for object typing, but interfaces are better for extendable object contracts.
// Object typing helps catch errors like missing or wrong properties early.
// Interfaces are widely used in React, API responses, and data modeling.
// They are very important for interview questions about TypeScript.