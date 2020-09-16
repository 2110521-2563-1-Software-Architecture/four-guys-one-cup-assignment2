const axios = require('axios')
const url = 'http://localhost:50050'

const insertBook = async (id,title,author) => {
    try {
        let res = await axios.post(url+'/book/add',{id: parseInt(id), title: title, author: author})
        return res.data
    } catch(e) {
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

    var testSet = [1, 10, 100 , 1000, 10000, 20000, 30000, 40000, 50000]

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

if (command == 'test') {
    test1()
}