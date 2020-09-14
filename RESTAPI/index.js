const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var books = [
    { 
        id: 123, title: 'A Tale of Two Cities', author: 'Charles Dickens' 
    },
]


app.get('/books', (req, res)=>{
    return res.send(
        {
            "books": books
        }
    )
});

app.get('/book/:id', (req, res)=>{

    for (var i = 0; i < books.length; i++){
        if (books[i].id == req.params.id){
            return res.send(
                books[i]
            );
        }
    }
    return res.status(404).json({
        "message": "Not found"
    })
});

app.post('/book/add', (req, res)=>{
    if (req.body){
        books.push({
            id: req.body.id,
            title: req.body.title,
            author: req.body.author
        })
        return res.status(200).json({})
    }
    else return res.sendStatus(404)
});

app.get('/book/del/:id', (req, res)=>{

    if (req.params.id){
        for (var i = 0; i < books.length; i++)
            if (books[i].id == req.params.id){
                books.splice(i, 1);
                return res.status(200).json({})
            }
        return res.status(404).json({
            "message": "Not found"
        })

    }
});


app.listen(50050, () =>
  console.log(`App listening on port ${50050}!`),
);