class Heap {
    constructor(array) {
        this._array = this._heapify(array);
        this.indexed = [];
    }

    _shiftUp(i) {
        while (i > 0 && this._array[i] > this._array[Math.floor((i - 1) / 2)]) {
            let temp = this._array[Math.floor((i - 1) / 2)];
            this._array[Math.floor((i - 1) / 2)] = this._array[i];
            this._array[i] = temp;
            i = Math.floor((i - 1) / 2);
        }
    }

    _shiftDown(array, i) {
        while (i * 2 + 1 < array.length) {
            let j = 2 * i + 1;
            if (j + 1 < array.length && array[j + 1] > array[j]) {
                j++;
            }
            if (array[i] >= array[j]) {
                break;
            }
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
            i = j;
        }
    }

    _heapify(array){
        const length = array.length;
        for(let i = length - 1; i >=0; i--){
            this._shiftDown(array, i);
        }
        return array;
    }

    insert(ele) {
        this._array.push(ele);
        this._shiftUp(this._array.length - 1);
    }

    extract() {
        const ele = this._array[0];
        let temp = ele;
        this._array[0] = this._array[this._array.length - 1];
        this._array[this._array.length - 1] = temp;
        this._array.pop();
        this._shiftDown(0);
        return ele;
    }

    get value() {
        return this._array;
    }
}

module.exports = Heap;