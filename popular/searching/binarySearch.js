process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
process.stdin.on("end", function () {
   var splittedInput = stdin_input.split("\n");
   input = splittedInput.map(ele => ele.split(" ").map(x => parseInt(x)))
   main(input);
});


function main(input) {
    var responseIndex = binarySearch([1, 5, 7, 9, 11, 55, 45,667], 667, 0,7);
    console.log(responseIndex);
}

function binarySearch(array, number, left, right) {
    let middle = left + Math.floor((right -left)/2);
    if( array[middle] ==  number) {
        return middle;
    } else if(array[middle] > number) {
        return binarySearch(array, number, left, middle -1 )
    } else {
        return binarySearch(array, number, middle + 1, right)
    }
}