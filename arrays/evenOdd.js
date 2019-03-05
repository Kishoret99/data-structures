var array = [1,4,5,6,7,9,7,4]

function evenOdd(array) {
    let index = 0;
    let right = array.length - 1;
    while(index < right) {
        if(array[index]%2 == 0) {
            index++;
        } else {
            let temp = array[index];
            array[index] = array[right];
            array[right] = temp;
            right--;
        }
     }

     console.log(array);
}

evenOdd(array);