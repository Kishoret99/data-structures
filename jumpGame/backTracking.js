function backTrackingJumpGame(array, currIndex = 0, soln) {
    
    // BASE CONDITION
    if(currIndex == array.length -1 ) {
        return true;
    }

    let maxSteps = Math.min (
        array[currIndex], array.length - 1 - currIndex
    )

    for(let step = maxSteps; step > 0; --step) {
        let res =  backTrackingJumpGame(array, currIndex +  step );
        if(res) {
            return res;
        }
    }
    return false;
}

let a = [0, 3, 1]

console.log(backTrackingJumpGame(a))