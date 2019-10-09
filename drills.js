const linearSearch = require('./linearSearch') //linearSearch(array, value)
const binarySearch = require('./binarySearch') //binarySearch(array, value, [start], [end])
const BST = require('./bst') //BST class; bst.dfs(values); bst.bfs(tree, values)

function main1() {
    let sortedList = [3, 5, 6,8, 11, 12, 14, 15, 17, 18]
    console.log(binarySearch(sortedList, 8))
    //indexes searched: 0-10, 0-4, 3-4, 3
    //numbers checked :  12,   6,   8 => 8 has index of 3

    console.log(binarySearch(sortedList, 16))
    //indexes searched: 0-10, 6-10, 6-7, 7-7, -1
    //numbers checked :  12,   17,  14,  15,  novalue => 16 is not in the array so it returns -1

    
}

main1()