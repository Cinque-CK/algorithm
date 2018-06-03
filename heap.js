class Heap {
    constructor() {
        this._array = [-1];
    }

    _shiftUp() {
        let i = this._array.length - 1;
        while (i > 1 && this._array[i] > this._array[Math.floor(i / 2)]) {
            let temp = this._array[Math.floor(i / 2)];
            this._array[Math.floor(i / 2)] = this._array[i];
            this._array[i] = temp;
            i = Math.floor(i / 2);
        }
    }

    _shiftDown() {
        let i = 1;
        while (i * 2 < this._array.length) {
            let j = 2 * i;
            if (j + 1 < this._array.length && this._array[j + 1] > this._array[j]) {
                j++
            }
            if (this._array[i] >= this._array[j]) {
                break;
            }
            let temp = this._array[j];
            this._array[j] = this._array[i];
            this._array[i] = temp;
            i = j;
        }
    }

    insert(ele) {
        this
            ._array
            .push(ele)
        this._shiftUp()
    }

    extract() {
        const ele = this._array[1];
        let temp = ele;
        this._array[1] = this._array[this._array.length - 1]
        this._array[this._array.length - 1] = temp;
        this._array.pop();
        this._shiftDown();
        return ele;
    }

    get value() {
        return this._array;
    }
}

module.exports = Heap;