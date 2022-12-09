let mysql = require('mysql')
const express = require('express')
var router = express.Router()
// const {dirname} = require('path')



var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'api'
});

con.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('conectado')
})


/**
 * @swagger
 * /color:
 *  get:
 *     summary: Regresa una lista de los colores
 *     description: Colores por su nombre y código RGB
 *     responses:
 *        200: 
 *          description: Regresa los colores localizados en la base de datos
 *      
 */

//Consultar todos los colores que se encuentran en la base de datos
router.get('/' ,(req,res)=>{
   
    con.query('SELECT * FROM colores', function(error,results, fields){
        res.send(results)
        if(error) throw error;
    });
    
})

 /**
  * @swagger
   * /color/{idColor}:
   *   get:
   *     description: Muestra el color dependiendo el ID que ingreses.
   *     parameters:
   *       - name: idColor
   *         in: path
   *         description: 'Buscar por ID del color que deseas buscar'
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Retorna el objetos .
   */

// consultar un color en particular
.get('/:idColor', (req,res)=>{
    const id=req.params.idColor;
    con.query(`SELECT * FROM colores WHERE id=${id}`, function(error,results, fields){
        res.send(results)
        if(error) throw error;
    });
    con.end();
})


/**
  * @swagger
   * /color/ingresarColor:
   *   post:
   *     description: Agregar un color a la lista.
   *     parameters:
   *       - name: nombre
   *         in: query
   *         description: 'Ingresa el nombre'
   *         schema:
   *           type: string
   *       - name: R
   *         in: query
   *         description: 'Ingresa R'
   *         schema:
   *           type: integer
   *       - name: G
   *         in: query
   *         description: 'Ingresa G'
   *         schema:
   *           type: integer 
   *       - name: B
   *         in: query
   *         description: 'Ingresa B'
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description:   Mensaje confirmado que se agrego el color correctamente .
   */

// ingresar un nuevo color a la base de datos
.post('/',(req,res)=>{
    con.query(`INSERT INTO colores (nombre, R,G,B) VALUES("${req.body.nombre}", "${req.body.R}", "${req.body.G}", "${req.body.B}")`, function(error,results, fields){
        res.send('Ingreso de datos realizado')
        if(error) throw error;
    });
})

.post('/ingresarColor',(req,res)=>{
    const nombre=req.query.nombre;
    const R=req.query.R;
    const G=req.query.G;
    const B=req.query.B;
    
    con.query(`INSERT INTO colores (nombre, R,G,B) VALUES("${nombre}", "${R}", "${G}", "${B}")`, function(error,results, fields){
        res.send('Ingreso de datos realizado')
        if(error) throw error;
    });
})

/**
 * @swagger
 * /color/{idColor}:
 *  delete:
 *     description: eliminar colores por id
 *     parameters:
 *       - name: idColor
 *         in: path
 *         description: 'Buscar por ID del color que deseas buscar'
 *         schema:
 *           type: integer
 *     responses:
 *        200: 
 *          description: Se elimino el color indicado
 */



/**
  * @swagger
   * /color/{idColor}:
   *   put:
   *     description: Agregar un color a la lista.
   *     parameters:
   *       - name: idColor
   *         in: query
   *         description: 'Ingresa el id del color a modificar'
   *         schema:
   *           type: integer
   *       - name: nombre
   *         in: query
   *         description: 'Ingresa el nombre'
   *         schema:
   *           type: string
   *       - name: R
   *         in: query
   *         description: 'Ingresa R'
   *         schema:
   *           type: integer
   *       - name: G
   *         in: query
   *         description: 'Ingresa G'
   *         schema:
   *           type: integer 
   *       - name: B
   *         in: query
   *         description: 'Ingresa B'
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description:   Mensaje confirmado que se agrego el color correctamente .
   */


//modificar un producto
.put('/:idColor',(req,res)=>{
    console.log(req.query)
    const id=req.query.idColor;
    const nombre=req.query.nombre;
    const R=req.query.R;
    const G=req.query.G;
    const B=req.query.B;
    con.query(`Update colores set nombre="${nombre}", R=${R},G=${G}, B=${B} WHERE id="${id}"`, function(error,results, fields){
        res.send('los daros del color han sido modificados')
        if(error) throw error;
        });
})

.put('/modificar/:idColor',(req,res)=>{
    const id=req.params.idColor;
    con.query(`UPDATE colores SET nombre="${req.body.nombre}", R=${req.body.R},G=${req.body.G}, B=${req.body.B} WHERE id="${id}"`, function(error,results, fields){
        res.send('se han modificado los datos')
        if(error) throw error;
        });
})

//Eliminar el producto
.delete('/:idColor',(req,res)=>{
    const id=req.params.idColor;
    con.query(`DELETE FROM colores WHERE id=${id}`, function(error,results, fields){
        res.json('color eliminado correctamente')
        if(error) throw error;
    });
    con.end()
});

module.exports.router=router;