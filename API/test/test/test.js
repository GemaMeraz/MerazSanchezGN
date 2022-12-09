let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);const url= 'http://localhost:8084';


//test para probar que obtiene los colores existentes
describe('Obtiene los colores existentes: ',()=>{
    it('Deberia obtener todos los colores', (done) => {
        chai.request(url)
        .get('/color/')
        .send()
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            done();
        });
    });
});



//test
describe('Ingresar un color: ',()=>{     
    it('deberia ingresar un color', (done) => {       
        
        chai.request(url) 
        .post('/color/')
        .send({
            "nombre":"Amarrillo",
            "R":255,
            "G": 127,
            "B": 80
      }
        )
        .end((err, res) => {
            expect(res).to.have.status(200); 
            done()
        });
    });
});

//Test que trae un id en especifico
// describe('Obtener el color con el id 1: ',()=>{
//     it('Se obtiene el color con el id 1', (done) => {
//     chai.request(url)
//     .get('/color/1')
//     .end( function(err,res){
//     expect(res.body)
//     expect(res).to.have.status(200);
//     done();
//     });
//     });
//    });

//Test que actualiza
 describe('modifica : ',()=>{
    it('Debe modificar', (done) => {
     chai.request(url)
      .put('/color/modificar/4')
      .send({
        "nombre":"Celeste",
        "R":255,
        "G": 127,
        "B": 80
      })
      .end( function(err,res){
     expect(res).to.have.status(200);
     done();
    });
    });
    });

   //Test que elimina el ID que tu pongas 
   describe('Elimina el id 9: ',()=>{
    it('Debe eliminar el  id  9', (done) => {
    chai.request(url)
    .del('/color/9')
    .end( function(err,res){
    expect(res).to.have.status(200);
    done();
    });
    });
    });







