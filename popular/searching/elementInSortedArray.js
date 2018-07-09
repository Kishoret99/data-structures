function findPivot(array, left, right) {
    let middle = left + Math.floor((right-left)/2);
    if (left == right){
        return left;
    } else if(array[middle] < array[right] && array[middle] < array[middle - 1 ]) {
        return middle;
    } else if(array[middle] > array[right]) {
        return findPivot(array, middle + 1, right);
    } else {
        return findPivot(array, left, middle - 1)
    }
}

function binarySearch(array, key, left, right) {
    let middle = left + Math.floor((right - left)/2);
    
    if(array[middle] == key) {
        return middle;
    } else if (array[middle]  < key) {
        return binarySearch(array, key, middle + 1, right);
    } else if (array[middle]  > key){
        return binarySearch(array, key, left, middle-1)
    } else {
        return -1;
    }
}

a = [5,7, 4, 4.5]

function pivotedBinarySearch(array, key) {
    let pivot = findPivot(array, 0, (array.length-1));
    console.log(pivot);
    if( pivot == 0) {
        return binarySearch(array, key, 0, array.length-1);
    } else if(array[0] == key) {
        return 0;
    } else if(array[0] < key) {
        return binarySearch(array, key, 0, pivot-1);
    } else {
        return binarySearch(array, key, pivot, (array.length-1))
    }
}

let response = pivotedBinarySearch(a, 7);
console.log(response);
