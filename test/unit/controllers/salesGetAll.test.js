const sinon = require('sinon');
const { expect } = require('chai');
const salesService = require('../../../services/sales');
const salesController = require('../../../controllers/sales');

describe('Chamada do controller listSales', () => {
    describe('quando não existem vendas no BD', () => {
        const request = {};
        const response = {};

        beforeEach(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();

            sinon.stub(salesService, 'getAllSales').resolves([]);
        });

        afterEach(() => {
            salesService.getAllSales.restore();
        });
        
        it('verifica se existe o método "status" passando "200" code', async () => {
            await salesController.listSales(request, response);
            expect(response.status.calledWith(200)).to.be.equal(true);
        });
        
        it('verifica se existe um json contendo um array', async () => {
            await salesController.listSales(request, response);
            expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
        });
    });

    describe('quando existem vendas no BD', () => {
        const request = {};
        const response = {};
    
        const salesMock =[
            {
                saleId: 1,
                date: '2022-05-12T23:45:08.000Z',
                productId: 1,
                quantity: 5
            },
            {
                saleId: 1,
                date: '2022-05-12T23:45:08.000Z',
                productId: 2,
                quantity: 10
            },
            {
                saleId: 2,
                date: '2022-05-12T23:45:08.000Z',
                productId: 3,
                quantity: 15
            }
        ]
    
        beforeEach(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
            sinon.stub(salesService, 'getAllSales').resolves(salesMock);
          })
      
          afterEach(() => {
            salesService.getAllSales.restore();
          });
      
          it('é chamado o método "status" passando o código 200', async () => {
            await salesController.listSales(request, response);
      
            expect(response.status.calledWith(200)).to.be.equal(true);
          });
      
          it('é chamado o método "json" passando um array', async () => {
            await salesController.listSales(request, response);
      
            expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
          });
      
        });
      }); 