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
        console.log(res.data)
        return res.data
    } catch(e) {
        console.log(e)
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
}