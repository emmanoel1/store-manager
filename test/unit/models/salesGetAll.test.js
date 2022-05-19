const { expect } = require('chai');
const sinon = require('sinon');
const saleModel = require('../../../models/sales');
const connection = require('../../../models/connection');

describe('Busca todos as vendas no BD', () => {
    describe('quando não existem vendas no BD', () => {
        const resultExecute = [[]];

        beforeEach(() => {
            sinon.stub(connection, 'execute')
              .resolves(resultExecute);
        });

        afterEach(() => connection.execute.restore());

        it('verifica se retorna um array', async () => {
            const result = await saleModel.allSales();
            expect(result).to.be.an('array');
        });

        it('verifica se retorna um array vazio', async () => {
            const result = await saleModel.allSales();
            expect(result).to.be.empty;
        });

    });

    describe('quando existem vendas no BD', () => {
        const resultExecute = [
	{
		"saleId": 1,
		"date": "2022-05-12T23:45:08.000Z",
		"productId": 1,
		"quantity": 5
	},
	{
		"saleId": 1,
		"date": "2022-05-12T23:45:08.000Z",
		"productId": 2,
		"quantity": 10
	},
	{
		"saleId": 2,
		"date": "2022-05-12T23:45:08.000Z",
		"productId": 3,
		"quantity": 15
	}
]

        beforeEach(() => {
            sinon.stub(connection, 'execute')
              .resolves([resultExecute]);
        });

        afterEach(() => connection.execute.restore());

        it('verifica se retorna um array', async () => {
            const result = await saleModel.allSales();
            expect(result).to.be.an('array');
        });

        it('verifica se o array está populado', async () => {
            const result = await saleModel.allSales();
            expect(result).to.be.not.empty;
        });

        it('verifica se o array está populado com objetos', async () => {
            const [result] = await saleModel.allSales();
            expect(result).to.be.an('object');
        });

        it('verifica se o objeto possui as propriedades saleId, date, productId, quantity', async () => {
            const [result] = await saleModel.allSales();
            expect(result).to.be.includes.all.keys(
                'saleId',
                'date',
                'productId',
                'quantity'
            );
        });
    });
});