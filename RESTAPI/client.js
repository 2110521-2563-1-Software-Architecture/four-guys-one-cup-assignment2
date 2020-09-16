const axios = require('axios')
const url = 'http://localhost:50050'

const listBooks = async () => {
    try {
        let res = await axios.get(url+'/books')
        console.log(res.data)
        return res.data
    } catch(e) {
        console.log(e)
    }
};

const insertBook = async (id,title,author) => {
    try {
        let res = await axios.post(url+'/book/add',{id: parseInt(id), title: title, author: author})
        return res.data
    } catch(e) {
    }
};

const getBook = async (id) => {
    try {
        let res = await axios.get(url+'/book/'+id)
        console.log(res.data)
        return res.data
    } catch(e) {
        console.log(e)
    }
};

const deleteBook = async (id) => {
    try {
        let res = await axios.get(url+'/book/del/'+id)
        console.log(res.data)
        return res.data
    } catch(e) {
        console.log(e)
    }
};

const testInsert = (id, title, author) => 
    new Promise(resolve => resolve(insertBook(id, title, author)));

const batchInsert = async arguments => {
    let start = Date.now()

    for (const item of arguments){
        await testInsert(item);
    }
    let end = Date.now()

    console.log(arguments.length ,(end-start)/arguments.length)
}

function test1(){

    var testSet = [100000, 200000, 300000, 400000, 500000]

    // var result = {}

    testSet.forEach(amount => {
        var books = Array.from({length: amount}, (_, i) => {
            return {
                id: i,
                title: 'A Tale of Two Cities',
                author: 'Charles Dickens'
            }
        })

        batchInsert(books)

    })
}

var processName = process.argv.shift();
var scriptName = process.argv.shift();
var command = process.argv.shift();

if (command == 'list') {
    listBooks()
} else if (command == 'insert') {
    insertBook(process.argv[0], process.argv[1], process.argv[2]);
} else if (command == 'get') {
    getBook(process.argv[0]);
} else if (command == 'delete') {
    deleteBook(process.argv[0]);
} else if (command == 'test') {
    test1()
}