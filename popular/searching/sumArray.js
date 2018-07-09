A = [1, 2, 3, 4 , 5]
B = [];
function f() {
    for(var i = A.length-1; i >=0; i-- ) {
        B[i] = (B[i+1] ? B[i+1] : 0) + A[i];
    }
    console.log('kishore: ', B)
}

f();
