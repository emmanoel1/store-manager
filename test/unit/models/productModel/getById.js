const productModel = require('../../../../models/productModel');

const { expect } = require('chai');

const sinon = require('sinon');

const connection = require('../../../../models/connection');

const resultSuccess = {
    id:2,
    name: 'Traje de encolhimento',
    quantity: 20
}

const sucessId = 2;

describe('productModel.getById', () => {
    describe('Should pass when', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([[resultSuccess]])
        })
        after(() => {
            connection.execute.restore()
        })

        it('Correct id id provided', async () => {
            const result = await productModel.getById(sucessId)
            expect(result).to.be.equal(resultSuccess);
        })
    })
})
