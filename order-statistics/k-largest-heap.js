var a = [5, 2, -1, -3, 6, 7, 11, 10, 1];

const isLeaf = (a, index) => {
    return (((2*index+1) >= a.length) && ((2*index + 2) >= a.length));
}

const isSingleChildRoot = (a, index) => {
    return ((2*index + 2) == a.length);
}

const isRoot = (a, index) => {
    return index == 0;
}

const leftChild = (a, index) => {
    return a[2*index + 1];
}

const rightChild = (a, index) => {
    return a[2*index + 2];
} 

function downHeapify(index) {
    if(index === a.length) {
        console.log(a);
        return a;
    }

    if(isLeaf(a, index)) return;
    if(isSingleChildRoot(a, index)) {
        if(leftChild(a, index) < a[index]) {
            return [a[2*index + 1], a[index]] = [a[index], a[2*index + 1]];
        }
        return;
    }
    if(Math.min(leftChild(a, index), rightChild(a, index)) >= a[index]) {

        return
    }
    if(leftChild(a, index) < rightChild(a, index)) {
        [a[2*index + 1], a[index]] = [a[index], a[2*index + 1]];
        downHeapify((2*index + 1));
        return
    }
    [a[2*index + 2], a[index]] = [a[index], a[2*index + 2]];
    downHeapify((2*index + 2))
}

function heapify(i) {
    if(isLeaf(a, i)) return;
    heapify(2*i+1);
    heapify(2*i+2);
    downHeapify(i);
}

heapify(0);

console.log(a);