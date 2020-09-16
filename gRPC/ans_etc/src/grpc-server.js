const grpc = require('grpc');
const loader = require('@grpc/proto-loader');

const HOST = `0.0.0.0:${process.env.PORT || 3000}`;

var fs = require('fs'); /* Put it where other modules included */
var data = JSON.parse(fs.readFileSync('./src/json/json.json', 'utf8')); /* Inside the get function */
var data5 = JSON.parse(fs.readFileSync('./src/json/json5.json', 'utf8')); /* Inside the get function */
var data25 = JSON.parse(fs.readFileSync('./src/json/json25.json', 'utf8')); /* Inside the get function */
var data100 = JSON.parse(fs.readFileSync('./src/json/json100.json', 'utf8')); /* Inside the get function */
var data500 = JSON.parse(fs.readFileSync('./src/json/json500.json', 'utf8')); /* Inside the get function */
var data1000 = JSON.parse(fs.readFileSync('./src/json/json1000.json', 'utf8')); /* Inside the get function */
var data5000 = JSON.parse(fs.readFileSync('./src/json/json5000.json', 'utf8')); /* Inside the get function */
var data10000 = JSON.parse(fs.readFileSync('./src/json/json10000.json', 'utf8')); /* Inside the get function */


class GreetingsHandler {
  greetDefault(_, callback) {
    return callback(null, data);
  }

  greetDefault5(_, callback) {
    return callback(null, data5);
  }

  greetDefault25(_, callback) {
    return callback(null, data25);
  }

  greetDefault100(_, callback) {
    return callback(null, data100);
  }

  greetDefault500(_, callback) {
    return callback(null, data500);
  }

  greetDefault1000(_, callback) {
    return callback(null, data1000);
  }

  greetDefault5000(_, callback) {
    return callback(null, data5000);
  }

  greetDefault10000(_, callback) {
    return callback(null, data10000);
  }
  

}

const createServer = function (host, handler) {
  loader.load('greet.proto', { includeDirs: ['./src', './'] }).then((packageDefinition) => {
    const { grettings_package } = grpc.loadPackageDefinition(packageDefinition);
    const service = grettings_package.Greeting.service;
    const server = new grpc.Server();
    server.addService(service, handler);
    server.bind(host, grpc.ServerCredentials.createInsecure());
    server.start();
  });
}

createServer(HOST, new GreetingsHandler);

console.log(`Server running on ${HOST}`);