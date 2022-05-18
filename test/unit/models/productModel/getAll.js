const productModel = require('../../../../models/productModel');

const { expect } = require('chai');

const sinon = require('sinon');

const connection = require('../../../../models/connection');

const resultSucess = [{
    "id": 2,
    "name": "Traje de encolhimento",
    "quantity": 20
},
{
    "id": 3,
    "name": "Escudo do Capitão América",
    "quantity": 30
}]

describe('productModel.getAll', () => {
    describe('Should Succeed when', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([resultSucess])
        })

        after(() => {
            connection.execute.restore();
        })

        it('Correct URL has been typed', async () => {
            const result = await productModel.getAll()
            expect(result).to.be.equal(resultSucess)
        })
    })
})
