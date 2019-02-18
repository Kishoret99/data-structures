function backTrackingJumpGame(array, currIndex = 0, currentJumps = []) {
    
    // BASE CONDITION
    if(currIndex == array.length -1 ) {
        return true;
    }

    let maxSteps = Math.min (
        array[currIndex], array.length - 1 - currIndex
    )

    for(let step = maxSteps; step > 0; --step) {
        const nextIndex = currIndex + step;
        currentJumps.push(nextIndex);
        let res =  backTrackingJumpGame(array, nextIndex, currentJumps);
        if(res) {
            return res;
        }
        currentJumps.pop();
    }
    return false;
}

let a = [0, 3, 1]

console.log(backTrackingJumpGame(a));


// DP top down approach (recursion and memoization)

function backTrackingJumpGame(array, currIndex = 0, currentJumps = [], cellGoodness = []) {
    
    // BASE CONDITION
    if(currIndex == array.length -1 ) {
        return true;
    }

    const currentCellGoodness = [...cellGoodness];
    if(currentCellGoodness.length == 0) {
        array.forEach(() => {
            currentCellGoodness.push(undefined);
        })
        currentCellGoodness[currentCellGoodness.length -1 ] = true;
    }

    let maxSteps = Math.min (
        array[currIndex], array.length - 1 - currIndex
    )

    for(let step = maxSteps; step > 0; --step) {

        const nextIndex = currIndex + step;
        if(currentCellGoodness[nextIndex]) {
            currentJumps.push(nextIndex);
            let res =  backTrackingJumpGame(array, nextIndex, currentJumps);
            if(res) {
                return res;
            }
            currentCellGoodness[nextIndex] = false;
            currentJumps.pop();
        }
    }
    return false;
}


function backTrackingJumpGame(array, currIndex = 0, currentJumps = [], cellGoodness = []) {
    
    // BASE CONDITION
    if(currIndex == array.length -1 ) {
        return true;
    }

    const currentCellGoodness = [...cellGoodness];
    if(currentCellGoodness.length == 0) {
        array.forEach(() => {
            currentCellGoodness.push(undefined);
        })
        currentCellGoodness[currentCellGoodness.length -1 ] = true;
    }

    let maxSteps = Math.min (
        array[currIndex], array.length - 1 - currIndex
    )

    for(let step = maxSteps; step > 0; --step) {

        const nextIndex = currIndex + step;
        if(currentCellGoodness[nextIndex]) {
            currentJumps.push(nextIndex);
            let res =  backTrackingJumpGame(array, nextIndex, currentJumps);
            if(res) {
                return res;
            }
            currentCellGoodness[nextIndex] = false;
            currentJumps.pop();
        }
    }
    return false;
}