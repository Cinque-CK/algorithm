const Heap = require('./heap');
Array.prototype.native_sort = function () {
    this.sort((a, b) => a - b);
};

Array.prototype.selection_sort = function () {
    for (let i = 0; i < this.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < this.length; j++) {
            if (this[j] < this[minIndex]) {
                let temp = this[minIndex];
                this[minIndex] = this[j];
                this[j] = temp;
            }
        }
    }
};

Array.prototype.selection_sort2 = function () {
    for (let i = 0; i < this.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < this.length; j++) {
            if (this[j] < this[minIndex]) {
                [this[j], this[minIndex]] = [this[minIndex], this[j]];
            }
        }
    }
};

Array.prototype.insertion_sort = function () {
    for (let i = 1; i < this.length; i++) {
        const temp = this[i];
        for (let j = i - 1; j >= 0; j--) {
            if (temp < this[j]) {
                this[j + 1] = this[j];
            } else {
                this[j] = temp;
                break;
            }
        }
    }
};

function _quick_sort3(array, left, right) {
    if (left >= right) {
        return;
    }
    let lt = left;
    let gt = right + 1;
    let i = left + 1;
    while (i < gt) {
        if (array[i] < array[left]) {
            let temp = array[lt + 1];
            array[lt + 1] = array[i];
            array[i] = temp;
            lt++;
            i++;
        } else if (array[i] > array[left]) {
            let temp = array[gt - 1];
            array[gt - 1] = array[i];
            array[i] = temp;
            gt--;
        } else {
            i++;
        }
    }
    let outTemp = array[lt];
    array[lt] = array[left];
    array[left] = outTemp;
    _quick_sort3(array, left, lt - 1);
    _quick_sort3(array, gt, right);
}
Array.prototype.quick_sort3 = function () {
    _quick_sort3(this, 0, this.length - 1);
};

Array.prototype.heap_sort = function () {

    let heap = new Heap(this);
    const length = heap.value.length;
    for (let i = 0; i < length; i++) {
        this[length - 1 - i] = heap.extract()
    }
}
