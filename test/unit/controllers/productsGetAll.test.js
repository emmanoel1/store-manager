const sinon = require('sinon');
const { expect } = require('chai');
const productsService = require('../../../services/products');
const productsController = require('../../../controllers/products');

describe('Chamada do controller listProducts', () => {
    describe('quando não existem produtos no BD', () => {
        const request = {};
        const response = {};

        beforeEach(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();

            sinon.stub(productsService, 'getAllProducts').resolves([]);
        });

        afterEach(() => {
            productsService.getAllProducts.restore();
        });
        
        it('verifica se existe o método "status" passando "200" code', async () => {
            await productsController.listProducts(request, response);
            expect(response.status.calledWith(200)).to.be.equal(true);
        });
        
        it('verifica se existe um json contendo um array', async () => {
            await productsController.listProducts(request, response);
            expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
        });
    });

    describe('quando existem produtos no BD', () => {
        const request = {};
        const response = {};
    
        const productsMock =[
            {
                id: 1,
                name: 'Martelo de Thor',
                quantity: 10
            },
            {
                id: 2,
                name: 'Traje de encolhimento',
                quantity: 20
            },
            {
                id: 3,
                name: 'Escudo do Capitão América',
                quantity: 30
            }]
    
    
        beforeEach(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
            sinon.stub(productsService, 'getAllProducts').resolves(productsMock);
        })
    
        afterEach(() => {
            productsService.getAllProducts.restore();
        });
    
        it('é chamado o método "status" passando o código 200', async () => {
          await productsController.listProducts(request, response);
    
          expect(response.status.calledWith(200)).to.be.equal(true);
        });
    
        it('é chamado o método "json" passando um array', async () => {
          await productsController.listProducts(request, response);
    
          expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
        });
    });
})