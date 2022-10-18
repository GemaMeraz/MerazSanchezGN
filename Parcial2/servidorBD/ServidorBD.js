const express = require('express')
const { query } = require('express')
let json2xls=require('json2xls')
let mysql = require('mysql')
let fs=require('fs')
// const {dirname} = require('path')

const app = express()
app.use(express.text())
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.sendFile('./static/index.html',{root:__dirname},(err)=>{console.log('Archivo enviado')})
// })
app.get('/producto/:idProducto', (req,res)=>{
    const id=req.params.idProducto;
    let con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'gm19100218'
    });
    con.connect();

    con.query(`SELECT * FROM producto WHERE idProducto=${id}`, function(error,results, fields){
        res.send(results)
        if(error) throw error;
    });
    con.end();
})



app.listen(8084, ()=>{
    console.log('servidor express escuchando en puerto 8084')
    console.log(__dirname)
    console.log(__filename)
});