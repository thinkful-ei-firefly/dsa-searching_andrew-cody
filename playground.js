const linearSearch = require('./linearSearch') //linearSearch(array, value)
const binarySearch = require('./binarySearch') //binarySearch(array, value, [start], [end])
const BST = require('./bst') //BST class; bst.dfs(values); bst.bfs(tree, values)

let arr = [1, 15, 25, 35, 40, 59, 67, 79, 82, 94, 100]
console.log(linearSearch(arr, 40))
console.log(binarySearch(arr, 67))