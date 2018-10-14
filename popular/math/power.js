
//    var splittedInput = stdin_input.split("\n");
//    input = splittedInput.map(ele => ele.split(" ").map(x => parseInt(x)))



function main(input) {// Writing output to STDOUT
    for(let i = 0; i < input[0]; i++) {
        let idx = i + 1;
        let n = input[idx][0];
        let m = input[idx][1];
        let counter = 0
        let value = abc(n, m, counter);
        console.log(value)
    }
}

function abc(n, m, counter = 0) {
    if (n == '0') {
        return counter;
    }
    let max = findMaxPower(n, m);
    let remainder  = n%Math.pow(m, max);
    let quotient = Math.floor(n/Math.pow(m, max))
    counter = counter + quotient
    return abc(remainder, m, counter);
}


function findMaxPower(n, m) {
    if(n, m == 0) {
        return null;
    }
    let j = 0;
    let pwr = 1;
    while(pwr <= n) {
        j = j + 1;
        pwr = Math.pow(m, j);
    }
    return j-1;
}

input = [[1],  [4,4]]
main(input);
