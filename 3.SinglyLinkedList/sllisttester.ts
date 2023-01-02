// tsc --target esnext sllisttester.ts && node sllisttester.js && rm *.js

import { SinglyLinkedList } from "./sllist.js";

const main = (): void => {

    const sllist: SinglyLinkedList<number> = new SinglyLinkedList();
    const size: number = 10;

    for (let i: number = 0; i < size; i++) {
        sllist.addFirst(i);
        sllist.addLast(i + 100);
    }

    console.log("Iterator Test===============================");
    for (const x of sllist) {
        console.log("iterator:", x);
    }

    console.table(sllist.toArray());

    console.log("contains", sllist.contains(102));
    console.log("size: ", sllist.size());
    console.log("isEmpty ", sllist.isEmpty());

    for (let i: number = 0; i < size; i++) {
        console.log("removeFirst: ", sllist.removeFirst());
        console.log("removeLast: ", sllist.removeLast());
    }

    console.log("size: ", sllist.size());
    console.log("isEmpty ", sllist.isEmpty());

    for (let i: number = 0; i < size; i++) {
        sllist.addFirst(i);
        sllist.addLast(i + 100);
    }

    const sllist2: SinglyLinkedList<number> = sllist.clone();
    sllist.print();
    console.log("list2===============================");
    sllist2.print();
    sllist.clear();
    console.log({ sllist2 });
    sllist2.printR();
}

main();