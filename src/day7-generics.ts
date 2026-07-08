//Generic function
function identity<T> (value: T): T{
    return value;
}
console.log(identity<string>("Akshat"));
console.log(identity<number>(21));



//Generic array function
function getFirstElement<T>(arr: T[]): T | undefined{
    return arr[0];
}
console.log(getFirstElement<number>([10, 20, 30]));
console.log(getFirstElement<string>(["a", "b", "c"]));



//Generic type alias
type ApiResponse<T> = {
    success: boolean;
    data: T;
};

const userResponse: ApiResponse<{name: string; age: number}> = {
    success: true,
    data: {
        name: "Akshat",
        age: 23,
    },
};
console.log(userResponse);



//Generic interface
interface Box<T>{
    value: T;
}

const numberBox: Box<number> = {value: 100};
const stringBox: Box<string> = {value: "TypeScript"};

console.log(numberBox);
console.log(stringBox);



//Generic class
class Container<T>{
    constructor(public item: T) {}

    getItem(): T{
        return this.item;
    }
}

const c1 = new Container<string>("Book");
const c2 = new Container<number>(500);

console.log(c1.getItem());
console.log(c2.getItem());



//Generic with multiple types
function pair<K, V>(key: K, value: V): {key: K, value: V}{
    return {key, value};
}
console.log(pair<string, number>("age", 21));
console.log(pair<number, string>(1, "one"));



//Generic constraint
function getLength<T extends {length: number}>(item: T): number{
    return item.length;
}
console.log(getLength("Akshat"));
console.log(getLength([1, 2, 3, 4]));



//Mini challenge
type Result<T> = {
    status: "success" | "error";
    value: T;
}

function createResult<T>(status: "success" | "error", value: T):
Result<T>{
    return {status, value};
}
console.log(createResult<string>("success", "Data fetched"));
console.log(createResult<number>("success", 200));