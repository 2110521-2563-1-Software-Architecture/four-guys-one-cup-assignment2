var grpc = require('grpc');

var booksProto = grpc.load('books.proto');

var client = new booksProto.books.BookService('127.0.0.1:50051', 
  grpc.credentials.createInsecure());

client.list({}, function(error, books) {
  if (error)
    console.log('Error: ', error);
  else
    console.log(books);
});


function printResponse(error, response) {
  if (error)
    console.log('Error: ', error);
  else
    console.log(response);
}

function listBooks() {
  client.list({}, function(error, books) {
    printResponse(error, books);
  });
}

function insertBook(id, title, author) {
  var book = { id: parseInt(id), title: title, author: author };
  client.insert(book, function(error, empty) {
    printResponse(error, empty);
  });
}

function getBook(id) {
  client.get({ id: parseInt(id) }, function(error, book) {
    printResponse(error, book);
  });
}

function deleteBook(id) {
  client.delete({ id: parseInt(id) }, function(error, empty) {
    printResponse(error, empty);
  });
}

function watchBooks() {
  var call = client.watch({});
  call.on('data', function(book) {
    console.log(book);
  });
}

function test1(){

  var testSet = [1, 10000, 20000, 30000, 40000, 50000]

  var result = {}

  testSet.forEach(amount => {
      var books = Array.from({length: amount}, (_, i) => {
          return {
              id: i,
              title: 'A Tale of Two Cities',
              author: 'Charles Dickens'
          }
      })

      let start = Date.now()

      for(let i = 0; i<books.length ; i++){
          var {id, title, author} = books[i]
          insertBook(id, title, author)
      }

      let end = Date.now()

      result[amount] = (end-start)/amount

  })

  console.log(result)
}

var processName = process.argv.shift();
var scriptName = process.argv.shift();
var command = process.argv.shift();

if (command == 'list')
  listBooks();
else if (command == 'insert')
  insertBook(process.argv[0], process.argv[1], process.argv[2]);
else if (command == 'get')
  getBook(process.argv[0]);
else if (command == 'delete')
  deleteBook(process.argv[0]);
else if (command == 'watch')
  watchBooks();
else if (command == 'test')
  test1()

