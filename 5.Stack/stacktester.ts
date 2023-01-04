// tsc --target esnext stacktester.ts && node stacktester.js && rm *.js

import { Stack } from "./stack.js";

const random = (min, max): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// create the stack
const stack: Stack<number> = new Stack<number>();
const size: number = 20;

// fill the stack
for (let i: number = 0; i < size; i++) {
    stack.push(random(1, 100));
}

// print the stack
console.log("Stack 1============================")
stack.print();
console.log("size", stack.size());
console.log("isEmpty", stack.isEmpty());

console.table(stack.toArray());

// empty
for (let i: number = 0; i < size; i++) {
    console.log("pop():", stack.pop());
}

console.log("Stack 1==============================");
console.log("size", stack.size());
console.log("isEmpty", stack.isEmpty());
stack.print();
