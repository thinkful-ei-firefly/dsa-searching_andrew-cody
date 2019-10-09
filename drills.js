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

// 4) a. 14 19 15 27 25 35 79 90 91 89 35                                                                              
//    b.8 6 5 7 10 9 11             
//             

function main5() {
    let binTreeArray = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
    let tree = new BST
    for (let i=0; i<binTreeArray.length; i++) {
        tree.insert(binTreeArray[i])
    }
    console.log(tree.dfsPreOrder())
    console.log(tree.dfsInOrder())
    console.log(tree.dfsPostOrder())
}

main5()