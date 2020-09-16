var grpc = require('grpc');

var booksProto = grpc.load('books.proto');

var client = new booksProto.books.BookService('127.0.0.1:50051', 
  grpc.credentials.createInsecure());

function concurrentCalls(n) {
    let hrstart = process.hrtime()
    let tmp = []
    for (let i = 0; i < n; i++) {
        client.list({}, function(error, books) {
            if (error) {
                console.log('Error: ', error);
            } else {
                tmp.push(0)
                if (tmp.length==n) {
                    t = process.hrtime(hrstart)
                    console.log((t[0]+t[1]/1000000000),n)
                }
            }
        });
    }
    console.log('all')
}

var processName = process.argv.shift();
var scriptName = process.argv.shift();
var command = process.argv.shift();
concurrentCalls(parseInt(command))