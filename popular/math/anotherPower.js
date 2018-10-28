function main(n, m) {
    let largestBase = findLargestNumber(n, m);

}

function findLargestNumber(n, m) {
    if(n == 0 || m  == 0)  {
        return null;
    }
    let base = 1;
    while(Math.pow(base, m) <= n) {
        base++
    }
    return --base;
}