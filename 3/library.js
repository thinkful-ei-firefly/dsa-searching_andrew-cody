function makeLibrary() {

    const bookList = [
        { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
        { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
        { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
        { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
        { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
        { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
        { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
        { author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
        { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
        { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
    ]

    let deweyMain = []
    let deweySub = []
    let titles = []

    for (let i = 0; i < bookList.length; i++) {
        let book = bookList[i]
        let deweyA = book.dewey.slice(0, 3)
        let deweyB = book.dewey.slice(4)
        let title = book.title
        deweyMain.push(deweyA)
        deweySub.push(deweyB)
        titles.push(title)
    }
    let library = bookList;

    return { library, deweyMain, deweySub, titles }

}

module.exports = makeLibrary