const axios = require('axios')
const url = 'http://localhost:50050'

const concurrentCalls = async (n) => {
    let hrstart = process.hrtime()
    arr = []
    for (let j = 0; j < n; j++) arr.push(axios.get(url+'/books'))
    await Promise.all(arr).then(response => {
        t = process.hrtime(hrstart)
        t = t[0]+t[1]/1000000000
        console.log(t,n)
    })
    return t
}

const manyConcurrentCalls = async () => {
    let data = {}
    let list = [1,2,4,8,16,32,64,128,256,512,1024,2048,4096]
    for (k of list){
        data[k] = await concurrentCalls(k)
    }
    console.log(data)
}
manyConcurrentCalls()