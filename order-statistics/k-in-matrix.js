input = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [24, 29, 37, 48],
    [32, 33, 39, 50]
]

const getObj = function (ele, index) {
    return {
        value: ele,
        row: 0,
        column: index
    }
}
array = input[0].map(getObj)


const buildHeap = (index) => {
    if(isLeaf(index)) {
        return array[index];
    }
    buildHeap(right(index));
    buildHeap(left(index));
    downHeapify(index);
}

const isLeaf = (index) => {
    const len = array.length;
    return ((right(index) >= len) && (left(index) >= len))
}

const right = (index) => {
    return (2*index + 2)
}


const left = (index) => {
    return (2*index + 1)
}

const isSingleChild = (index) => {
    return (right(index) >= array.length)
}

const downHeapify = (index) => {
    if(isLeaf(index)) {
        return;
    }
    if(isSingleChild(index)) {
        if((array[left(index)].value < array[index].value)) {
            [array[index], array[left(index)]] = [array[left(index)], array[index]];
            return;
        }
        return;
    }
    const min = Math.min(array[left(index)].value, array[right(index)].value);
    if(min < array[index].value) {
        if(array[left(index)].value > array[right(index)].value) {
            [array[right(index)], array[index]] = [array[index], array[right(index)]]
        }
        else {
            [array[left(index)], array[index]] = [array[index], array[left(index)]];
        }
        return;
    }
}

buildHeap(0);
k = 6
while(k > 0) {
    let root = array[0];
    console.log(root.value);
    let obj = {
        value: input[(array[0].row+1)][array[0].column],
        row: (array[0].row+1),
        column: array[0].column
    }
    array[0] = obj;
    downHeapify(0);
    k--;
}