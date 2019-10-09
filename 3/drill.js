const makeLibrary = require('./library')
const adjustedBinarySearch = require('./adjustedBinarySearch')
const linearSearch = require('./linearSearch')

function searchLibrary(library, dewey, title) {
    const deweyA = dewey.slice(0, 3)
	const deweyB = dewey.slice(4)
    let deweyMainMatch = adjustedBinarySearch(deweyA, library.deweyMain, 0, library.deweyMain.length)
    if(deweyMainMatch === -1) {
        throw new Error('Book Not Found')
    }
    let deweySubMatch = adjustedBinarySearch(deweyB, library.deweySub, deweyMainMatch.start, deweyMainMatch.end)
    if(deweySubMatch === -1) {
        throw new Error('Book Not Found')
    }
    let resultIndex = linearSearch(title, titles, deweySubMatch.start, deweySubMatch.end)
    if(resultIndex === -1) {
        throw new Error('Book Not Found')
    }
	return resultIndex
}

function main() {
    const library = makeLibrary()
    let book1Index = searchLibrary(library, '005.133', 'Teach Yourself C++ in 21 Days')
    let book2Index = searchLibrary(library, '231.7652', 'Starlight and Time')
    console.log(library[book1Index])
    console.log(library[book2Index])
    try {
        searchLibrary(library, '5', 'No')
    }
    catch {
        console.log('3rd search failed successfully')
    }
    try {
        searchLibrary(library, '005.44684', 'YEET')
    }
    catch {
        console.log('4rd search failed successfully')
    }
}

main()