const insertionSort = require('./insertionSort');

function _quickSort3Ways(arr, l, r) {
    // if (r - l <= 15) {
    //     insertionSort(arr);
    // }
    let lt = l;
    let gt = r + 1;
    debugger
    for (let i = l + 1; i < gt; i++) {
        if (arr[i] < arr[l]) {
            let temp = arr[lt + 1];
            arr[lt + 1] = arr[i];
            arr[i] = temp;
            lt++;
            i++;
        } else if (arr[i] > arr[l]) {
            let temp = arr[gt - 1]
            arr[gt - 1] = arr[i]
            arr[i] = temp;
            gt--;
        } else {
            continue;
        }
    }
    let outTemp = arr[lt];
    arr[lt] = arr[l];
    arr[l] = outTemp;
    _quickSort3Ways(arr, l, lt - 1);
    _quickSort3Ways(arr, gt, r);
}

function quickSort3Ways(arr) {
    _quickSort3Ways(arr, 0, arr.length - 1)
}

module.exports = quickSort3Ways;