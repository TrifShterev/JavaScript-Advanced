function mySort(arr,typeStr) {
    const sorter ={
        'asc': (a,b) => a -b,
        'desc': (a,b) => b -a
    }

    return arr.sort(sorter[typeStr]);
}

console.log(mySort([14, 17, 7, 6, 8], 'desc'));
console.log(mySort([14, 17, 7, 6, 8], 'asc'));