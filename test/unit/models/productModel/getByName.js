const { expect } = require('chai');

const sinon = require('sinon');

const connection = require('../../../../models/connection');

const productModel = require('../../../../models/productModel');

const expected = { id: 2, name: 'Traje de encolhimento', quantity: 20 };

const stringSearch = 'Traje de encolhimento';

describe('productModel.getByName', () => {
    describe('Should pass when', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([[expected]]);
        });

        after(() => {
            connection.execute.restore();
        });

        it('Correct name is provided', async () => {
            const result = await productModel.getByName(stringSearch);
            expect(result).to.have.lengthOf(1);
        });
    });
});
