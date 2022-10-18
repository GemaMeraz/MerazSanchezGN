let mysql = require('mysql')
const express = require('express')
const app = express()
const cors=require('cors')
const { query } = require('express')
var path = require('path');
var fs = require('fs');
var morgan = require('morgan');
const cadena = require('./cadena')
const router = express.Router()



app.get('/producto/:idProducto', (res,req)=>{
    const id=req.params.idProducto;
    con.connect();

    con.query(`SELECT * FROM producto WHERE idProducto=1`, function(error,results, fields){
        console.log()
        if(error) throw error;
    });
    con.end();
})

let con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'gm19100218'
});





// var publicPath = path.resolve(__dirname, 'static')
// app.use(express.static(publicPath));
app.use(cors({origin:"http://localhost"}))
app.use(express.text())
app.use(express.json())
app.use(router)

router.route('./clientes')
    .all((req,res,next)=>{console.log("Peticion a la ruta de clientes")})
    .get((req,res,next)=>{console.log("Peticion a la ruta cliente");res.send("Regresando info")})
    .put((req,res,next)=>{console.log("Peticion a cliente");res.send("Regresando info")})
    



var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

app.use((req,res,next)=>{
    console.log("Esta es una funcion del middleware")
    next()
},(req,res,next)=>{
    console.log("Esta es una segunda funcion de middleware")
    next()
})

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


app.use('/',(req,res)=>{
    res.status(404).sendFile('./static/404.html',{root:__dirname})
})


app.listen(8081, ()=>{
    console.log('servidor express escuchando en puerto 8081')
    console.log(__dirname)
    console.log(__filename)
});