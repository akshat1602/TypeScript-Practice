// Exercise 1: Interface + object
interface User{
    id: number;
    name: string;
    role: "admin" | "user";
}

const user1: User = {
    id: 1,
    name: "Akshat",
    role: "admin",
};
console.log(user1);


// Exercise 2: Function + return type
function greetUser(name: string): string{
    return `Hello, how are you ${name}!!`;
}
console.log(greetUser("Akshat"));



// Exercise 3: Union + narrowing
function printId(id: string | number): void{
    if(typeof id === "string"){
        console.log(`String ID: ${id.toUpperCase()}`);
    }
    else{
        console.log(`Number ID: ${id.toFixed(0)}`);
    }
}
printId("101d");
printId(101);


// Exercise 4: Class + method
class Product{
    constructor(
        public id: number,
        public title: string,
        public price: number
    ) {}

    getInfo(): string {
        return `${this.title} costs Rs. ${this.price}`;
    }
}

const product1 = new Product(101, "Laptop", 50000);
console.log(product1.getInfo());



// Exercise 5: Generic function
function wrapInArray<T>(value: T): T[]{
    return[value];
}
console.log(wrapInArray<string>("TypeScript"));
console.log(wrapInArray<number>(100));



// Exercise 6: Utility type
interface Employee{
    id: number;
    name: string;
    department: string;
    email: string;
}

type EmployeePreview = Pick<Employee, "id" | "name">;

const empPreview1: EmployeePreview = {
    id: 1,
    name: "Rahul",
};
console.log(empPreview1);



// Exercise 7: Enum
enum PaymentStatus {
  Pending = "PENDING",
  Paid = "PAID",
  Failed = "FAILED",
}

function checkPaymentStatus(status: PaymentStatus): string{
    return `Current payment status: ${status}`;
}
console.log(checkPaymentStatus(PaymentStatus.Paid));



// Exercise 8: Literal type
type Theme = "light" | "dark";

function applyTheme(theme: Theme): string{
    return `Theme applied ${theme}`;
}
console.log(applyTheme("dark"));



//// Exercise 9: Readonly
type ReadonlyUser = Readonly<User>;

const readonlyUser1: ReadonlyUser = {
    id: 2,
    name: "Sakshi",
    role: "user",
};
console.log(readonlyUser1);



// Exercise 10: Mini challenge - combine multiple concepts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

type OrderStatus = "placed" | "shipped" | "delivered";

class Order{
    constructor(
        public orderId: number,
        public customerName: string,
        public status: OrderStatus,
    ){}

    getSummary(): string{
        return `Order ${this.orderId} for ${this.customerName} is ${this.status}`;
    }
}

function createResponse<T>(data: T): ApiResponse<T>{
    return{
        success: true,
        data,
    };
}

const order1 = new Order(5001, "Akshat", "shipped");
const response1 = createResponse<Order>(order1);

console.log(order1.getSummary());
console.log(response1);