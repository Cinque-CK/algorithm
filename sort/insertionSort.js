const insertionSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i];
        for (let j = i - 1; j > 0; j--) {
            if (temp < arr[j]) {
                arr[j + 1] = arr[j];
            } else {
                arr[j] = temp;
                break;
            }
        }
    }
    return arr;
};

module.exports = insertionSort;
