var a = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];

function sameNumberAsIndex(a) {
    let index = 0;
    while(index < a.length) {
        if(a[index] == -1) {
            index++
        } else if(a[index] == -1) {
            a[index] == -1;
            index++;
        } else if(a[index] == index) {
            index++
        } else if(a[index] >= a.length) {
            a[index] = -1;
            index++;
        } 
        else {
            let curr = a[index];
            let temp = a[curr];
            a[curr] = curr;
            a[index] = temp;
        }
    }
    console.log(a);
}
sameNumberAsIndex(a);