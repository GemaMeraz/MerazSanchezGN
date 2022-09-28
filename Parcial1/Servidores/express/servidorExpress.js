const express = require('express')
const app = express()
const cors=require('cors')
const { query } = require('express')
var path = require('path');
var fs = require('fs');
var morgan = require('morgan');
const cadena = require('./cadena')



// var publicPath = path.resolve(__dirname, 'static')
// app.use(express.static(publicPath));
app.use(cors({origin:"http://localhost"}))
app.use(express.text())
app.use(express.json())

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

app.use((req,res,next)=>{
    console.log("Esta es una funcion del middleware")
    next()
},(req,res,next)=>{
    console.log("Esta es una segunda funcion de middleware")
    next()
})

// app.use((req,res))

app.get('/',(req,res)=>{
    res.sendFile('./static/index.html',{root:__dirname},(err)=>{console.log('Archivo enviado')})
})

// app.post('/',(req,res)=>{res.json({Usuario:'Gema'})})

// post que utiliza un modulo que se creo en clase
app.post('/texto',(req,res)=>{
    console.log(req.body)
   let may = cadena.pasarMayusculas(req.body);
   let sinespa = cadena.quitarEspacios(req.body);
   let longi = cadena.obtenerLongitud(req.body)
    res.json({mayusculas:may,
    sinespacios:sinespa,
longitud:longi})

})

app.post('/json',(req,res)=>{
    console.log(req.body.nombre)
    let cadena="Hola "+ req.body.nombre+" "+ req.body.apellido+ " como estas"
    res.json({saludo:cadena})
})

app.get('/mayusculas/:cadenas',(req,res)=>{
    console.log(req.params)
    res.send(req.params)
})

app.get('/suma',(req,res)=>{
    console.log(req.query)
    let suma= parseInt(req.query.x)+parseInt(req.query.y)
    res.send(`La suma es ${suma}`)
})

app.use('/',(req,res)=>{
    res.status(404).sendFile('./static/404.html',{root:__dirname})
})


app.listen(8081, ()=>{
    console.log('servidor express escuchando en puerto 8081')
    console.log(__dirname)
    console.log(__filename)
});