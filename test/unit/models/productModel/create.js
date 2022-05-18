const { expect } = require('chai');

const sinon = require('sinon');

const connection = require('../../../../models/connection');

const productModel = require('../../../../models/productModel');

const expected = {
    "id": 5,
    "name": "teste",
    "quantity": 100,
};

const createProduct = {
    "name": "teste",
    "quantity": 100,
};

describe('productModel.create', () => {
    describe('Should pass when', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([expected]);
        });

        after(() => {

        });

        it('Correct data is provided', async () => {
            const result = await productModel.create(createProduct);
            expect(result).to.be.equal(expected); 
        });
    });
});
