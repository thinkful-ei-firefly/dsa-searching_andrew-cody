//input same except array can have same values in a row
//output should be object: {start: firstIndexTheValueMatches, end: lastIndexTheValueMatches}


const adjustedBinarySearch = (array, value, start, end) => {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    //console.log(`index is ${index}`)
    const item = array[index];

    //console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

module.exports = adjustedBinarySearch