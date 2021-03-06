
const url = 'http://localhost:50050'
const util = require('util');
const { lstat } = require('fs');
const exec = util.promisify(require('child_process').exec);

const { performance } = require("perf_hooks");


const run = async (cmd) => {
    await exec(cmd);
  };
  
const calls = async (count) => {
    id = 0;
    rand = Math.floor(Math.random() * Math.floor(4));
    //let now = process.hrtime()
    const now = performance.now();
    for(let i=0; i < count; i++){
        if(rand == 0){
            await run("node ../gRPC/client.js list")
         
        }
        else if(rand == 1){
            await run(`node ../gRPC/client.js get ${id}`)
            
        }
        else if(rand == 2){
            await run(`node ../gRPC/client.js delete ${id}`)
            id--;
           
        }
        else if(rand == 3){
            await run(`node ../gRPC/client.js insert ${id} ${'eiei'} ${"eieiei"}`)
            id++;
            
        }
           
    }
    //let then = process.hrtime()
    const then = performance.now();
    //console.log(now, then)
    return then - now
}
const main = async () => {
    count = 15;
    output = [];
    for (let i = 1; i <= count; i++) {
      const time = await calls(i);
      output.push({
        count: i,
        time,
      });
    }

    console.log(output);
  };
  main();