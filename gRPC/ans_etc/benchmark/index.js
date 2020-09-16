const http = require('http');
const { createClient: grpcClient } = require('../src/grpc-client');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

suite
  .add('GRPC', { defer: true, fn: grpcGreet })
  .add('GRPC5', { defer: true, fn: grpcGreet5 })
  .add('GRPC25', { defer: true, fn: grpcGreet25 })
  .add('GRPC100', { defer: true, fn: grpcGreet100 })
  .add('GRPC500', { defer: true, fn: grpcGreet500 })
  .add('GRPC1000', { defer: true, fn: grpcGreet1000 })
  .add('GRPC5000', { defer: true, fn: grpcGreet5000 })
  .add('GRPC10000', { defer: true, fn: grpcGreet10000 })
  .add('REST', { defer: true, fn: restGreet })
  .add('REST5', { defer: true, fn: restGreet5 })
  .add('REST25', { defer: true, fn: restGreet25 })
  .add('REST100', { defer: true, fn: restGreet100 })
  .add('REST500', { defer: true, fn: restGreet500 })
  .add('REST1000', { defer: true, fn: restGreet1000 })
  .add('REST5000', { defer: true, fn: restGreet5000 })
  .add('REST10000', { defer: true, fn: restGreet10000 })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });

function restGreet(deferred) {
  http.get('http://localhost:3000', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      deferred.resolve()
    });
  }).on('error', console.log);
}

function restGreet5(deferred) {
  http.get('http://localhost:3000/5', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      deferred.resolve()
    });
  }).on('error', console.log);
}

function restGreet25(deferred) {
  http.get('http://localhost:3000/25', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      deferred.resolve()
    });
  }).on('error', console.log);
}

function restGreet100(deferred) {
  http.get('http://localhost:3000/100', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      deferred.resolve()
    });
  }).on('error', console.log);
}

function restGreet500(deferred) {
  http.get('http://localhost:3000/500', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      deferred.resolve()
    });
  }).on('error', console.log);
}

function restGreet1000(deferred) {
  http.get('http://localhost:3000/1000', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      deferred.resolve()
    });
  }).on('error', console.log);
}

function restGreet5000(deferred) {
  http.get('http://localhost:3000/5000', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      deferred.resolve()
    });
  }).on('error', console.log);
}

function restGreet10000(deferred) {
  http.get('http://localhost:3000/10000', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      deferred.resolve()
    });
  }).on('error', console.log);
}


function grpcGreet(deferred) {
  grpcClient().then((client) => {
    client.greetDefault({}, function (err, res) {
      if (err) {
        return console.log(err);
      }
      return deferred.resolve();
    });
  });
}

function grpcGreet5(deferred) {
  grpcClient().then((client) => {
    client.greetDefault5({}, function (err, res) {
      if (err) {
        return console.log(err);
      }
      return deferred.resolve();
    });
  });
}

function grpcGreet25(deferred) {
  grpcClient().then((client) => {
    client.greetDefault25({}, function (err, res) {
      if (err) {
        return console.log(err);
      }
      return deferred.resolve();
    });
  });
}

function grpcGreet100(deferred) {
  grpcClient().then((client) => {
    client.greetDefault100({}, function (err, res) {
      if (err) {
        return console.log(err);
      }
      return deferred.resolve();
    });
  });
}

function grpcGreet500(deferred) {
  grpcClient().then((client) => {
    client.greetDefault500({}, function (err, res) {
      if (err) {
        return console.log(err);
      }
      return deferred.resolve();
    });
  });
}

function grpcGreet1000(deferred) {
  grpcClient().then((client) => {
    client.greetDefault1000({}, function (err, res) {
      if (err) {
        return console.log(err);
      }
      return deferred.resolve();
    });
  });
}

function grpcGreet5000(deferred) {
  grpcClient().then((client) => {
    client.greetDefault5000({}, function (err, res) {
      if (err) {
        return console.log(err);
      }
      return deferred.resolve();
    });
  });
}

function grpcGreet10000(deferred) {
  grpcClient().then((client) => {
    client.greetDefault10000({}, function (err, res) {
      if (err) {
        return console.log(err);
      }
      return deferred.resolve();
    });
  });
}