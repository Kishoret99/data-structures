function findMedian(array, left, right) {
    let leftMiddle = left + Math.floor((right-left)/2);
    let rightMiddle = left + Math.ceil((right -left)/2);
    if (leftMiddle != rightMiddle ) {
        return (array[leftMiddle] + array[rightMiddle])/2
    } else {
        return array[leftMiddle];
    }
}

function twoMedian(arrayOne, leftOne, rightOne, arrayTwo, leftTwo, rightTwo) {
    if(rightOne - leftOne == 1 && rightTwo - leftTwo == 1) {
        lastArray = [arrayOne[leftOne],arrayOne[rightOne], arrayTwo[leftTwo],arrayTwo[rightTwo]];
        lastArray = lastArray.sort((a,b) => a>b)
        return findMedian(lastArray, 0, 3)
    }
    if(findMedian(arrayOne, leftOne, rightOne) > findMedian(arrayTwo, leftTwo, rightTwo)) {
        rightOne = Number.isInteger((rightOne - leftOne)/2) ? leftOne + (rightOne - leftOne)/2 : (leftOne + Math.floor((rightOne - leftOne)/2) +1);
        return twoMedian(arrayOne, leftOne, rightOne, arrayTwo, (leftTwo + Math.floor((rightTwo - leftTwo)/2)), rightTwo)
    } else if(findMedian(arrayOne, leftOne, rightOne) < findMedian(arrayTwo, leftTwo, rightTwo)) {
        rightTwo = Number.isInteger((rightTwo - leftTwo)/2) ? leftTwo+ (rightTwo - leftTwo)/2 : (leftTwo + Math.floor((rightTwo - leftTwo)/2) +1);
        return twoMedian(arrayOne, (leftOne + Math.floor((rightOne - leftOne)/2)), rightOne, arrayTwo, leftTwo, rightTwo)
    } 
}

a = [1,3,5]
b = [2,4,6]

response = twoMedian(a, 0, (a.length-1), b, 0, (b.length -1))
console.log(response)