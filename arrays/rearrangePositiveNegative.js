var array = [-1, 2, -3, 4, 5, 6, -7, 8, 9]

function rearrange() {
    let initial = true;
    let ref = array.length - 1;
    let i = 0;
    while( i < array.length) {
        if((array[i] > 0) == initial) {
            initial = !initial;
            i++;
        } else {
            let temp = array[i];
            array[i] = array[ref];
            array[ref] = temp;
            if((array[i] > 0) == initial) {
                ref--;
            }
        }
    }
}
rearrange();
console.log(array);
