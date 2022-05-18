const { expect } = require('chai');

const sinon = require('sinon');

const connection = require('../../../../models/connection');

const saleModel = require('../../../../models/saleModel');

const expectedReturn = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 4,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
};

const input = [{ productId: 1, quantity: 2 }];

describe('saleModel.create', () => {
    describe('Should Succeed when', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([expectedReturn]);
        });

        after(() => {
            connection.execute.restore();
        });

        it('Correct data has been typed', async () => {
            const result = await saleModel.create(input);
            expect(result).to.be.eql(expectedReturn.insertId);
        });
    });
});
