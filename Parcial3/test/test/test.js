let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);const url= 'http://localhost:8084';

describe('Obtiene los productos existentes: ',()=>{
    it('Deberia obtener todos los productos registrados', (done) => {
        chai.request(url)
        .get('/producto/')
        .send()
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            done();
        });
    });
});