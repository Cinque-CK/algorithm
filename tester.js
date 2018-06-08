require('./sort.js');
const Heap = require('./heap.js');
function _sortTestCaseGen() {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
        const ele = Math.floor(Math.random() * 200000);
        array.push(ele);
    }
    return array;
}

function _sortResultCheck(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function _sortTester(array, ...funcs) {
    for (let func of funcs) {
        let temp = array.slice(0);
        const startTime = new Date().getTime();
        temp[func]();
        const endTime = new Date().getTime();
        if (_sortResultCheck(temp)) {
            console.log(`Algorithm ${func} took ${endTime - startTime} ms.`);
        } else {
            console.log(`Algorithm ${func} error.`);
        }
    }
}

function main() {
    const testCase = _sortTestCaseGen(); 
    _sortTester(testCase, 'native_sort', 'quick_sort3', 'heap_sort');
}

main();
