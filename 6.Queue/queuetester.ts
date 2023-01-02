// tsc --target esnext queuetester.ts && node queuetester.js && rm *.js

import { Queue } from "./queue.js";

const q: Queue<number> = new Queue();
const size: number = 50_000_000;

q.print();
console.log("Size: ", q.size());
console.log("IsEmpty: ", q.isEmpty());

console.time("enqueue time");
for (let i: number = 0; i < size; i++) {
    q.enqueue(i);
}
console.timeEnd("enqueue time");

for (let i: number = 0; i < size; i++) {
    q.dequeue();
}

q.print();
console.log("Size: ", q.size());
console.log("IsEmpty: ", q.isEmpty());

q.clear();

q.print();
console.log("Size: ", q.size());
console.log("IsEmpty: ", q.isEmpty());