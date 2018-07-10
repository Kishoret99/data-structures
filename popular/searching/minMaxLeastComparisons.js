function minMaxLeastComparisons(array) {
    var max = 0;
    var min = 0;
    array.map(e => {
        if(e < min) {
            min = e;
        } else if(e > max) {
            max = e;
        }
    })

    return {
        maximum: max,
        minimum: min
    }
}

var a = [2, 10, -1, -2, 4, 5,6]  
var response = minMaxLeastComparisons(a);
console.log(response);