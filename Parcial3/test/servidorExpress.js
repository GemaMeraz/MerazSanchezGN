
const express = require('express')
const { query, json } = require('express')
let json2xls=require('json2xls')
let fs=require('fs')
const cors=require('cors')
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc  = require('swagger-jsdoc');
const ruta_producto=require('./rutas/ruta_producto')
const path = require('path')


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {title: 'API de Productos',version: '1.0.0',      
        },
        servers:[           
             {url: "http://localhost:8084"}        
            ],      
        },
        apis: [`${path.join(__dirname,"./rutas/ruta_producto.js")}`],  };

const app = express()
app.use(express.text())
app.use(express.json())
app.use(cors({origin:"http://localhost"}))

app.use('/producto',ruta_producto.router)

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.listen(8084, ()=>{
    console.log('servidor express escuchando en puerto 8084')
    // console.log(__dirname)
    // console.log(__filename)
});
