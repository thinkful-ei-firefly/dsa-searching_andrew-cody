const linearSearch = (array, value, start, end) => {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
    if (start === end && array[start] == value) {
        return start
    }
    else if (start > end) {
        return -1;
    }

    for (let i = start; i < end; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    
    return -1;
};

module.exports = linearSearch