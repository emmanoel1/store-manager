const { expect } = require('chai');

const sinon = require('sinon');

const connection = require('../../../../models/connection');

const saleModel = require('../../../../models/saleModel');

const expectedReturn = [
    {
        sale_id: 1,
        product_id: 2,
        quantity: 10,
        date: "2022-04-25T04:36:38.000Z",
    },
    {
        sale_id: 2,
        product_id: 3,
        quantity: 6,
        date: "2022-04-25T04:36:38.000Z",
    }
];

const expectedResult = [
    {
        sale_id: 1,
        product_id: 2,
        quantity: 10,
        date: "2022-04-25T04:36:38.000Z",
    },
    {
        sale_id: 2,
        product_id: 3,
        quantity: 6,
        date: "2022-04-25T04:36:38.000Z",
    }
]

describe('saleModel.getAll', () => {
    describe('Should Succeed when', () => {
        before(() => {
            sinon.stub(connection, 'execute').resolves([expectedReturn]);
        })

        after(() => {
            connection.execute.restore();
        })

        it('Correct URL has been typed', async () => {
            const result = await saleModel.getAll();
            expect(result).to.be.eql(expectedResult);
        });
    });
});
