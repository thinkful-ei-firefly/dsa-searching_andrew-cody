//input same except array can have same values in a row
//output should be object: {start: firstIndexTheValueMatches, end: lastIndexTheValueMatches}

//input example 
const arrayExample = [0, 1, 2, 5, 5, 5, 7, 9, 10, 10, 12, 15, 18, 18]
const valueExample = 5

const adjustedBinarySearch = (array, value, start, end) => {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
    // console.log(value)

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];
    // console.log(item)

    
    //console.log(start, end);
    if (item == value) {
        const anchorIndex = index;
        let s = 0
        let e = anchorIndex
        //do some search to find start index
        while(array[index - 1] === item){
            s -= index
        }
        //do some search to find end index
        while(array[index + 1] === item){
            e += index
        }
        return {start: startIndex, end: endIndex}
        // return index
    }
    else if (parseFloat(item.dewey) < parseFloat(value)) {
        return adjustedBinarySearch(array, value, index + 1, end);
    }
    else if (parseFloat(item.dewey) > parseFloat(value)) {
        return adjustedBinarySearch(array, value, start, index - 1);
    }
};

module.exports = adjustedBinarySearch

console.log(adjustedBinarySearch(bookList, '005.2762'))