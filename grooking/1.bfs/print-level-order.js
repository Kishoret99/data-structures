/***
 * Input: 
 * [3,9,20,null,null,15,7]
 * 
 * Output
 * For example:
 *         Given binary tree [3,9,20,null,null,15,7],
 *           3
 * / \
            9  20
                /  \
            15   7
    return its bottom-up level order traversal as:
        [
        [15,7],
        [9,20],
        [3]
        ]
*/

function afd (array, level = 0, solutions) {

    let temp = [];
    let offset = Math.pow(2, level) - 1;
    const rowLength = Math.pow(2, level);
    for(let i = 0; i < rowLength; i++) {

        if(((i + offset) > -1)) {
            ((array[i + offset]) && temp.push(array[i + offset]));
        } else {
            if(temp.length > 0) solutions.push(temp);
            return solutions;
        }
    
    }
    solutions.push(temp);
    level = level - 1;
    return afd(array, level, solutions);
}

const input = [3,9,20,null,null,15,7]
const height = Math.ceil(Math.log2(input.length + 1));
console.log(afd(input, height, []));


// choices choicepoints solutions 

