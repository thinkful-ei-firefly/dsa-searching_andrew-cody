const binarySearch = (array, value, start, end, count = 1) => {
  var start = start === undefined ? 0 : start
  var end = end === undefined ? array.length : end

  if (start > end) {
    return end
  }

  const index = Math.floor((start + end) / 2)
  console.log(`index is ${index}`)
  const item = array[index]

  // console.log(start, end);
  if (item == value) {
    // return index
    if (index === undefined) {
      return `Binary: Value NOT found, search ${count} times`
    } else if (count === 0) {
      return `Binary: Value FOUND, searched ${count} item`
    } else {
      return `Binary: Value FOUND, searched ${count+1} items`
    }
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

module.exports = {
  binarySearch,
  indexOf
}

console.log(indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9], 7))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))

function binarySearchResp(array, val) {
  array.sort()
  binarySearch(array, val)
}
