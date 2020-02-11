import express from  'express';

let app = express();

app.get('/users', (req, res, next) => {
    res.send(["Tony","Lisa","Michael","Ginger","Food"])
})

app.listen(3000, () => {
    console.log('Server running on 3000');
})

