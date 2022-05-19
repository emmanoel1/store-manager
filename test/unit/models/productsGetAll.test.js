const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../models/products');
const connection = require('../../../models/connection');

describe('Busca todos os produtos no BD', () => {
    describe('quando não existem produtos no BD', () => {
        const resultExecute = [[]];

        beforeEach(() => {
            sinon.stub(connection, 'execute')
              .resolves(resultExecute);
        });

        afterEach(() => connection.execute.restore());

        it('verifica se retorna um array', async () => {
            const result = await productModel.allProducts();
            expect(result).to.be.an('array');
        });

        it('verifica se retorna um array vazio', async () => {
            const result = await productModel.allProducts();
            expect(result).to.be.empty;
        });

    });

    describe('quando existem produtos no BD', () => {
        const resultExecute = [
            {
                "id": 1,
                "name": "Martelo de Thor",
                "quantity": 10
            },
            {
                "id": 2,
                "name": "Traje de encolhimento",
                "quantity": 20
            },
            {
                "id": 3,
                "name": "Escudo do Capitão América",
                "quantity": 30
            }
        ];

        beforeEach(() => {
            sinon.stub(connection, 'execute')
              .resolves([resultExecute]);
        });

        afterEach(() => connection.execute.restore());

        it('verifica se retorna um array', async () => {
            const result = await productModel.allProducts();
            expect(result).to.be.an('array');
        });

        it('verifica se o array está populado', async () => {
            const result = await productModel.allProducts();
            expect(result).to.be.not.empty;
        });

        it('verifica se o array está populado com obejtos', async () => {
            const [result] = await productModel.allProducts();
            expect(result).to.be.an('object');
        });

        it('verifica se o objeto possui as propriedades id, name, quantity', async () => {
            const [result] = await productModel.allProducts();
            expect(result).to.be.includes.all.keys(
                'id',
                'name',
                'quantity'
            );
        });
    });
});