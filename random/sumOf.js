sumOfNeighbors = function(row, column) {
    function valueOf(a, row, column) {
        if(!a[row] || !a[column]) {
            return 0;
        }
        else {
            return a[row][column]
        }
    }
    let sum = 0;
    for(let i = row-1; i < row+2;i++ ) {
        for(let j = column-1; j < column+2; j++) {
            sum += valueOf(this, i, j)
        }
    }
    return sum - parseInt(this[row][column])
}
a = [[1, 2, 3],[4,5,6],[7,8,9]];
console.log(sumOfNeighbors.call(a, 1,2))