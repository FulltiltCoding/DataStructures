// tsc --target esnext doublylinkedlisttester.ts && node doublylinkedlisttester.js && rm *.js

import { DoublyLinkedList } from "./doublylinkedlist.js";

const random = (min, max): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// create the list
const dllist: DoublyLinkedList<number> = new DoublyLinkedList();
const size: number = 10;

// fill the list
for (let i: number = 0; i < size; i++) {
    dllist.addFirst(random(1, 100));
    dllist.addLast(random(1, 100));
}

// print the list
console.log("Iterator Test===============================");
dllist.print();
console.log("size: ", dllist.size());
console.log("isEmpty ", dllist.isEmpty());

// toArray
console.log("Print Array===============================");
console.table(dllist.toArray());

// remove items from list
for (let i: number = 0; i < size; i++) {
    console.log("removeFirst: ", dllist.removeFirst());
    console.log("removeLast: ", dllist.removeLast());
}
console.log("size: ", dllist.size());
console.log("isEmpty ", dllist.isEmpty());
