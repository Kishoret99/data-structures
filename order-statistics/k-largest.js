let a = [5, 2, -1, -3, 6, 7, 11, 10, 1]

function topK(array, k) {

    let rand = Math.floor(Math.random() * Math.floor(array.length))
    let [left, pivot, right] = partition(array, array[rand]);
    if((left.length  == (k -1))) {
        return pivot;
    }
    if(left.length > k-1) {
        return topK(left, k);
    }
    if(left.length < k-1) {
        return topK(right, (k - left.length - 1));
    }
}

function partition(array, pivot) {
    let left = [], right = [];
    array.forEach(ele => {
        if(ele < pivot) left.push(ele);
        else if(ele > pivot) right.push(ele);
    })
    return [left, pivot, right]
}

var hello  = topK(a,3)
console.log(hello)
