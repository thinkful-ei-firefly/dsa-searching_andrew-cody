//input same except array can have same values in a row
//output should be object: {start: firstIndexTheValueMatches, end: lastIndexTheValueMatches}

const bookList = [
    { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
    { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
    { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
    { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
    { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
    { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
    { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
    { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
    { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
    { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
  ]

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
    if (item.dewey == value) {
        const anchorIndex = index;
        let start = anchorIndex
        let end = anchorIndex
        //do some search to find start index
        while(array[index - 1].dewey === item.dewey){
            start -= index
        }
        //do some search to find end index
        while(array[index + 1].dewey === item.dewey){
            start += index
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