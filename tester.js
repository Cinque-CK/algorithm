const jsNativeSort = require('./sort/jsNativeSort');
const selectionSort = require('./sort/selectionSort');

function _compare(testCase, ...args) {
    for (let algoFunc of args.entries()) {
        if (typeof algoFunc[1] === 'function') {
            let temp = JSON.parse(JSON.stringify(testCase));
            const startTime = new Date().getTime();
            const result = algoFunc[1](temp);
            const endTime = new Date().getTime();
            if (_sortResultCheck(result)) {
                console.log(`Algorithm ${algoFunc[0] + 1} took ${endTime - startTime} ms.`);
            } else {
                console.log(`Algorithm ${algoFunc[0] + 1} error.`);
            }
        }
    }
}

function _sortTestCaseGen() {
    let testCase = [];
    for (let i = 0; i < 50000; i++) {
        const ele = Math.floor(Math.random() * 10000);
        testCase.push(ele);
    }
    return testCase;
}

function _sortResultCheck(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            console.log(arr[i], arr[i + 1]);
            return false;
        }
    }
    return true;
}

const testCase = _sortTestCaseGen();

_compare(testCase, jsNativeSort, selectionSort);
