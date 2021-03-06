const exch = (a, i, j) => {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

const less = (a, b) => a < b; //compares a and b

const insertionSort = (a) => {
    const N = a.length;

    for(let i = 1; i < N; i++) {
        for(let j = i; j > 0 && less(a[j], a[j-1]); j--) {
            exch(a, j, j-1);
        }
        
    }
    return a;
}

console.log(insertionSort('malaba'.split('')));
