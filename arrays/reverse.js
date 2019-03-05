var array = ['N', 'U', 'M', 'B', 'E', 'R'];

function reverse(a) {
    let left = 0;
    let right = a.length -1;
    while(left < right) {
        let temp = a[right];
        a[right] = a[left];
        a[left] = temp;
        left++;
        right--;
    }
    console.log(a);
}
reverse(array);