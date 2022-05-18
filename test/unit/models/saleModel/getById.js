const { expect } = require('chai');

const sinon = require('sinon');

const connection = require('../../../../models/connection');

const saleModel = require('../../../../models/saleModel');

const expectedReturn = [
    {
        product_id: 2,
        quantity: 10,
        date: "2022-04-25T04:36:38.000Z",
    }
];

const expectedResult = [
    {
        product_id: 2,
        quantity: 10,
        date: "2022-04-25T04:36:38.000Z",
    }
]

const ID = 1;

describe('saleModel.getById', () => {
    describe('Should Succeed when', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([expectedReturn]);
        })

        after(() => {
            connection.execute.restore();
        })

        it('Correct ID has been typed', async () => {
            const result = await saleModel.getById(ID);
            expect(result).to.be.eql(expectedResult);
        });
    });
});
