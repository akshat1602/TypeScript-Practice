//String literal type
type Status = "success" | "error" | "loading";

let currentStatus: Status = "loading";
console.log(currentStatus);


//Function using literal type
type Role = "admin" | "user" | "guest";

function showRole(role: Role): string{
    return `Role is ${role}`;
}

console.log(showRole("admin"));
console.log(showRole("guest"));


//Number literal type
type DiceValue = 1|2|3|4|5|6;

let dice: DiceValue = 4;
console.log(dice);


//Boolean literal type
type LoadingState = true | false;

let isLoading: LoadingState = true;
console.log(isLoading);



//Enum
enum Direction{
    Up,
    Down,
    Left,
    Right,
}

let move: Direction = Direction.Left;

console.log(move);
console.log(Direction[move]);


//String enum
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST",
}

let myRole: UserRole = UserRole.Admin;
console.log(myRole);


//Function with enum
function getAccess(role: UserRole): string{
    if(role === UserRole.Admin){
        return "Full Access";
    }
    if(role === UserRole.User){
        return "Limited Access";
    }
    return "Grant Access";
}

console.log(getAccess(UserRole.Admin));
console.log(getAccess(UserRole.Guest));


//as const
const colors = ["red", "green", "blue"] as const;

console.log(colors);


//Object with as const
const apiStatus = {
    SUCCESS: "success",
    ERROR: "error",
    LOADING: "loading",
}as const;

type ApiStatus = typeof apiStatus[keyof typeof apiStatus];

let statusValue: ApiStatus = "success";

console.log(apiStatus);
console.log(statusValue);



//Mini challenge
type Theme = "light" | "dark";

function applyTheme(theme: Theme): string{
    return `Theme applied: ${theme}`;
}

enum PaymentStatus {
    Pending = "PENDING",
    Paid = "PAID",
    Failed = "FAILED",
}

function checkPayment(status: PaymentStatus): string{
    return `Payment status is ${status}`;
}

console.log(applyTheme("dark"));
console.log(checkPayment(PaymentStatus.Paid));