
const express = require('express')
const { query, json } = require('express')
let json2xls=require('json2xls')
let fs=require('fs')
const cors=require('cors')
const ruta_producto=require('./ruta_producto')

const app = express()
app.use(express.text())
app.use(express.json())
app.use(cors({origin:"http://localhost"}))

app.use('/producto',ruta_producto.router)

app.listen(8084, ()=>{
    console.log('servidor express escuchando en puerto 8084')
    // console.log(__dirname)
    // console.log(__filename)
});
