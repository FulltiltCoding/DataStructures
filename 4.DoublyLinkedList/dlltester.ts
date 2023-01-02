// tsc --target esnext dlltester.ts && node dlltester.js && rm *.js

import { DoublyLinkedList } from './doublylinkedlist.js'

const main = (): void => {

    const dllist = new DoublyLinkedList<number>();
    console.log("isEmpty: ", dllist.isEmpty());
    console.log("size() ", dllist.size());

    for (let i: number = 0; i < 30; i++) {
        dllist.addLast(i + 100);
        dllist.addFirst(i);
    }

    dllist.print();
    console.log("contains 129", dllist.contains(129));

    console.log("size() ", dllist.size());

    dllist.print();
    console.log("isEmpty: ", dllist.isEmpty());

    for (let i: number = 0; i < 30; i++) {
        dllist.removeFirst();
        dllist.removeLast();
    }

    console.log("contains 14 at index: ", dllist.contains(5));
    console.log("size() ", dllist.size());

    dllist.print();
    console.log("isEmpty: ", dllist.isEmpty());

}

main();