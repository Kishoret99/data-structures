/**
 * Given an array of integers where each element represents the max number of steps that can be made forward from that element. 
 * Write a function to return the minimum number of jumps to reach the end of the array (starting from the first element). 
 * If an element is 0, then cannot move through that element.

Example:

Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
Output: 3 (1-> 3 -> 8 ->9)
First element is 1, so can only go to 3. Second element is 3, so can make at most 3 steps eg to 5 or 8 or 9.
 */

function jump(stepsArr, stepsChosen, start = 0, solns = []) {
    
    if(start === stepsArr.length - 1) {
        solns.push([...stepsChosen]); 
        console.log(solns);
        return;
    };
    
    const maxSteps = Math.min(stepsArr[start], (stepsArr.length - start - 1));
    for(let i = maxSteps; i > 0; i--) {
    
        stepsChosen.push(stepsArr[start]);
        if(jump(stepsArr, stepsChosen, start + i, solns)){
            return true;
        };
        stepsChosen.pop();
    }
    return false;
}

jump([1, 6, 2, 8, 9], [], 0, [])
