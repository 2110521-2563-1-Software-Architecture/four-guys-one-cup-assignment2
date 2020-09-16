var grpc = require('grpc');

var booksProto = grpc.load('books.proto');

var client = new booksProto.books.BookService('127.0.0.1:50051', 
  grpc.credentials.createInsecure());

function printResponse(error, response) {
    if (error)
      console.log('Error: ', error);
    else
      console.log(response);
  }
  
async function insertBook(id, title, author) {
    var book = { id: parseInt(id), title: title, author: author };
    await client.insert(book, function(error, empty) {
        printResponse(error, empty);
    });
}

const batchInsert = async arguments => {
    let start = Date.now()

    for (const item of arguments){
        let {id, title, author} = item
        await insertBook(id, title, author);

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