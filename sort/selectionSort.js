const selectionSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j]<arr[minIndex]){
                let temp = arr[minIndex];
                arr[minIndex] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

module.exports = selectionSort;
