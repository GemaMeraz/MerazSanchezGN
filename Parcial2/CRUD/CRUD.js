const express = require('express')
const { query, json } = require('express')
let json2xls=require('json2xls')
let mysql = require('mysql')
let fs=require('fs')
// const {dirname} = require('path')

const app = express()
app.use(express.text())
app.use(express.json())

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'gm19100218'
});

con.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('conectado')
})

//Consultar todos los productos
app.get('/mostrarProductos', (req,res)=>{
   
    con.query('SELECT * FROM producto', function(error,results, fields){
        res.send(results)
        if(error) throw error;
    });
    
})

// consultar un producto en particular
app.get('/consultarProducto/:idProducto', (req,res)=>{
    const id=req.params.idProducto;
    con.query(`SELECT * FROM producto WHERE idProducto=${id}`, function(error,results, fields){
        res.send(results)
        if(error) throw error;
    });
    con.end();
})

// hacer el alta del producto
app.post('/ingresarProducto',(req,res)=>{
    con.query(`INSERT INTO producto (nomProducto, marcaProd,catProd,contProd,proveedor,desProd,precioProd) VALUES("${req.body.nomProducto}", "${req.body.marcaProd}", "${req.body.catProd}", "${req.body.contProd}", "${req.body.proveedor}", "${req.body.desProd}", ${req.body.precioProd})`, function(error,results, fields){
        res.send('Ingreso de datos realizado')
        if(error) throw error;
    });
});

//Eliminar el producto
app.delete('/eliminarProducto/:idProducto',(req,res)=>{
    const id=req.params.idProducto;
    con.query(`DELETE FROM producto WHERE idProducto=${id}`, function(error,results, fields){
        res.json('Producto eliminado correctamente')
        if(error) throw error;
    });
    con.end()
});

//modificar un producto
app.put('/modificarPoducto/:idProducto',(req,res)=>{
    console.log(req.query)
    const id=req.params.idProducto;
    let params={
        'nomProducto':req.query.nomProducto,
        'marcaProd':req.query.marcaProd,
        'catProd': req.query.catProd,
        'contProd': req.query.contProd,
        'proveedor': req.query.proveedor,
        'desProd': req.query.desProd, 
        'precioProd': req.query.precioProd
    }
    
    let mysql =`UPDATE producto SET ? WHERE idProducto=${id}`
    let bod = con.query(mysql,params,(err,result)=>{
        if(err) throw err;
        res.send('modificacion hecha')
    });
});

app.listen(8084, ()=>{
    console.log('servidor express escuchando en puerto 8084')
    console.log(__dirname)
    console.log(__filename)
});