# TypeScript Notes

## Day 1: Basics

### What I learned
- TypeScript adds static typing to JavaScript.
- Learned basic primitive types: `string`, `number`, `boolean`.
- Practiced typed variables, functions, arrays, and objects.
- TypeScript catches type mistakes before runtime.
- Learned the JavaScript programming part of the docs.

### Interview revision points
- TypeScript is a superset of JavaScript.
- It adds static typing and better tooling support.
- Primitive types include `string`, `number`, and `boolean`.
- Arrays can be typed like `string[]` or `number[]`.
- Functions can have typed parameters and return types.
- Object typing helps define required properties clearly.

---

## Day 2: Everyday Types

### What I learned
- Learned the difference between `any` and `unknown`.
- `any` removes type safety.
- `unknown` is safer because it requires checking before use.
- Learned union types like `string | number`.
- Practiced type aliases for reusable custom types.
- Learned optional properties using `?`.
- Improved object typing and function parameter typing.

### Interview revision points
- `any` disables type checking and should be avoided.
- `unknown` is safer than `any`.
- Union types allow multiple possible types in one variable.
- Type aliases create reusable custom types.
- Optional properties are written with `?`.
- TypeScript helps model flexible but safe data structures.

---

## Day 3: Functions and Return Types

### What I learned
- Learned return type annotations in functions.
- TypeScript can infer return types automatically.
- Explicit return types improve clarity and safety.
- Practiced functions returning `string`, `number`, `void`, objects, and unions.
- Learned arrow function return type syntax.
- Understood why return types help catch logic mistakes early.

### Interview revision points
- Return type annotation is written after function parameters.
- TypeScript can infer return types, but explicit types improve readability.
- `void` is used when a function returns nothing.
- Functions can return objects and union types.
- Return typing makes function contracts clearer.

---

## Day 4: Narrowing

### What I learned
- Learned narrowing in TypeScript.
- Used `typeof` to narrow primitive union types.
- Used the `in` operator to narrow object unions.
- Practiced null checking before using a value.
- Learned discriminated unions using a common property like `kind`.
- Understood custom type guards and why they are useful.
- Narrowing helps TypeScript safely understand the real type of a value.

### Interview revision points
- Narrowing means reducing a broader type to a more specific type.
- `typeof` is used for primitive type narrowing.
- `in` is used for object property-based narrowing.
- Null checks prevent unsafe access on missing values.
- Discriminated unions use a common literal field to identify type.
- Custom type guards improve reusable type checking logic.

---

## Day 5: Interfaces and Object Typing

### What I learned
- Learned interfaces to define the shape of objects.
- Practiced optional properties in interfaces.
- Used interfaces in function parameters.
- Learned nested interfaces for objects inside objects.
- Learned interface extension using `extends`.
- Compared interfaces and type aliases for object typing.
- Interfaces improve reusability, readability, and type safety.

### Interview revision points
- Interface defines the structure of an object.
- Optional properties in interfaces use `?`.
- Interfaces can be used in function parameters.
- Nested interfaces type objects inside objects.
- `extends` is used to build one interface from another.
- `interface` is commonly used for object contracts.
- `type` and `interface` are similar for object typing, but interfaces are more extendable.

---

## Day 6: Classes

### What I learned
- Learned classes in TypeScript.
- Understood that a class is a blueprint for creating objects.
- Practiced constructors, properties, and methods.
- Learned access modifiers: `public`, `private`, and `readonly`.
- Used shorthand constructor syntax.
- Learned inheritance using `extends`.
- Learned `super()` to call the parent constructor.
- Classes help organize reusable data and behavior together.

### Interview revision points
- Class is a blueprint used to create objects.
- Object is an instance of a class.
- Constructor is used to initialize object data.
- Methods define behavior inside a class.
- `public` members are accessible everywhere.
- `private` members are accessible only inside the class.
- `readonly` properties cannot be changed after assignment.
- `extends` is used for inheritance.
- `super()` calls the parent constructor.
- Classes help combine data and behavior in one structure.

---

## Day 7: Generics

### What I learned
- Learned generics in TypeScript.
- Generics make code reusable while keeping type safety.
- Generic types are written using angle brackets like `<T>`.
- Practiced generic functions, generic interfaces, generic type aliases, and generic classes.
- Learned that generics keep input and output types connected.
- Learned multiple generic parameters like `<K, V>`.
- Learned generic constraints using `extends`.
- Generics are useful when the same logic should work with different data types.

