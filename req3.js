const express = require('express');
const app = express();
const goods = [
    {id : 1, name : "Corek", price : 1, count : 1000},
    {id : 2, name : "Sok", price : 2, count : 600},
    {id : 3, name : "Toyuq", price : 3, count : 350},
    {id : 4, name : "Ketcup", price : 2, count : 240},
    {id : 5, name : "Mayonez", price : 2, count : 260},
    {id : 6, name : "Pomidor", price : 5, count : 607},
    {id : 7, name : "Xiyar", price : 4, count : 500},
    {id : 8, name : "Lavash", price : 2, count : 540},
    {id : 9, name : "Konfet", price : 6, count : 232},
    {id : 10, name : "Squwonka", price : 6, count : 506},
];
app.get('/', function (req, res) {
    res.send('Add /good/:id to get card number or /goods for get all goods');
});
app.get('/good/:id', function (req, res) {
    if(req.params.id > goods.length || req.params.id < 0){
        res.send("Error 404");
    }
    else{
        let id = 0;
        goods.forEach((good) =>{
            if(good.id == req.params.id){
                id = good.id
            }
        });
        res.send(goods[id - 1]);
    }
});
app.get('/goods', function (req, res) {
    res.send(goods);
});

app.get('/good', function (req, res) {
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    res.send({ goods: goods.slice(offset, offset + count), count: goods.length });
  });
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});