# TypeScript Learning

This repo tracks my TypeScript learning journey day by day through documentation, hands-on exercises, and small coding practice.

## Goal
Build a strong TypeScript foundation through:
- official documentation
- daily exercises
- GitHub practice
- revision notes
- mini project preparation

## Learning Approach
The main learning pattern in this repo is:
1. Read one concept from the TypeScript docs
2. Practice it with code exercises
3. Run the code and check outputs
4. Write short notes for revision
5. Push daily progress to GitHub

## Progress
- Day 1: Setup, TypeScript project structure, basic types, arrays, objects, functions
- Day 2: `any`, `unknown`, union types, type aliases, object typing, optional properties
- Day 3: function return type annotations, `void`, arrow functions, object return types
- Day 4: narrowing, `typeof`, `in`, null checks, discriminated unions, custom type guards
- Day 5: interfaces, optional properties, nested interfaces, extending interfaces, object typing with interfaces and type aliases
- Day 6: classes, constructors, methods, `public`, `private`, `readonly`, shorthand property syntax, inheritance, `super()`
- Day 7: generics, generic functions, generic interfaces, generic classes, generic constraints
- Day 8: utility types like `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, `ReturnType`, and `Parameters`
- Day 9: literal types, union literal types, enums, string enums, numeric enums, and `as const`

## Current Folder Structure

```bash
typescript-learning/
├── dist/
├── node_modules/
├── src/
│   ├── day1-basics.ts
│   ├── day2-types.ts
│   ├── day3-functions.ts
│   ├── day4-narrowing.ts
│   ├── day5-interfaces.ts
│   ├── day6-classes.ts
│   ├── day7-generics.ts
│   ├── day8-utility-types.ts
│   └── day9-literal-enums.ts
├── .gitignore
├── notes.md
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Topics Covered So Far

### Core Basics
- TypeScript setup
- compiler basics
- type annotations
- type inference
- basic primitive types
- arrays
- objects
- functions

### Intermediate Foundations
- `any` vs `unknown`
- union types
- type aliases
- return type annotations
- optional parameters
- optional properties

### Type Safety Concepts
- narrowing with `typeof`
- narrowing with `in`
- null checks
- discriminated unions
- custom type guards

### Object Modeling
- interfaces
- nested interfaces
- interface extension
- type alias vs interface

### OOP Basics
- classes
- constructors
- methods
- access modifiers
- readonly properties
- inheritance

### Advanced Type Reuse
- generics
- generic constraints
- generic interfaces
- generic classes
- reusable typed abstractions

### Utility Type Practice
- `Partial<T>`
- `Required<T>`
- `Readonly<T>`
- `Pick<T, K>`
- `Omit<T, K>`
- `Record<K, T>`
- `Exclude<T, U>`
- `ReturnType<T>`
- `Parameters<T>`

### Controlled Values and Constants
- string literal types
- number literal types
- boolean literal types
- union literal types
- numeric enums
- string enums
- `as const`

## Notes Style
For each learning day, notes are added for:
- concept understanding
- revision points
- interview-style quick recall

## Why This Repo Exists
This repo is not just for syntax practice. It is meant to:
- build TypeScript thinking
- improve debugging confidence
- prepare for React/Next.js with TypeScript
- create clean revision material for interviews