// main entry point
import { Stack } from "./stack.js";

const main = (): void => {

    const stack = new Stack<number>();
    console.log("isEmpty", stack.isEmpty());

    for (let i: number = 0; i < 30; i++) {
        stack.push(i);
    }

    console.log("size", stack.size());
    stack.print();
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log("size", stack.size());
    console.log("isEmpty", stack.isEmpty());
    stack.print();
    const stack2 = stack.clone();
    console.log("==============================");
    stack2.print();
}

main();