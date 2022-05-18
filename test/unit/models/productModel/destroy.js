const productModel = require('../../../../models/productModel');

const { expect } = require('chai');

const sinon = require('sinon');

const connection = require('../../../../models/connection');

const returnFail = [{
    affectedRows: 0,
}]

const returnSucess = [{
    affectedRows: 1,
}]

const existId = 1;

const notExistId = 101;

describe('ProductModel.destroy', () => {
    describe('Should fail when', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves(returnFail)
        })
        after(() => {
            connection.execute.restore();
        })

        it('No existant id is provided', async () => {
            const result = await productModel.destroy(notExistId);
            expect(result.affectedRows).to.be.equal(0)
        })
    })

    describe('Should pass when', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves(returnSucess)
        })

        after(() => {
            connection.execute.restore();
        })

        it('An existant id is provided', async () => {
            const result = await productModel.destroy(existId);
            expect(result.affectedRows).to.be.equal(1);
        })
    })
})