### Interview revision points
- Generics allow writing reusable and type-safe code.
- `<T>` is a generic type parameter.
- Generic functions keep the return type linked to the input type.
- Generic interfaces and classes can work with different data types.
- Multiple generic parameters can be used, such as `<K, V>`.
- Constraints like `T extends { length: number }` restrict allowed types.
- Generics are better than `any` because they preserve type information.

---

## Day 8: Utility Types

### What I learned
- Learned utility types in TypeScript.
- Utility types help transform existing types into new useful forms.
- Practiced `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, `ReturnType`, and `Parameters`.
- `Partial<T>` makes all properties optional.
- `Required<T>` makes all properties required.
- `Readonly<T>` makes all properties read-only.
- `Pick<T, K>` selects only specific properties from a type.
- `Omit<T, K>` removes specific properties from a type.
- `Record<K, T>` creates an object type with fixed key and value types.
- `Exclude<T, U>` removes types from a union.
- `ReturnType<T>` gets the return type of a function.
- `Parameters<T>` gets the parameter types of a function as a tuple.
- Utility types reduce repetition and make code more reusable.

### Interview revision points
- Utility types are built-in TypeScript helpers for transforming types.
- `Partial<T>` makes all object properties optional.
- `Required<T>` makes all object properties mandatory.
- `Readonly<T>` prevents modification of properties.
- `Pick<T, K>` extracts selected keys from a type.
- `Omit<T, K>` removes selected keys from a type.
- `Record<K, T>` is useful for key-value object structures.
- `Exclude<T, U>` removes members from a union type.
- `ReturnType<T>` gets a function’s return type.
- `Parameters<T>` gets a function’s parameter types.
- Utility types are very useful in APIs, forms, React props, and data transformations.

---

## Day 9: Literal Types, Enums, and as const

### What I learned
- Learned literal types in TypeScript.
- Literal types allow exact fixed values instead of broad types.
- Practiced string, number, and boolean literal types.
- Learned unions of literal types like `"success" | "error" | "loading"`.
- Learned enums as named sets of constants.
- Practiced numeric enums and string enums.
- Learned that string enums are usually more readable in real projects.
- Used enums inside functions for controlled logic.
- Learned `as const` to make values more specific and readonly.
- Understood how `as const` helps preserve exact literal values.
- Learned that literal types and enums are useful for status values, roles, themes, and configuration.

### Interview revision points
- Literal types restrict a value to exact allowed values.
- String literal unions are often used instead of broad `string`.
- Number literal types can restrict numeric values to fixed options.
- Boolean literal types can represent exact `true` or `false`.
- Enums are named collections of constant values.
- Numeric enums auto-increment by default.
- String enums are more readable and common in application code.
- Enums help avoid magic strings in code.
- `as const` makes object and array values readonly and preserves exact literal values.
- `as const` is useful when deriving types from objects.
- Literal unions are often preferred for simple fixed values.

---

## Day 10: Mixed Revision

### What I learned
- Revised multiple TypeScript concepts together in one file.
- Practiced interfaces, functions, unions, narrowing, classes, generics, utility types, enums, and literal types.
- Understood how TypeScript concepts are combined in real code instead of used separately.
- Revisited `Pick` and `Readonly` as practical utility types.
- Used a generic API response type with a class-based object.
- Strengthened understanding of typed return values and reusable structures.
- Mixed revision improved confidence in syntax and concept recall.

### Interview revision points
- Real TypeScript code often combines multiple concepts together.
- Interfaces define structure, while classes can add behavior.
- Generic types help keep code reusable and type-safe.
- Utility types reduce duplication in object type transformations.
- Enums and literal unions help model restricted sets of values.
- Narrowing is important when handling union types safely.
- Mixed practice is useful for checking true understanding of TypeScript concepts.

---

## Quick Overall Revision

### Core concepts covered
- Basic types
- Arrays
- Objects
- Functions
- Return types
- Union types
- Type aliases
- Interfaces
- Narrowing
- Classes
- Generics
- Utility types
- Literal types
- Enums
- `as const`

### Most important interview concepts so far
- TypeScript vs JavaScript
- `any` vs `unknown`
- Union types
- Return type annotations
- Narrowing
- Interfaces
- Class basics
- Access modifiers
- Inheritance
- Generics
- Utility types
- Literal types
- Enums
- `as const`