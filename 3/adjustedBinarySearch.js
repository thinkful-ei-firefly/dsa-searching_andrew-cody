//input same except array can have same values in a row
//output should be object: {start: firstIndexTheValueMatches, end: lastIndexTheValueMatches}

//input example 
// const arrayExample = [0, 1, 2, 5, 5, 5, 7, 9, 10, 10, 12, 15, 18, 18]
// const valueExample = 5

const adjustedBinarySearch = (array, value, start, end) => {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];
    if (item == value) {
        let s = index
        let e = index
        //do some search to find start index
        while(array[s -1 ] === value){
            s--
        }
        //do some search to find end index
        while(array[e + 1] === item){
            e++
        }
        return {start: s, end: e}
        // return index
    }
    else if (item < value) {
        return adjustedBinarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return adjustedBinarySearch(array, value, start, index - 1);
    }
};

module.exports = adjustedBinarySearch

// console.log(adjustedBinarySearch(arrayExample, 5))