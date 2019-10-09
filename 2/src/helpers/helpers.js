const binarySearch = (array, value, start, end, count = 1) => {
  var start = start === undefined ? 0 : start
  var end = end === undefined ? array.length : end

  if (start > end) {
    return end
  }

  const index = Math.floor((start + end) / 2)
  // console.log(`index is ${index}`)
  const item = array[index]
  
  if (item === undefined){
    return `Binary: Value NOT found, searched ${count} items`
  }
  // console.log(start, end);
  if (item == value) {
    if (count === 0) {
      return `Binary: Value FOUND, searched ${count} item`
    }
    return `Binary: Value FOUND, searched ${count + 1} items`
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end, count + 1)
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1, count + 1)
  }
}

const indexOf = (array, value) => {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    count++
    if (array[i] == value) {
      return `Linear: Value FOUND, searched ${count} items`
    }
  }
  return `Linear: Value NOT found, searched ${count} items`
}

function binarySearchCount(array, val) {
  // function turns string array into array and val to int
  array = numbersInStr(array)
  val = parseInt(val)
  
  array = array.sort((a,b) => a-b)
  return binarySearch(array, val)
}
function linearSearchCount(array, val){
  // function turns string array into array and val to int
  array = numbersInStr(array)
  val = parseInt(val)
  
  return indexOf(array, val)
}

function numbersInStr(str){
  let numbers = str.match(/\d+/g).map(Number)
  return numbers
}

// numbersInStr('[1,2,3,4,8,10]')


module.exports = {
  binarySearchCount,
  linearSearchCount
}

// console.log(indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9], 7))
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))
// console.log(linearSearchCount([1, 2, 3, 4, 5, 6, 7, 8, 9], 7))
// console.log(binarySearchCount('[1, 10, 3, 5, 4, 6, 7, 8, 9]', '10'))
