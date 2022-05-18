const { expect } = require('chai');

const sinon = require('sinon');

const connection = require('../../../../models/connection');

const saleModel = require('../../../../models/saleModel');


const expectedReturn = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1 Changed: 0 Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
};

const input = {
    saleId: 1,
    productId: 3,
    quantity: 6,
};

describe('saleModel.update', () => {
    describe('Should Succeed when', () => {
        before(() => {
            const fnStub = sinon.stub(connection, 'execute');
            fnStub.onCall(0).resolves([expectedReturn]);
            fnStub.onCall(1).resolves([[{ quantity: 2 }]]);
            fnStub.onCall(2).resolves();
        });

        after(() => {
            connection.execute.restore();
        });

        it('Correct ID has been typed', async () => {
            const result = await saleModel.update(input);
            expect(result.affectedRows).to.be.eql(1);
        });
    });
});
